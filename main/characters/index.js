// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('main-nav');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const characterCards = document.querySelectorAll('.character-card');
    const newsletterForm = document.getElementById('newsletter-form');

    // Mobile Menu Toggle (Assuming we'll add this later)
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

    // Character filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Filter characters
            characterCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-season') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // Character Card Click Event
    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            const characterName = card.querySelector('.character-name').textContent;
            // In a real implementation, this would navigate to the character detail page
            // For now, we'll just show an alert
            console.log(`Character ${characterName} clicked`);
            // You could implement a modal or redirect to a character page here
        });
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
});