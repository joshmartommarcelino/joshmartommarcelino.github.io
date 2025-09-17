// Wait for the HTML document to be fully loaded before running any JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get the menu toggle button element for mobile navigation
    const menuToggle = document.getElementById('menu-toggle');
    // Check if the menu toggle button exists on the page
    if (menuToggle) {
        // Add a click event listener to the menu button
        menuToggle.addEventListener('click', function() {
            // Toggle the 'active' class on the button itself (changes its appearance)
            this.classList.toggle('active');
            // Toggle the 'active' class on the navigation menu (shows/hides the menu)
            document.getElementById('main-nav').classList.toggle('active');
        });
    }

    // Get all filter buttons used to filter news articles by category
    const filterBtns = document.querySelectorAll('.filter-btn');
    // Get all news card elements that will be filtered
    const newsCards = document.querySelectorAll('.news-card');
    
    // For each filter button, add a click event handler
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove the 'active' class from all filter buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add the 'active' class to the clicked button
            this.classList.add('active');
            
            // Get the filter category text from the button that was clicked
            const filter = this.textContent.trim();
            
            // Loop through each news card to check if it should be shown or hidden
            newsCards.forEach(card => {
                // Get the category of the current news card
                const category = card.querySelector('.news-category').textContent.trim();
                
                // If the filter is 'All News' or matches the card's category, show the card
                if (filter === 'All News' || filter === category) {
                    // Make the card visible
                    card.style.display = 'block';
                    // Add 'visible' class for tracking which cards are shown
                    card.classList.add('visible');
                    // Remove 'hidden' class
                    card.classList.remove('hidden');
                } else {
                    // Hide the card if it doesn't match the filter
                    card.style.display = 'none';
                    // Add 'hidden' class for tracking
                    card.classList.add('hidden');
                    // Remove 'visible' class
                    card.classList.remove('visible');
                }
            });
            
            // Reset pagination to page 1 whenever a new filter is applied
            updateActivePage(1);
        });
    });

    // Set up pagination variables
    // Define how many news items to show per page
    const itemsPerPage = 6;
    // Start on page 1 by default
    let currentPage = 1;
    // Get all numbered page buttons (excluding previous and next buttons)
    const pageBtns = document.querySelectorAll('.page-btn:not(.prev):not(.next)');
    // Get the 'previous' page button
    const prevBtn = document.querySelector('.page-btn.prev');
    // Get the 'next' page button
    const nextBtn = document.querySelector('.page-btn.next');
    
    // Function that updates the page display based on the page number
    function updateActivePage(pageNum) {
        // Set the current page to the specified page number
        currentPage = pageNum;
        
        // Update which page button is marked as active
        pageBtns.forEach(btn => {
            // If this button matches the current page number
            if (parseInt(btn.textContent) === currentPage) {
                // Add the active class to highlight it
                btn.classList.add('active');
            } else {
                // Remove the active class from other buttons
                btn.classList.remove('active');
            }
        });
        
        // If no cards are marked as visible yet, mark all cards as visible
        if (!document.querySelector('.news-card.visible')) {
            newsCards.forEach(card => {
                // Add visible class to all cards
                card.classList.add('visible');
                // Remove hidden class
                card.classList.remove('hidden');
            });
        }
        
        // Get only the cards that are marked as visible (passed the filter)
        const visibleCards = document.querySelectorAll('.news-card.visible');
        
        // Loop through all visible cards to determine which ones to show on this page
        visibleCards.forEach((card, index) => {
            // Calculate the starting index for items on the current page
            const start = (currentPage - 1) * itemsPerPage;
            // Calculate the ending index for items on the current page
            const end = start + itemsPerPage;
            
            // If this card's index falls within the current page range
            if (index >= start && index < end) {
                // Show the card
                card.style.display = 'block';
            } else {
                // Hide the card if it's not on the current page
                card.style.display = 'none';
            }
        });

        // Calculate total pages needed based on number of visible cards
        const totalVisibleCards = visibleCards.length;
        // Divide by items per page and round up to get total pages needed
        const totalPages = Math.ceil(totalVisibleCards / itemsPerPage);
        
        // Update the 'previous' button's state based on current page
        if (prevBtn) {
            // Disable previous button if we're on page 1
            prevBtn.disabled = currentPage === 1;
            if (currentPage === 1) {
                // Add visual disabled styling if on first page
                prevBtn.classList.add('disabled');
            } else {
                // Remove visual disabled styling if not on first page
                prevBtn.classList.remove('disabled');
            }
        }
        
        // Update the 'next' button's state based on current page
        if (nextBtn) {
            // Disable next button if we're on the last page or there are no pages
            nextBtn.disabled = currentPage === totalPages || totalPages === 0;
            if (currentPage === totalPages || totalPages === 0) {
                // Add visual disabled styling if on last page
                nextBtn.classList.add('disabled');
            } else {
                // Remove visual disabled styling if not on last page
                nextBtn.classList.remove('disabled');
            }
        }
        
        // Show or hide page number buttons based on how many pages there are
        pageBtns.forEach(btn => {
            // Get the page number from the button text
            const pageNum = parseInt(btn.textContent);
            // If this page number is valid (within total pages)
            if (pageNum <= totalPages) {
                // Show the page button
                btn.style.display = 'flex';
            } else {
                // Hide page buttons that are beyond the total number of pages
                btn.style.display = 'none';
            }
        });
    }
    
    // Add click event handlers to each page number button
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Get the page number from the button text
            const pageNum = parseInt(this.textContent);
            // Update the active page to the clicked page number
            updateActivePage(pageNum);
        });
    });
    
    // Add click event handler to the 'previous' button
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            // Only go to previous page if we're not already on page 1
            if (currentPage > 1) {
                // Update to the previous page number
                updateActivePage(currentPage - 1);
            }
        });
    }
    
    // Add click event handler to the 'next' button
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            // Get the currently visible cards
            const visibleCards = document.querySelectorAll('.news-card.visible');
            // Calculate the total number of pages
            const totalPages = Math.ceil(visibleCards.length / itemsPerPage);
            
            // Only go to next page if we're not already on the last page
            if (currentPage < totalPages) {
                // Update to the next page number
                updateActivePage(currentPage + 1);
            }
        });
    }
    
    // Handle the newsletter subscription form
    const newsletterForm = document.getElementById('newsletter-form');
    // Check if the form exists on the page
    if (newsletterForm) {
        // Add a submit event handler to the form
        newsletterForm.addEventListener('submit', (e) => {
            // Prevent the default form submission (which would reload the page)
            e.preventDefault();
            // Get the email input field from the form
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            // Check if the email input exists and has a valid value
            if (emailInput && emailInput.value.trim() !== '') {
                // Show a success message with the entered email
                alert(`Thank you for subscribing with ${emailInput.value.trim()}! You'll receive updates soon.`);
                // Clear the form after successful submission
                newsletterForm.reset();
            } else {
                // Show an error message if the email is invalid
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Initialize the page display by setting up page 1
    updateActivePage(1);
});