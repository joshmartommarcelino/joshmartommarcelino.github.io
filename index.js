// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
const videoPlay = document.getElementById('video-play');
const newsletterForm = document.getElementById('newsletter-form');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = nav.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
        
        // Close menu when clicking on a nav link (better mobile UX)
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
            });
        });
    }
});

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