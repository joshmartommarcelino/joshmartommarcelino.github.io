// These lines create variables that store references to HTML elements on the webpage
// DOM stands for Document Object Model, which is how JavaScript interacts with HTML elements
const menuToggle = document.getElementById('menu-toggle');   // Stores the menu toggle button element
const mainNav = document.getElementById('main-nav');         // Stores the main navigation menu element
const newsletterForm = document.getElementById('newsletter-form');  // Stores the newsletter form element

// This sets up a function that will run when the webpage is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // TIMELINE FUNCTIONALITY
    // These lines find all timeline markers and cards on the page and store them in collections
    const timelineMarkers = document.querySelectorAll('.timeline-marker');  // Gets all timeline marker elements
    const timelineCards = document.querySelectorAll('.timeline-card');      // Gets all timeline card elements
    let activeMarker = null;  // Creates a variable to keep track of which marker is currently active
    let activeCard = null;    // Creates a variable to keep track of which card is currently active

    // This function handles highlighting the selected timeline item and showing its content
    function setActiveTimelineItem(year) {
        // These lines remove the 'active' class from all markers and cards to reset their appearance
        timelineMarkers.forEach(marker => {
            marker.classList.remove('active');  // Removes the active class from each marker
        });
        
        timelineCards.forEach(card => {
            card.classList.remove('active');    // Removes the active class from each card
        });
        
        // These lines find the specific marker and card for the selected year
        activeMarker = document.querySelector(`.timeline-marker[data-year="${year}"]`);  // Finds the marker with the matching year
        activeCard = document.querySelector(`.timeline-card[data-year="${year}"]`);      // Finds the card with the matching year
        
        // These lines add the 'active' class to the selected marker and card to highlight them
        if (activeMarker) activeMarker.classList.add('active');  // Adds the active class to the selected marker
        if (activeCard) activeCard.classList.add('active');      // Adds the active class to the selected card
        
        // This adjusts the height of the cards container to fit the active card
        const cardsContainer = document.querySelector('.timeline-cards');  // Gets the container for all cards
        if (activeCard && cardsContainer) {
            cardsContainer.style.height = `${activeCard.offsetHeight}px`;  // Sets the container height to match the active card
        }
    }

    // This function sets up the timeline when the page loads
    function initTimeline() {
        if (timelineMarkers.length > 0) {  // Checks if there are any timeline markers
            const firstYear = timelineMarkers[0].getAttribute('data-year');  // Gets the year from the first marker
            setActiveTimelineItem(firstYear);  // Activates the first timeline item
        }
    }

    // This section adds event listeners to each timeline marker
    timelineMarkers.forEach(marker => {
        // This runs when a marker is clicked
        marker.addEventListener('click', function() {
            const year = this.getAttribute('data-year');  // Gets the year from the clicked marker
            setActiveTimelineItem(year);  // Activates the timeline item for that year
        });
        
        // This runs when the mouse hovers over a marker
        marker.addEventListener('mouseenter', function() {
            const year = this.getAttribute('data-year');  // Gets the year from the hovered marker
            setActiveTimelineItem(year);  // Activates the timeline item for that year
        });
        
        // This runs when someone touches a marker on a touchscreen device
        marker.addEventListener('touchstart', function(e) {
            e.preventDefault();  // Prevents the default touch behavior
            const year = this.getAttribute('data-year');  // Gets the year from the touched marker
            setActiveTimelineItem(year);  // Activates the timeline item for that year
        });
    });

    // This adds an event listener for when the window is resized
    window.addEventListener('resize', function() {
        if (activeCard) {  // Checks if there is an active card
            const cardsContainer = document.querySelector('.timeline-cards');  // Gets the cards container
            cardsContainer.style.height = `${activeCard.offsetHeight}px`;  // Adjusts the container height to match the active card
        }
    });

    // This calls the function to initialize the timeline when the page loads
    initTimeline();

    // This section sets up automatic cycling through the timeline if desired
    let timelineInterval;  // Creates a variable to store the interval timer
    const autoPlayTimeline = false;  // Controls whether the timeline should auto-play (currently set to false)

    // This block only runs if autoPlayTimeline is set to true
    if (autoPlayTimeline) {
        // This function cycles to the next timeline item
        const cycleTimeline = () => {
            // Creates an array of all the years from the timeline markers
            const years = Array.from(timelineMarkers).map(marker => 
                marker.getAttribute('data-year')
            );
            
            // Finds the index of the current active marker's year
            const currentIndex = years.indexOf(activeMarker.getAttribute('data-year'));
            // Calculates the index of the next year (loops back to 0 if at the end)
            const nextIndex = (currentIndex + 1) % years.length;
            
            // Activates the next timeline item
            setActiveTimelineItem(years[nextIndex]);
        };
        
        // Sets up a timer to cycle every 5 seconds (5000 milliseconds)
        timelineInterval = setInterval(cycleTimeline, 5000);
        
        // Stops the automatic cycling when the user hovers over the timeline
        document.querySelector('.timeline').addEventListener('mouseenter', () => {
            clearInterval(timelineInterval);  // Clears the interval timer
        });
    }

    // MOBILE MENU FUNCTIONALITY
    // This section handles the mobile menu toggle button
    if (menuToggle) {  // Checks if the menu toggle button exists
        // This runs when the menu toggle button is clicked
        menuToggle.addEventListener('click', function() {
            // These lines toggle the 'active' class on both the navigation menu and the toggle button
            mainNav.classList.toggle('active');  // Shows or hides the navigation menu
            menuToggle.classList.toggle('active');  // Changes the appearance of the toggle button
        });
        
        // This runs when a click happens anywhere on the document
        document.addEventListener('click', function(event) {
            // These lines check if the click was inside the navigation menu or on the toggle button
            const isClickInsideNav = mainNav.contains(event.target);  // Checks if the click was inside the nav
            const isClickOnHamburger = menuToggle.contains(event.target);  // Checks if the click was on the toggle
            
            // This closes the menu if the click was outside both the nav and toggle button
            if (!isClickInsideNav && !isClickOnHamburger && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');  // Hides the navigation menu
                menuToggle.classList.remove('active');  // Resets the toggle button appearance
            }
        });
        
        // This adds event listeners to all navigation links
        const navLinks = document.querySelectorAll('nav a');  // Gets all links in the navigation
        navLinks.forEach(link => {
            // This runs when a navigation link is clicked
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');  // Hides the navigation menu
                menuToggle.classList.remove('active');  // Resets the toggle button appearance
            });
        });
    }

    // NEWSLETTER FORM FUNCTIONALITY
    // This section handles the newsletter form submission
    if (newsletterForm) {  // Checks if the newsletter form exists
        // This runs when the form is submitted
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();  // Prevents the default form submission behavior
            // Gets the email that was entered in the form
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // This is a placeholder for real form submission code
            // In a real website, this would send the email to a server
            // For this example, it just shows an alert message
            alert(`Thank you for subscribing with ${email}! You'll receive Guilty Gear updates soon.`);
            newsletterForm.reset();  // Clears the form fields
        });
    }
});