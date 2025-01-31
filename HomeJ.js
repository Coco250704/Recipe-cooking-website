// Select the carousel track (the container holding all slides)
const track = document.querySelector('.carousel-track');

// Convert the NodeList of slides into an array for easier manipulation
const slides = Array.from(track.children);

// Select the next and previous buttons for the carousel
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

// Select the dots navigation for the carousel
const dotsNav = document.querySelector('.carousel-nav');

// Convert the dots navigation buttons into an array
const dots = Array.from(dotsNav.children);

// Initialize the current index to keep track of the active slide
let currentIndex = 0;

// Function to update the carousel by changing the slide and dot styles
function updateCarousel(index) {
    // Move the carousel track by translating it horizontally based on the index
    track.style.transform = `translateX(-${index * 100}%)`;

    // Remove the 'current-slide' class from all dots
    dots.forEach(dot => dot.classList.remove('current-slide'));

    // Add the 'current-slide' class to the dot corresponding to the current index
    dots[index].classList.add('current-slide');
}

// Event listener for the next button to move to the next slide
nextButton.addEventListener('click', () => {
    // Increment the current index and loop back to 0 if it's the last slide
    currentIndex = (currentIndex + 1) % slides.length;
    
    // Update the carousel with the new current index
    updateCarousel(currentIndex);
});

// Event listener for the previous button to move to the previous slide
prevButton.addEventListener('click', () => {
    // Decrement the current index and loop back to the last slide if it's the first slide
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    
    // Update the carousel with the new current index
    updateCarousel(currentIndex);
});

// Event listener for each dot to allow users to click on a dot and navigate to a specific slide
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Set the current index to the clicked dot's index
        currentIndex = index;
        
        // Update the carousel with the new current index
        updateCarousel(currentIndex);
    });
});

// Set an interval to automatically change slides every 5 seconds
setInterval(() => {
    // Increment the current index and loop back to 0 if it's the last slide
    currentIndex = (currentIndex + 1) % slides.length;

    // Update the carousel with the new current index
    updateCarousel(currentIndex);
}, 5000); // Slides change every 5 seconds

// Select the hover button and sound element for interaction
const button = document.getElementById('hoverButton');
const sound = document.getElementById('hoverSound');

// Event listener to play the sound when the mouse hovers over the button
button.addEventListener('mouseenter', () => {
  sound.play(); // Play the sound
});

// Event listener to pause the sound when the mouse leaves the button
button.addEventListener('mouseleave', () => {
  sound.pause(); // Pause the sound
  sound.currentTime = 0;  // Reset the sound to the start so it plays from the beginning next time
});
