// Select all the clickable images
const images = document.querySelectorAll('.clickable-image');
// Select the popup elements
const popupModal = document.getElementById('popup-modal');
const popupImage = document.getElementById('popup-image');
const closePopup = document.getElementById('close-popup');

// When an image is clicked, show the popup with the large image
images.forEach(img => {
  img.addEventListener('click', () => {
    popupModal.style.display = 'flex'; // Display the modal
    popupImage.src = img.src;         // Set the modal image to the clicked image
  });
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
  popupModal.style.display = 'none'; // Hide the popup
});

// Close the popup if the user clicks anywhere outside the image
popupModal.addEventListener('click', (e) => {
  if (e.target === popupModal) {
    popupModal.style.display = 'none'; // Close if outside the image
  }
});
