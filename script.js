// Array of images and their names
const imagesData = [
    { src: 'images/download.jpg', name: 'Image 1' },
    { src: 'images/download2.jpg', name: 'Image 2' },
    { src: 'images/download.jpg', name: 'Image 3' },
    { src: 'images/download2.jpg', name: 'Image 4' },
    { src: 'images/download.jpg', name: 'Image 5' },
    { src: 'images/download2.jpg', name: 'Image 6' },
    { src: 'images/download.jpg', name: 'Image 7' },
    { src: 'images/download2.jpg', name: 'Image 8' },
    { src: 'images/download.jpg', name: 'Image 9' },
    { src: 'images/download2.jpg', name: 'Image 10' },
    { src: 'images/download.jpg', name: 'Image 11' },  // New image
    { src: 'images/download2.jpg', name: 'Image 12' }, // New image
    { src: 'images/download.jpg', name: 'Image 13' },  // New image
    { src: 'images/download2.jpg', name: 'Image 14' }  // New image
];

// Get the image container element
const imageContainer = document.getElementById('image-container');

// Generate and append image elements dynamically
imagesData.forEach(image => {
    // Create a wrapper for each image and its caption
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image-wrapper');

    // Create image div
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    imageDiv.style.backgroundImage = `url('${image.src}')`;

    // Create caption div
    const captionDiv = document.createElement('div');
    captionDiv.classList.add('image-caption');
    captionDiv.innerText = image.name;

    // Append image and caption to the wrapper
    imageWrapper.appendChild(imageDiv);
    imageWrapper.appendChild(captionDiv);

    // Append the wrapper to the container
    imageContainer.appendChild(imageWrapper);
});
