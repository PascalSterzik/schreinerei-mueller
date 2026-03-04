/* ==========================================================================
   Schreinerei Mueller, Premium JavaScript
   ========================================================================== */

(function () {
  'use strict';

  /* ------- 1. Scroll Progress Bar ------- */
  const scrollProgress = document.getElementById('scrollProgress');
  if (scrollProgress) {
    window.addEventListener('scroll', function () {
      var h = document.documentElement;
      var pct = h.scrollTop / (h.scrollHeight - h.clientHeight);
      scrollProgress.style.transform = 'scaleX(' + Math.min(pct, 1) + ')';
    }, { passive: true });
  }

  /* ------- 2. Mobile Navigation ------- */
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ------- 3. Header Scroll State ------- */
  var header = document.getElementById('header');
  if (header) {
    var onHeaderScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onHeaderScroll, { passive: true });
    onHeaderScroll();
  }

  /* ------- 4. Custom Smooth Scroll ------- */
  function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();

      var startY = window.scrollY;
      var headerH = header ? header.offsetHeight : 80;
      var endY = target.getBoundingClientRect().top + startY - headerH - 20;
      var distance = endY - startY;
      var duration = Math.min(1200, Math.max(600, Math.abs(distance) * 0.6));
      var startTime = null;

      function step(ts) {
        if (!startTime) startTime = ts;
        var progress = Math.min((ts - startTime) / duration, 1);
        window.scrollTo(0, startY + distance * easeOutQuart(progress));
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  });

  /* ------- 5. Scroll-triggered Reveal Animations ------- */
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ------- 6. Stagger Delay Assignment ------- */
  document.querySelectorAll('.stagger').forEach(function (parent) {
    Array.from(parent.children).forEach(function (child, i) {
      child.style.setProperty('--i', i);
    });
  });

  /* ------- 7. Animated Counter ------- */
  var counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var end = parseInt(el.dataset.count, 10);
          if (isNaN(end)) return;
          var duration = 2200;
          var startTime = performance.now();
          var prefix = el.dataset.prefix || '';
          var suffix = el.dataset.suffix || '';

          function tick(now) {
            var elapsed = now - startTime;
            var progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic for smooth deceleration
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = prefix + Math.round(eased * end) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('[data-count]').forEach(function (el) {
    counterObserver.observe(el);
  });

  /* ------- 8. Parallax Images ------- */
  var parallaxImages = document.querySelectorAll('.parallax-img');
  if (parallaxImages.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    function updateParallax() {
      parallaxImages.forEach(function (img) {
        var rect = img.getBoundingClientRect();
        var viewH = window.innerHeight;
        if (rect.bottom < 0 || rect.top > viewH) return;
        var center = rect.top + rect.height / 2;
        var offset = ((center - viewH / 2) / viewH) * -30;
        img.style.transform = 'translateY(' + offset + 'px) scale(1.06)';
      });
    }
    window.addEventListener('scroll', updateParallax, { passive: true });
    updateParallax();
  }

  /* ------- 9. Hero Background Slow Zoom ------- */
  var heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    requestAnimationFrame(function () {
      heroBg.classList.add('loaded');
    });
  }

  /* ------- 10. FAQ Accordion ------- */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var answer = item.querySelector('.faq-answer');
      var isOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-answer').style.maxHeight = '0';
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = '0';
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ------- 11. 3D Tilt on Service/Value Cards ------- */
  if (window.innerWidth > 768) {
    var tiltCards = document.querySelectorAll('.service-card, .value-item');
    tiltCards.forEach(function (card) {
      card.addEventListener('mouseenter', function () {
        card.style.transition = 'transform 0.15s ease';
      });
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var cx = rect.width / 2;
        var cy = rect.height / 2;
        var rotateX = ((y - cy) / cy) * -4;
        var rotateY = ((x - cx) / cx) * 4;
        card.style.transform = 'perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
  }

  /* ------- 12. Gallery Lightbox with Zoom & Pan ------- */
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lbImg = lightbox.querySelector('img');
    var items = document.querySelectorAll('[data-lightbox]');
    var currentIndex = 0;
    var isZoomed = false;
    var panStart = { x: 0, y: 0 };
    var panOffset = { x: 0, y: 0 };
    var isDragging = false;

    items.forEach(function (item, i) {
      item.style.cursor = 'pointer';
      item.addEventListener('click', function () {
        currentIndex = i;
        openLightbox(item.dataset.lightbox);
      });
    });

    function openLightbox(src) {
      lbImg.src = src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
      resetZoom();
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
      resetZoom();
    }

    function resetZoom() {
      isZoomed = false;
      panOffset = { x: 0, y: 0 };
      lbImg.style.transform = '';
      lbImg.style.cursor = 'zoom-in';
    }

    function navigate(dir) {
      currentIndex = (currentIndex + dir + items.length) % items.length;
      lbImg.src = items[currentIndex].dataset.lightbox;
      resetZoom();
    }

    // Click image to zoom at cursor position
    lbImg.addEventListener('click', function (e) {
      e.stopPropagation();
      if (!isZoomed) {
        isZoomed = true;
        var rect = lbImg.getBoundingClientRect();
        var ox = ((e.clientX - rect.left) / rect.width - 0.5) * -200;
        var oy = ((e.clientY - rect.top) / rect.height - 0.5) * -200;
        panOffset = { x: ox, y: oy };
        lbImg.style.transform = 'scale(2.2) translate(' + ox + 'px, ' + oy + 'px)';
        lbImg.style.cursor = 'grab';
      } else {
        resetZoom();
      }
    });

    // Drag to pan when zoomed
    lbImg.addEventListener('mousedown', function (e) {
      if (!isZoomed) return;
      isDragging = true;
      panStart = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
      lbImg.style.cursor = 'grabbing';
      e.preventDefault();
    });
    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      panOffset = { x: e.clientX - panStart.x, y: e.clientY - panStart.y };
      lbImg.style.transform = 'scale(2.2) translate(' + panOffset.x + 'px, ' + panOffset.y + 'px)';
    });
    document.addEventListener('mouseup', function () {
      if (isDragging) {
        isDragging = false;
        if (isZoomed) lbImg.style.cursor = 'grab';
      }
    });

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });

    var prevBtn = lightbox.querySelector('.lightbox-prev');
    var nextBtn = lightbox.querySelector('.lightbox-next');
    if (prevBtn) prevBtn.addEventListener('click', function (e) { e.stopPropagation(); navigate(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function (e) { e.stopPropagation(); navigate(1); });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });

    // Touch support for lightbox
    var touchStartX = 0;
    lightbox.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    lightbox.addEventListener('touchend', function (e) {
      var diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) > 60) {
        navigate(diff < 0 ? 1 : -1);
      }
    }, { passive: true });
  }

  /* ------- 13. Google Reviews (Places API New) ------- */
  var reviewsContainer = document.getElementById('google-reviews');
  var reviewsSummary = document.getElementById('google-reviews-summary');
  var reviewsLoading = document.getElementById('google-reviews-loading');

  if (reviewsContainer && window.GOOGLE_PLACE_ID) {
    loadGoogleReviews();

    async function loadGoogleReviews() {
      try {
        var { Place } = await google.maps.importLibrary('places');
        var place = new Place({ id: window.GOOGLE_PLACE_ID });
        await place.fetchFields({
          fields: ['rating', 'userRatingCount', 'reviews', 'googleMapsURI']
        });
        renderGoogleReviews(place);
      } catch (e) {
        console.error('Places API error:', e);
        if (reviewsLoading) {
          reviewsLoading.innerHTML = '<p>Bewertungen konnten nicht geladen werden. Bitte besuchen Sie unser <a href="https://www.google.com/maps/place/?q=place_id:' + window.GOOGLE_PLACE_ID + '" target="_blank" rel="noopener" style="color:var(--walnut); text-decoration:underline;">Google Maps Profil</a>.</p>';
        }
      }
    }

    function renderGoogleReviews(place) {
      var starSvg = '<svg class="star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
      var emptyStarSvg = '<svg class="star star-empty" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';

      if (reviewsSummary && place.rating) {
        var html = '';
        html += '<span style="font-size:2.5rem; font-weight:600; color:var(--walnut);">' + place.rating.toFixed(1) + '</span>';
        html += '<div class="stars" style="justify-content:center; margin:8px 0;">';
        for (var s = 0; s < 5; s++) {
          html += s < Math.round(place.rating) ? starSvg : emptyStarSvg;
        }
        html += '</div>';
        if (place.userRatingCount) {
          html += '<span style="color:var(--text-light);">' + place.userRatingCount + ' Bewertungen auf Google</span>';
        }
        reviewsSummary.innerHTML = html;
        reviewsSummary.style.display = '';
        revealObserver.observe(reviewsSummary);
      }

      var reviews = place.reviews || [];
      var cards = '';
      reviews.forEach(function (review) {
        cards += '<div class="testimonial-card fade-up">';
        cards += '<div class="stars" style="margin-bottom:16px;">';
        for (var r = 0; r < 5; r++) {
          cards += r < review.rating ? starSvg : emptyStarSvg;
        }
        cards += '</div>';
        var text = review.text != null ? review.text : '';
        cards += '<p class="testimonial-text">' + text + '</p>';
        var authorName = (review.authorAttribution && review.authorAttribution.displayName) ? review.authorAttribution.displayName : 'Google Nutzer';
        cards += '<span class="testimonial-author">' + authorName;
        if (review.relativePublishTimeDescription) {
          cards += ' <span style="color:var(--text-light); font-weight:400;">&middot; ' + review.relativePublishTimeDescription + '</span>';
        }
        cards += '</span>';
        cards += '</div>';
      });
      reviewsContainer.innerHTML = cards;

      reviewsContainer.querySelectorAll('.fade-up').forEach(function (el) {
        revealObserver.observe(el);
      });
      Array.from(reviewsContainer.children).forEach(function (child, i) {
        child.style.setProperty('--i', i);
      });
    }
  }

  /* ------- 14. Contact Form (Demo Mode) ------- */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      var origText = btn.textContent;
      btn.textContent = 'Gesendet!';
      btn.disabled = true;
      btn.style.opacity = '0.7';
      setTimeout(function () {
        btn.textContent = origText;
        btn.disabled = false;
        btn.style.opacity = '1';
        contactForm.reset();
      }, 3000);
    });
  }

  /* ------- 15. Ornament Fade-in ------- */
  document.querySelectorAll('.ornament').forEach(function (el) {
    revealObserver.observe(el);
    el.classList.add('fade-up');
  });

})();
