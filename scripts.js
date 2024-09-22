let currentIndex = 0;
const images = document.querySelectorAll(".fullscreen-image");

function showImage(index) {
    images.forEach((img, idx) => {
        img.classList.remove("active");
        if (idx === index) {
            img.classList.add("active");
        }
    });
}

// Open the fullscreen viewer and show the first image
document.getElementById("image-icon").addEventListener("click", function() {
    document.getElementById("fullscreen-viewer").style.display = "flex";
    showImage(currentIndex);
});

// Close the fullscreen viewer
document.getElementById("close-viewer").addEventListener("click", function() {
    document.getElementById("fullscreen-viewer").style.display = "none";
});

// Handle scroll (wheel) for desktop
document.getElementById("fullscreen-viewer").addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
        // Scroll down (next image)
        currentIndex = (currentIndex + 1) % images.length;
    } else {
        // Scroll up (previous image)
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    showImage(currentIndex);
});

// Handle touch events for mobile (swipe)
let touchStartX = 0;
let touchEndX = 0;

document.getElementById("fullscreen-viewer").addEventListener("touchstart", function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

document.getElementById("fullscreen-viewer").addEventListener("touchend", function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX) {
        // Swiped left (next image)
        currentIndex = (currentIndex + 1) % images.length;
    } else if (touchEndX > touchStartX) {
        // Swiped right (previous image)
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    showImage(currentIndex);
}


const music = document.getElementById('background-music');
const playPauseButton = document.getElementById('play-pause-button');
const playIcon = document.getElementById('play-icon');

// Start with the music playing (but muted)
let isPlaying = false;

// Update the button's icon and toggle play/pause
playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        playIcon.src = 'play-icon.png'; // Change to play icon
    } else {
        music.muted = false; // Unmute the music when play is clicked
        music.play();
        playIcon.src = 'pause-icon.png'; // Change to pause icon
    }
    isPlaying = !isPlaying;
});
