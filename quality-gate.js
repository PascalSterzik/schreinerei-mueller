/**
 * QUALITY GATE CHECKLIST
 * Run before every deployment: node quality-gate.js
 * Checks the built static output for common issues.
 */

const fs = require('fs')
const path = require('path')

const OUT_DIR = path.join(__dirname, 'out')
let errors = 0
let warnings = 0
let passes = 0

function check(label, condition, severity = 'error') {
  if (condition) {
    console.log(`  \x1b[32m✓\x1b[0m ${label}`)
    passes++
  } else if (severity === 'error') {
    console.log(`  \x1b[31m✗\x1b[0m ${label}`)
    errors++
  } else {
    console.log(`  \x1b[33m!\x1b[0m ${label} (warning)`)
    warnings++
  }
}

function fileExists(filePath) {
  return fs.existsSync(path.join(OUT_DIR, filePath))
}

function readFile(filePath) {
  const full = path.join(OUT_DIR, filePath)
  if (!fs.existsSync(full)) return ''
  return fs.readFileSync(full, 'utf-8')
}

function findAllHtml() {
  const results = []
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory() && entry.name !== '_next') {
        walk(full)
      } else if (entry.name.endsWith('.html')) {
        results.push(full)
      }
    }
  }
  walk(OUT_DIR)
  return results
}

// ============================================================
console.log('\n\x1b[1m=== QUALITY GATE ===\x1b[0m\n')

// 1. Build output exists
console.log('\x1b[1m[Build Output]\x1b[0m')
check('Build output directory exists', fs.existsSync(OUT_DIR))
check('index.html exists', fileExists('index.html'))
check('404 page exists', fileExists('404.html') || fileExists('404/index.html'))

// 2. SEO checks
console.log('\n\x1b[1m[SEO]\x1b[0m')
const indexHtml = readFile('index.html')
check('Has <title> tag', indexHtml.includes('<title'))
check('Has meta description', indexHtml.includes('meta name="description"') || indexHtml.includes('meta property="og:description"'))
check('Has Open Graph tags', indexHtml.includes('og:title'))
check('Has canonical or self-referencing', indexHtml.includes('canonical') || indexHtml.includes('og:url'), 'warning')
check('Has lang attribute on <html>', indexHtml.includes('lang="'))
check('Has JSON-LD schema markup', indexHtml.includes('application/ld+json'))
check('Schema includes LocalBusiness or subtype', indexHtml.includes('schema.org') && (indexHtml.includes('LocalBusiness') || indexHtml.includes('Restaurant') || indexHtml.includes('HairSalon') || indexHtml.includes('HomeAndConstructionBusiness') || indexHtml.includes('LodgingBusiness') || indexHtml.includes('Winery') || indexHtml.includes('Hotel')))

// 3. Content checks
console.log('\n\x1b[1m[Content]\x1b[0m')
check('No placeholder text "Lorem ipsum"', !indexHtml.toLowerCase().includes('lorem ipsum'))
check('No "TODO" in content', !indexHtml.includes('TODO') && !indexHtml.includes('todo:'))
check('No "undefined" in output', !indexHtml.includes('>undefined<'))
check('No "null" in visible content', !indexHtml.includes('>null<'))
check('No em-dashes (AI fingerprint)', !indexHtml.includes('\u2014'), 'warning')

// 4. Accessibility
console.log('\n\x1b[1m[Accessibility]\x1b[0m')
check('Has viewport meta tag', indexHtml.includes('viewport'))
const imgTags = indexHtml.match(/<img[^>]*>/g) || []
const imgsWithAlt = imgTags.filter(img => img.includes('alt='))
check(`All images have alt text (${imgsWithAlt.length}/${imgTags.length})`, imgTags.length === 0 || imgsWithAlt.length === imgTags.length)

// 5. Performance
console.log('\n\x1b[1m[Performance]\x1b[0m')
check('Google Fonts uses display=swap', indexHtml.includes('display=swap'))
check('Images use Unsplash CDN (optimized)', indexHtml.includes('images.unsplash.com') || indexHtml.includes('images.pexels.com'), 'warning')

// 6. Functionality
console.log('\n\x1b[1m[Functionality]\x1b[0m')
check('Has clickable phone number (tel:)', indexHtml.includes('tel:'))
check('Has clickable email (mailto:)', indexHtml.includes('mailto:'))
const allHtml = findAllHtml()
check(`Multiple pages generated (${allHtml.length} HTML files)`, allHtml.length >= 2)

// 7. Legal (German websites)
console.log('\n\x1b[1m[Legal/Compliance]\x1b[0m')
check('Has Impressum link', indexHtml.includes('impressum') || indexHtml.includes('Impressum'))
check('Has Datenschutz link', indexHtml.includes('datenschutz') || indexHtml.includes('Datenschutz'))

// ============================================================
console.log('\n\x1b[1m=== RESULTS ===\x1b[0m')
console.log(`  \x1b[32m${passes} passed\x1b[0m`)
if (warnings > 0) console.log(`  \x1b[33m${warnings} warnings\x1b[0m`)
if (errors > 0) console.log(`  \x1b[31m${errors} errors\x1b[0m`)

if (errors > 0) {
  console.log('\n\x1b[31mQuality gate FAILED. Fix errors before deploying.\x1b[0m\n')
  process.exit(1)
} else {
  console.log('\n\x1b[32mQuality gate PASSED. Ready to deploy.\x1b[0m\n')
  process.exit(0)
}
