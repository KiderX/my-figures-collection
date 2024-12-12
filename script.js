// Lightbox functionality

// Get the modal and elements
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close');
// Toggle the navigation menu on small screens (hamburger)
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the active class to show/hide the menu
});

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery-item img');

// Open lightbox on image click
galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        const src = image.getAttribute('src');
        lightboxImage.setAttribute('src', src); // Set the image source in lightbox
        lightbox.style.display = 'flex'; // Show the lightbox
    });
});

// Close lightbox when clicking on the close button or outside the image
closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none'; // Hide the lightbox
});

// Close lightbox when clicking outside the image (on the overlay)
lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none'; // Hide the lightbox
    }
});
