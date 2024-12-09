// Function to open the popup with the clicked figure
function openPopup(imageSrc, name) {
    var popup = document.getElementById('popup');
    var popupImage = document.getElementById('popup-image');
    var popupName = document.getElementById('popup-name');
    
    popupImage.src = imageSrc;
    popupName.textContent = name;

    popup.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
