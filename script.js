// script.js

// Update year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Booking form submission
  const bookingForm = document.getElementById('bookingForm');
  const formMessage = document.getElementById('formMessage');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = bookingForm.name.value.trim();
      const phone = bookingForm.phone.value.trim();
      const service = bookingForm.service.value;

      if (!name || !phone || !service) {
        formMessage.textContent = 'Please fill in all required fields.';
        formMessage.style.color = 'red';
        return;
      }

      // Simulate form submission
      formMessage.textContent = 'Thank you! Your booking request has been received.';
      formMessage.style.color = 'green';
      bookingForm.reset();
    });
  }

  // Optional: image gallery preview (can expand later)
  const previews = document.querySelectorAll('.preview');
  previews.forEach(img => {
    img.addEventListener('click', () => {
      const src = img.src;
      const lightbox = document.createElement('div');
      lightbox.style.position = 'fixed';
      lightbox.style.top = 0;
      lightbox.style.left = 0;
      lightbox.style.width = '100%';
      lightbox.style.height = '100%';
      lightbox.style.background = 'rgba(0,0,0,0.8)';
      lightbox.style.display = 'flex';
      lightbox.style.alignItems = 'center';
      lightbox.style.justifyContent = 'center';
      lightbox.style.cursor = 'pointer';
      lightbox.innerHTML = `<img src='${src}' style='max-width:90%; max-height:90%; border-radius:10px;'/>`;
      document.body.appendChild(lightbox);

      lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
      });
    });
  });
});

function openGallery(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
}

function closeGallery() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}
