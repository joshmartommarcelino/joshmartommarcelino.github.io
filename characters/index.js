// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('main-nav');
    const seasonFilterButtons = document.querySelectorAll('.season-filter-btn');
    const typeFilterButtons = document.querySelectorAll('.type-filter-btn');
    const characterCards = document.querySelectorAll('.character-card');
    const newsletterForm = document.getElementById('newsletter-form');
    const resetFilterButton = document.getElementById('reset-filters');

    // Mobile Menu Toggle
    const addMobileMenuToggle = () => {
        // Create hamburger menu button for mobile
        const header = document.querySelector('header');
        const menuToggle = document.createElement('div');
        menuToggle.classList.add('hamburger');
        menuToggle.id = 'menu-toggle';
        menuToggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        header.appendChild(menuToggle);

        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    };

    // Check if we're on mobile and add the toggle if needed
    if (window.innerWidth <= 768) {
        addMobileMenuToggle();
    }

    // Window resize handler
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768 && !document.getElementById('menu-toggle')) {
            addMobileMenuToggle();
        } else if (window.innerWidth > 768 && document.getElementById('menu-toggle')) {
            document.getElementById('menu-toggle').remove();
        }
    });

    // Add animation styles to character cards
    characterCards.forEach(card => {
        card.style.transition = 'opacity 0.4s ease, transform 0.3s ease';
        card.style.opacity = '1';
        
        // Extract the battle type from the character card
        const battleTypeElement = card.querySelector('.character-type');
        if (battleTypeElement) {
            // Get the battle type class (balance, power, zoning, etc.)
            const battleTypeClasses = battleTypeElement.classList;
            let battleType = '';
            
            // Find the class that represents the battle type
            for (const className of battleTypeClasses) {
                if (className !== 'character-type') {
                    battleType = className;
                    break;
                }
            }
            
            // Set the data-type attribute for filtering
            if (battleType) {
                card.setAttribute('data-type', battleType);
            }
        }
    });

    // Filter state
    let activeFilters = {
        season: 'all',
        type: 'all'
    };

    // Reset filters button
    if (resetFilterButton) {
        resetFilterButton.addEventListener('click', () => {
            activeFilters.season = 'all';
            activeFilters.type = 'all';
            
            // Reset UI
            seasonFilterButtons.forEach(btn => btn.classList.remove('active'));
            typeFilterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Activate "all" buttons
            document.querySelector('.season-filter-btn[data-filter="all"]').classList.add('active');
            document.querySelector('.type-filter-btn[data-filter="all"]').classList.add('active');
            
            // Apply the filters
            applyFilters();
        });
    }

    // Season filter functionality
    seasonFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all season buttons
            seasonFilterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update season filter
            activeFilters.season = button.getAttribute('data-filter');
            
            // Apply both filters
            applyFilters();
        });
    });

    // Type filter functionality
    typeFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all type buttons
            typeFilterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update type filter
            activeFilters.type = button.getAttribute('data-filter');
            
            // Apply both filters
            applyFilters();
        });
    });

    // Apply both filters
    const applyFilters = () => {
        characterCards.forEach(card => {
            const cardSeason = card.getAttribute('data-season');
            const cardType = card.getAttribute('data-type');
            
            const matchesSeason = activeFilters.season === 'all' || cardSeason === activeFilters.season;
            const matchesType = activeFilters.type === 'all' || cardType === activeFilters.type;
            
            if (matchesSeason && matchesType) {
                // Show matching cards with animation
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 50);
                }, 300);
            } else {
                // Hide non-matching cards
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });

        // Update counter for visible characters
        setTimeout(() => {
            updateCharacterCounter();
        }, 350);
    };

    // Function to update character counter
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

    // Character Card Click Event
    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            const characterName = card.querySelector('.character-name').textContent;
            console.log(`Character ${characterName} clicked`);
            // You could redirect to a character details page here
            // window.location.href = `character/${characterName.toLowerCase()}.html`;
            
            // For now, just show an alert
            alert(`You selected ${characterName}`);
        });
    });

    // Newsletter Form Submission
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // In a real implementation, this would send the email to a server
            alert(`Thank you for subscribing with ${email}! You'll receive Guilty Gear updates soon.`);
            newsletterForm.reset();
        });
    }

    // Initialize by triggering both "All" filters
    document.querySelector('.season-filter-btn[data-filter="all"]').classList.add('active');
    document.querySelector('.type-filter-btn[data-filter="all"]').classList.add('active');
    applyFilters();
});