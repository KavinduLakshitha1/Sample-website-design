let currentIndex = 0;

function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const itemsVisible = 5;

    currentIndex += direction;

    if (currentIndex < 0) currentIndex = totalItems - itemsVisible;
    if (currentIndex > totalItems - itemsVisible) currentIndex = 0;

    track.style.transform = `translateX(-${currentIndex * (100 / itemsVisible)}%)`;
}

function autoPlay() {
    moveSlide(1);
}

setInterval(autoPlay, 3000); // Change slide every 3 seconds


const indicator = document.querySelector('.active-indicator');

function moveIndicator(element) {
    const { offsetLeft, offsetWidth } = element;
    indicator.style.left = `${offsetLeft}px`;
    indicator.style.width = `${offsetWidth}px`;
}

// Set initial active item
document.addEventListener('DOMContentLoaded', () => {
    const firstItem = document.querySelector('.nav-item');
    moveIndicator(firstItem);
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});