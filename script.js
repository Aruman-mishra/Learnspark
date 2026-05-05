// =============================================
//  LearnSpark — Main JavaScript
//  File: js/script.js
// =============================================

// ---------- Smooth scroll for subject cards ----------
document.querySelectorAll('.subject-card').forEach(function (card) {
  card.addEventListener('click', function () {
    var target = document.getElementById('courses');
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ---------- Enroll button feedback ----------
document.querySelectorAll('.course-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var original = this.textContent;
    this.textContent = '✅ Enrolled!';
    this.style.background = '#2E7D32';
    var self = this;
    setTimeout(function () {
      self.textContent = original;
      self.style.background = '';
    }, 2000);
  });
});

// ---------- Search button ----------
var searchBtn = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput');

if (searchBtn && searchInput) {
  searchBtn.addEventListener('click', function () {
    var query = searchInput.value.trim();
    if (query) {
      document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Also trigger on Enter key
  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      searchBtn.click();
    }
  });
}

// ---------- Navbar active link highlight ----------
var sections = document.querySelectorAll('div[id]');
var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', function () {
  var scrollPos = window.scrollY + 100;
  sections.forEach(function (section) {
    if (
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      navLinks.forEach(function (link) {
        link.style.background = '';
        link.style.color = '';
        if (link.getAttribute('href') === '#' + section.id) {
          link.style.background = 'var(--purple-light)';
          link.style.color = 'var(--purple-dark)';
        }
      });
    }
  });
});
