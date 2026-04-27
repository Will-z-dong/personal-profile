const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const heroAvatar = document.getElementById('hero-avatar');
if (heroAvatar) {
  heroAvatar.addEventListener('error', () => {
    heroAvatar.src = 'assets/avatar-placeholder.svg';
  });
}

const cvImage = document.getElementById('cv-image');
if (cvImage) {
  cvImage.addEventListener('error', () => {
    cvImage.src = 'assets/cv-placeholder.svg';
  });
}
