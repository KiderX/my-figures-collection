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
];

// Get the image container element
const imageContainer = document.getElementById('image-container');

// Generate and append image elements dynamically
imagesData.forEach(image => {
    // Create image div
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');
    imageDiv.style.backgroundImage = `url('${image.src}')`;

    // Create caption div
    const captionDiv = document.createElement('div');
    captionDiv.classList.add('image-caption');
    captionDiv.innerText = image.name;

    // Append caption to the image div
    imageDiv.appendChild(captionDiv);

    // Append the image div to the container
    imageContainer.appendChild(imageDiv);
});
