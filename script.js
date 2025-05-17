/* js/script.js */
const images = ['images/paris.jpg', 'images/rome.jpg', 'images/tokyo.jpg'];
let current = 0;
const sliderImage = document.getElementById('sliderImage');

if (sliderImage) {
  setInterval(() => {
    current = (current + 1) % images.length;
    sliderImage.src = images[current];
  }, 3000);
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      e.preventDefault();
    }
  });
}
