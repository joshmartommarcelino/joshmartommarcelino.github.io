// Get references to important elements on the page by their IDs
const menuToggle = document.getElementById('menu-toggle'); // The hamburger menu icon
const mainNav = document.getElementById('main-nav');       // The main navigation menu
const newsletterForm = document.getElementById('newsletter-form'); // The newsletter signup form

// Wait for the entire HTML document to load before running any code
document.addEventListener('DOMContentLoaded', function() {

    // Check if the menuToggle element exists (to avoid errors)
    if (menuToggle) {

        // When the hamburger menu is clicked...
        menuToggle.addEventListener('click', function() {
            // Add or remove the "active" class to show or hide the menu
            mainNav.classList.toggle('active');      // Shows or hides the navigation menu
            menuToggle.classList.toggle('active');   // Animates the hamburger icon
        });

        // Close the menu if the user clicks outside of it
        document.addEventListener('click', function(event) {
            // Check if the click was inside the navigation menu
            const isClickInsideNav = mainNav.contains(event.target);
            // Check if the click was on the hamburger menu icon
            const isClickOnHamburger = menuToggle.contains(event.target);

            // If the click was outside both the menu and the hamburger icon,
            // and the menu is currently open, then close the menu
            if (!isClickInsideNav && !isClickOnHamburger && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');      // Hide the navigation menu
                menuToggle.classList.remove('active');   // Reset the hamburger icon
            }
        });

        // Close the menu when a link inside the menu is clicked (for better mobile usability)
        const navLinks = document.querySelectorAll('nav a'); // Select all links in the navigation
        navLinks.forEach(link => {
            // For each link, listen for a click
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');      // Close the menu
                menuToggle.classList.remove('active');   // Reset the hamburger icon
            });
        });
    }

    // If the newsletter form exists, handle the submit event
    if (newsletterForm) {
        // When the form is submitted...
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the form from submitting in the normal way (which would reload the page)

            // Get the value the user typed in the email input field
            const email = newsletterForm.querySelector('input[type="email"]').value;

            // Show a thank-you message using an alert box
            alert(`Thank you for subscribing with ${email}! You'll receive Guilty Gear updates soon.`);

            // Clear the form so it's empty again
            newsletterForm.reset();
        });
    }
});