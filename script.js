/* ==========================================================================
   Schreinerei Müller — Shared JavaScript
   ========================================================================== */

(function () {
  'use strict';

  // Mobile nav
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Header scroll
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right').forEach((el) => {
    observer.observe(el);
  });

  // Stagger delay assignment
  document.querySelectorAll('.stagger').forEach((parent) => {
    Array.from(parent.children).forEach((child, i) => {
      child.style.setProperty('--i', i);
    });
  });

  // Counter animation
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const end = parseInt(el.dataset.count, 10);
          if (isNaN(end)) return;
          const duration = 1800;
          const start = performance.now();
          const prefix = el.dataset.prefix || '';
          const suffix = el.dataset.suffix || '';

          function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
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

  document.querySelectorAll('[data-count]').forEach((el) => {
    counterObserver.observe(el);
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach((openItem) => {
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

  // Gallery lightbox
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg = lightbox.querySelector('img');
    const items = document.querySelectorAll('[data-lightbox]');
    let currentIndex = 0;

    items.forEach((item, i) => {
      item.addEventListener('click', () => {
        currentIndex = i;
        lbImg.src = item.dataset.lightbox;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    if (prevBtn) prevBtn.addEventListener('click', () => navigate(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigate(1));

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });

    function navigate(dir) {
      currentIndex = (currentIndex + dir + items.length) % items.length;
      lbImg.src = items[currentIndex].dataset.lightbox;
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // Google Reviews
  const reviewsContainer = document.getElementById('google-reviews');
  const reviewsFallback = document.getElementById('google-reviews-fallback');

  if (reviewsContainer && reviewsFallback) {
    // Fallback is visible by default; we only hide it if live API reviews load successfully
    function tryLoadReviews() {
      if (window.google && window.google.maps && window.google.maps.places && window.GOOGLE_PLACE_ID) {
        try {
          const service = new google.maps.places.PlacesService(document.createElement('div'));
          service.getDetails(
            {
              placeId: window.GOOGLE_PLACE_ID,
              fields: ['reviews', 'rating', 'user_ratings_total', 'url'],
              language: 'de'
            },
            function (place, status) {
              if (status === google.maps.places.PlacesServiceStatus.OK && place.reviews && place.reviews.length > 0) {
                renderGoogleReviews(place);
              }
              // On failure: fallback already visible, do nothing
            }
          );
        } catch (e) {
          // Fallback already visible, do nothing
        }
      } else if (window.GOOGLE_PLACE_ID) {
        if (!tryLoadReviews._attempts) tryLoadReviews._attempts = 0;
        tryLoadReviews._attempts++;
        if (tryLoadReviews._attempts < 10) {
          setTimeout(tryLoadReviews, 500);
        }
        // After 10 attempts: fallback already visible, do nothing
      }
    }
    tryLoadReviews();

    function renderGoogleReviews(place) {
      // Hide fallback, show API container
      reviewsFallback.style.display = 'none';
      reviewsContainer.style.display = '';

      var reviews = place.reviews.slice(0, 5);
      var starSvg = '<svg class="star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
      var emptyStarSvg = '<svg class="star star-empty" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';

      // Summary bar
      if (place.rating && place.user_ratings_total) {
        var summaryHtml = '<div class="reviews-summary fade-up" style="text-align:center; margin-bottom:40px;">';
        summaryHtml += '<span style="font-size:2.5rem; font-weight:600; color:var(--walnut);">' + place.rating.toFixed(1) + '</span>';
        summaryHtml += '<div class="stars" style="justify-content:center; margin:8px 0;">';
        for (var s = 0; s < 5; s++) {
          summaryHtml += s < Math.round(place.rating) ? starSvg : emptyStarSvg;
        }
        summaryHtml += '</div>';
        summaryHtml += '<span style="color:var(--text-light);">' + place.user_ratings_total + ' Bewertungen auf Google</span>';
        summaryHtml += '</div>';
        reviewsContainer.insertAdjacentHTML('beforebegin', summaryHtml);
      }

      // Review cards
      var html = '';
      reviews.forEach(function (review) {
        html += '<div class="testimonial-card fade-up">';
        html += '<div class="stars" style="margin-bottom:16px;">';
        for (var r = 0; r < 5; r++) {
          html += r < review.rating ? starSvg : emptyStarSvg;
        }
        html += '</div>';
        var text = review.text || '';
        if (text.length > 200) text = text.substring(0, 200) + '...';
        html += '<p class="testimonial-text">' + text + '</p>';
        html += '<span class="testimonial-author">' + (review.author_name || 'Google Nutzer') + '</span>';
        html += '</div>';
      });
      reviewsContainer.innerHTML = html;

      // Re-observe for scroll animations
      reviewsContainer.querySelectorAll('.fade-up').forEach(function (el) {
        observer.observe(el);
      });
      Array.from(reviewsContainer.children).forEach(function (child, i) {
        child.style.setProperty('--i', i);
      });

      // Also animate summary
      var summary = document.querySelector('.reviews-summary');
      if (summary) observer.observe(summary);
    }
  }

  // Contact form (demo mode)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const origText = btn.textContent;
      btn.textContent = 'Gesendet!';
      btn.disabled = true;
      btn.style.opacity = '0.7';
      setTimeout(() => {
        btn.textContent = origText;
        btn.disabled = false;
        btn.style.opacity = '1';
        contactForm.reset();
      }, 3000);
    });
  }

})();
