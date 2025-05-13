// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
const newsletterForm = document.getElementById('newsletter-form');

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    // TIMELINE FUNCTIONALITY
    const timelineMarkers = document.querySelectorAll('.timeline-marker');
    const timelineCards = document.querySelectorAll('.timeline-card');
    let activeMarker = null;
    let activeCard = null;

    // Function to set active timeline item
    function setActiveTimelineItem(year) {
        // Remove active class from all markers and cards
        timelineMarkers.forEach(marker => {
            marker.classList.remove('active');
        });
        
        timelineCards.forEach(card => {
            card.classList.remove('active');
        });
        
        // Set active class on selected marker and card
        activeMarker = document.querySelector(`.timeline-marker[data-year="${year}"]`);
        activeCard = document.querySelector(`.timeline-card[data-year="${year}"]`);
        
        if (activeMarker) activeMarker.classList.add('active');
        if (activeCard) activeCard.classList.add('active');
        
        // Adjust the card's height to create space for it
        const cardsContainer = document.querySelector('.timeline-cards');
        if (activeCard && cardsContainer) {
            cardsContainer.style.height = `${activeCard.offsetHeight}px`;
        }
    }

    // Initialize timeline with the first item active
    function initTimeline() {
        if (timelineMarkers.length > 0) {
            const firstYear = timelineMarkers[0].getAttribute('data-year');
            setActiveTimelineItem(firstYear);
        }
    }

    // Add event listeners to timeline markers
    timelineMarkers.forEach(marker => {
        marker.addEventListener('click', function() {
            const year = this.getAttribute('data-year');
            setActiveTimelineItem(year);
        });
        
        marker.addEventListener('mouseenter', function() {
            const year = this.getAttribute('data-year');
            setActiveTimelineItem(year);
        });
        
        // For touch devices
        marker.addEventListener('touchstart', function(e) {
            e.preventDefault();
            const year = this.getAttribute('data-year');
            setActiveTimelineItem(year);
        });
    });

    // Add responsive behavior for timeline on window resize
    window.addEventListener('resize', function() {
        if (activeCard) {
            const cardsContainer = document.querySelector('.timeline-cards');
            cardsContainer.style.height = `${activeCard.offsetHeight}px`;
        }
    });

    // Initialize timeline on page load
    initTimeline();

    // Set up automatic cycling through timeline if desired
    let timelineInterval;
    const autoPlayTimeline = false; // Set to true if you want auto-play

    if (autoPlayTimeline) {
        const cycleTimeline = () => {
            const years = Array.from(timelineMarkers).map(marker => 
                marker.getAttribute('data-year')
            );
            
            const currentIndex = years.indexOf(activeMarker.getAttribute('data-year'));
            const nextIndex = (currentIndex + 1) % years.length;
            
            setActiveTimelineItem(years[nextIndex]);
        };
        
        // Cycle every 5 seconds
        timelineInterval = setInterval(cycleTimeline, 5000);
        
        // Stop cycling when user interacts with timeline
        document.querySelector('.timeline').addEventListener('mouseenter', () => {
            clearInterval(timelineInterval);
        });
    }

    // Mobile Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            // Toggle active class on both the nav and the hamburger itself
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = mainNav.contains(event.target);
            const isClickOnHamburger = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
        
        // Close menu when clicking on a nav link (better mobile UX)
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Newsletter Form Submission
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // In a real implementation, this would send the email to a server
            // For now, we'll just show an alert
            alert(`Thank you for subscribing with ${email}! You'll receive Guilty Gear updates soon.`);
            newsletterForm.reset();
        });
    }
});