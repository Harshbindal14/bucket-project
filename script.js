// JavaScript file for handling dynamic container volume functionality

let currentVolume = 0; // Initial volume of the container

function fillContainer() {
    // Get the volume indicator and container elements
    const volumeIndicator = document.getElementById('volumeIndicator');
    const container = document.querySelector('.container');
    const containerSizeInput = document.getElementById('containerSize');
    const fillAmountInput = document.getElementById('fillAmount');
    const fillButton = document.querySelector('button');
    const messageContainer = document.getElementById('messageContainer');

    // Get the dynamically set container size and fill amount
    const containerSize = Number(containerSizeInput.value);
    const fillAmount = Number(fillAmountInput.value);

    // Update the container width
    container.style.width = `${containerSize}%`;

    // Calculate the remaining space in the container
    const remainingSpace = containerSize - currentVolume;

    // Check if the fill amount exceeds the remaining space
    if (fillAmount > remainingSpace) {
        // Display an error message in the UI
        messageContainer.innerText = `Fill amount exceeds the remaining space. Available space: ${remainingSpace}ml`;
        return;
    }

    // Update the current volume
    currentVolume += fillAmount;

    // Calculate the height of the volume indicator based on the current volume
    const indicatorHeight = (currentVolume / containerSize) * 100;

    // Update the height of the volume indicator with a smooth animation
    volumeIndicator.style.transition = 'height 0.5s ease';
    volumeIndicator.style.height = `${indicatorHeight}%`;

    // Show the remaining space in the container
    const updatedRemainingSpace = containerSize - currentVolume;
    messageContainer.innerText = `Container filled with ${fillAmount}ml. Remaining space: ${updatedRemainingSpace}ml`;

    // Disable the fill button if the container is full
    if (currentVolume === containerSize) {
        fillButton.disabled = true;
    }
}

function emptyContainer() {
    // Get the volume indicator element
    const volumeIndicator = document.getElementById('volumeIndicator');
    const containerSizeInput = document.getElementById('containerSize');
    const fillButton = document.querySelector('button');
    const messageContainer = document.getElementById('messageContainer');

    // Reset the current volume to 0 with a smooth animation
    volumeIndicator.style.transition = 'height 0.5s ease';
    volumeIndicator.style.height = '0';
    currentVolume = 0;

    // Clear the error or success message
    messageContainer.innerText = '';

    // Enable the fill button
    fillButton.disabled = false;
}
