// Wait until the page content is fully loaded
// Then run all the JavaScript inside this function
document.addEventListener('DOMContentLoaded', () => {
    // Get references to various elements on the page
    const menuToggle = document.getElementById('menu-toggle'); // Hamburger menu button
    const mainNav = document.getElementById('main-nav'); // Navigation bar
    const seasonFilterButtons = document.querySelectorAll('.season-filter-btn'); // Season filter buttons
    const typeFilterButtons = document.querySelectorAll('.type-filter-btn'); // Type filter buttons (like power, balance, etc.)
    const characterCards = document.querySelectorAll('.character-card'); // All character cards on the page
    const newsletterForm = document.getElementById('newsletter-form'); // Newsletter form at bottom of page
    const resetFilterButton = document.getElementById('reset-filters'); // Button to reset all filters

    // MOBILE MENU: Open/Close hamburger menu on mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active'); // Toggle menu visibility
            menuToggle.classList.toggle('active'); // Animate hamburger button
        });

        // Close menu if user clicks outside the menu
        document.addEventListener('click', function(event) {
            const isClickInsideNav = mainNav.contains(event.target); // Did user click inside the menu?
            const isClickOnHamburger = menuToggle.contains(event.target); // Or on the hamburger button?

            if (!isClickInsideNav && !isClickOnHamburger && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active'); // Close the menu
                menuToggle.classList.remove('active'); // Reset hamburger animation
            }
        });

        // Close menu when a link in the nav is clicked (for mobile experience)
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // CHARACTER CARD: Add animation effects and set data-type for filtering
    characterCards.forEach(card => {
        card.style.transition = 'opacity 0.4s ease, transform 0.3s ease'; // Smooth fade/move animation
        card.style.opacity = '1'; // Fully visible

        const battleTypeElement = card.querySelector('.character-type'); // Get battle type text inside the card
        if (battleTypeElement) {
            const battleTypeClasses = battleTypeElement.classList; // Get all CSS classes applied
            let battleType = '';

            for (const className of battleTypeClasses) {
                if (className !== 'character-type') { // Ignore the generic class
                    battleType = className; // Save the actual type (like power, rushdown)
                    break;
                }
            }

            if (battleType) {
                card.setAttribute('data-type', battleType); // Add a data attribute for filtering
            }
        }
    });

    // Set default filter values
    let activeFilters = {
        season: 'all', // Show all seasons by default
        type: 'all'    // Show all types by default
    };

    // RESET FILTER BUTTON: Clear all filters when clicked
    if (resetFilterButton) {
        resetFilterButton.addEventListener('click', () => {
            activeFilters.season = 'all'; // Reset season filter
            activeFilters.type = 'all';   // Reset type filter

            // Remove active style from all filter buttons
            seasonFilterButtons.forEach(btn => btn.classList.remove('active'));
            typeFilterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the 'all' buttons again
            document.querySelector('.season-filter-btn[data-filter="all"]').classList.add('active');
            document.querySelector('.type-filter-btn[data-filter="all"]').classList.add('active');

            applyFilters(); // Re-run the filter logic
        });
    }

    // SEASON FILTER: When a season button is clicked
    seasonFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            seasonFilterButtons.forEach(btn => btn.classList.remove('active')); // Unselect others
            button.classList.add('active'); // Highlight selected
            activeFilters.season = button.getAttribute('data-filter'); // Update filter state
            applyFilters(); // Apply filters to character cards
        });
    });

    // TYPE FILTER: Same as above, but for battle types
    typeFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            typeFilterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            activeFilters.type = button.getAttribute('data-filter');
            applyFilters();
        });
    });

    // FILTER FUNCTION: Show or hide character cards based on filters
    const applyFilters = () => {
        characterCards.forEach(card => {
            const cardSeason = card.getAttribute('data-season'); // e.g. "season-1"
            const cardType = card.getAttribute('data-type'); // e.g. "power"

            const matchesSeason = activeFilters.season === 'all' || cardSeason === activeFilters.season;
            const matchesType = activeFilters.type === 'all' || cardType === activeFilters.type;

            if (matchesSeason && matchesType) {
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.display = 'block'; // Show card
                    setTimeout(() => {
                        card.style.opacity = '1'; // Fade in
                    }, 50);
                }, 300);
            } else {
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.display = 'none'; // Hide card
                }, 300);
            }
        });

        // Update character count
        setTimeout(() => {
            updateCharacterCounter();
        }, 350);
    };

    // CHARACTER COUNTER: Shows how many characters are visible
    const updateCharacterCounter = () => {
        let visibleCount = 0;
        characterCards.forEach(card => {
            if (window.getComputedStyle(card).display !== 'none') {
                visibleCount++;
            }
        });

        const counterElement = document.getElementById('character-counter');
        if (counterElement) {
            counterElement.textContent = `Showing ${visibleCount} characters`;
        }
    };

    // CHARACTER CLICK: When a card is clicked, log the character name
    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            const characterName = card.querySelector('.character-name').textContent; // Get the name
            console.log(`Character ${characterName} clicked`); // Print to console
            alert(`You selected ${characterName}`); // Show popup
        });
    });

    // NEWSLETTER FORM: Handle user submitting email
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page from refreshing
            const email = newsletterForm.querySelector('input[type="email"]').value; // Get the email
            alert(`Thank you for subscribing with ${email}! You'll receive Guilty Gear updates soon.`);
            newsletterForm.reset(); // Clear the form
        });
    }

    // When the page first loads, activate both "All" filters
    document.querySelector('.season-filter-btn[data-filter="all"]').classList.add('active');
    document.querySelector('.type-filter-btn[data-filter="all"]').classList.add('active');
    applyFilters(); // Show all cards
});
