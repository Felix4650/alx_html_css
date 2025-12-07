// Select elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle 'active' class on click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Optional: animate hamburger into 'X'
  hamburger.classList.toggle('open');
});
