const images = document.querySelectorAll('.clickable-image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');

images.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = img.src;  // Display clicked image in modal
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
