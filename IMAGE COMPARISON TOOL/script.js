// Select DOM elements
const container = document.querySelector('.comparison-container');
const overlay = document.querySelector('.image-overlay');
const slider = document.querySelector('.slider');
const baseImage = document.getElementById('base-image');
const overlayImage = document.getElementById('overlay-image');
const image1Upload = document.getElementById('image1-upload');
const image2Upload = document.getElementById('image2-upload');

// Track dragging state
let isDragging = false;

// Function to handle mouse movement
const onMouseMove = (event) => {
    if (!isDragging) return;

    const containerRect = container.getBoundingClientRect();
    const offsetX = event.clientX - containerRect.left;

    if (offsetX >= 0 && offsetX <= containerRect.width) {
        overlay.style.width = `${offsetX}px`;
        slider.style.left = `${offsetX}px`;
    }
};

// Function to start dragging
const onMouseDown = () => {
    isDragging = true;
};

// Function to stop dragging
const onMouseUp = () => {
    isDragging = false;
};

// Image upload handlers
image1Upload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        baseImage.src = URL.createObjectURL(file);
    }
});

image2Upload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        overlayImage.src = URL.createObjectURL(file);
    }
});

// Attach event listeners for dragging
slider.addEventListener('mousedown', onMouseDown);
window.addEventListener('mouseup', onMouseUp);
window.addEventListener('mousemove', onMouseMove);

// Optional: Touch support for mobile devices
slider.addEventListener('touchstart', () => (isDragging = true));
window.addEventListener('touchend', () => (isDragging = false));
window.addEventListener('touchmove', (event) => {
    if (!isDragging) return;

    const touch = event.touches[0];
    const containerRect = container.getBoundingClientRect();
    const offsetX = touch.clientX - containerRect.left;

    if (offsetX >= 0 && offsetX <= containerRect.width) {
        overlay.style.width = `${offsetX}px`;
        slider.style.left = `${offsetX}px`;
    }
});
