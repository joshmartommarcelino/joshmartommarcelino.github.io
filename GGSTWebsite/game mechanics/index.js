// Get references to important HTML elements
const menuToggle = document.getElementById('menu-toggle'); // Hamburger menu button
const mainNav = document.getElementById('main-nav'); // Navigation menu
const newsletterForm = document.getElementById('newsletter-form'); // Newsletter form
const carouselContainer = document.querySelector('.carousel-container'); // Carousel slides wrapper
const carouselSlides = document.querySelectorAll('.carousel-slide'); // All individual slides
const prevButton = document.querySelector('.carousel-arrow-left'); // Left arrow button
const nextButton = document.querySelector('.carousel-arrow-right'); // Right arrow button
const pagination = document.querySelector('.carousel-pagination'); // Dot indicators

// Keep track of which slide is showing
let currentSlide = 0;
const slideCount = carouselSlides.length;

// Set up the carousel when the page loads
function initCarousel() {
    // Create a dot for each slide and make the first one active
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active'); // First dot starts active
        dot.addEventListener('click', () => goToSlide(i)); // Go to slide when dot is clicked
        pagination.appendChild(dot); // Add dot to the page
    }

    // Add click events to arrow buttons
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Automatically change slides every 5 seconds
    const autoAdvance = setInterval(nextSlide, 5000);

    // Stop auto-advance when the user hovers over the carousel
    const carouselElements = [carouselContainer, prevButton, nextButton, pagination];
    carouselElements.forEach(element => {
        element.addEventListener('mouseenter', () => clearInterval(autoAdvance));
        element.addEventListener('mouseleave', () => setInterval(nextSlide, 5000));
    });

    // Enable swipe on touch screens (mobile)
    let touchStartX = 0;
    let touchEndX = 0;

    // Store where the user starts touching
    carouselContainer.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    // Detect where the user ends the swipe
    carouselContainer.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;

        // Swipe left to go to the next slide
        if (touchStartX - touchEndX > 50) {
            nextSlide();
        }
        // Swipe right to go to the previous slide
        else if (touchEndX - touchStartX > 50) {
            prevSlide();
        }
    });
}

// Change to a specific slide
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

// Show the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateCarousel();
}

// Show the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateCarousel();
}

// Update the position of the carousel and which dot is active
function updateCarousel() {
    // Move the slide container to show the current slide
    carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update the dots to show which slide is active
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Run this code when the web page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    // Set up the carousel
    initCarousel();

    // Handle mobile menu button clicks
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            // Toggle the menu open or closed
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close the menu if the user clicks outside of it
        document.addEventListener('click', function(event) {
            const isClickInsideNav = mainNav.contains(event.target);
            const isClickOnHamburger = menuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnHamburger && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });

        // Close the menu when a link is clicked (for better experience on phones)
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Handle newsletter form submission
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the page from refreshing
            const email = newsletterForm.querySelector('input[type="email"]').value;

            // In a real website, this email would be sent to a server
            // For now, just show a thank-you message
            alert(`Thank you for subscribing with ${email}! You'll receive Guilty Gear updates soon.`);

            // Clear the form after submission
            newsletterForm.reset();
        });
    }
});