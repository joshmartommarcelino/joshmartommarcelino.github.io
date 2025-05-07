// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
const videoPlay = document.getElementById('video-play');
const newsletterForm = document.getElementById('newsletter-form');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Video Play Button (for demo purposes)
if (videoPlay) {
    videoPlay.addEventListener('click', () => {
        // In a real implementation, this would play the video
        // For now, we'll just show an alert
        alert('Video would play here! In a real implementation, this would load and play the Guilty Gear trailer.');
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

// Character Rotation on Characters Page (if exists)
document.addEventListener('DOMContentLoaded', () => {
    const characterSlider = document.querySelector('.character-slider');
    
    if (characterSlider) {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const characters = document.querySelectorAll('.character-card');
        
        let currentIndex = 0;
        
        // Show current character
        function showCharacter(index) {
            characters.forEach((char, i) => {
                char.classList.remove('active');
                if (i === index) {
                    char.classList.add('active');
                }
            });
        }
        
        // Initialize
        showCharacter(currentIndex);
        
        // Event listeners
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % characters.length;
            showCharacter(currentIndex);
        });
        
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + characters.length) % characters.length;
            showCharacter(currentIndex);
        });
    }
});

// Game Mechanics Interactive Elements (if exists)
document.addEventListener('DOMContentLoaded', () => {
    const mechanicTabs = document.querySelectorAll('.mechanic-tab');
    const mechanicContents = document.querySelectorAll('.mechanic-content');
    
    if (mechanicTabs.length) {
        mechanicTabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                mechanicTabs.forEach(t => t.classList.remove('active'));
                mechanicContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to current tab and content
                tab.classList.add('active');
                mechanicContents[index].classList.add('active');
            });
        });
    }
});

// Timeline Animation on History Page (if exists)
document.addEventListener('DOMContentLoaded', () => {
    const timelineEvents = document.querySelectorAll('.timeline-event');
    
    if (timelineEvents.length) {
        // Simple scroll animation
        window.addEventListener('scroll', () => {
            timelineEvents.forEach(event => {
                const eventPosition = event.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (eventPosition < screenPosition) {
                    event.classList.add('visible');
                }
            });
        });
        
        // Initial check
        window.dispatchEvent(new Event('scroll'));
    }
});

// Character Detail Modal on Characters Page (if exists)
document.addEventListener('DOMContentLoaded', () => {
    const characterBtns = document.querySelectorAll('.character-detail-btn');
    const modal = document.querySelector('.character-modal');
    
    if (characterBtns.length && modal) {
        const closeBtn = modal.querySelector('.close-btn');
        const modalContent = modal.querySelector('.modal-content');
        
        // Character data (in a real implementation this would likely come from a database or JSON file)
        const characterData = {
            'sol': {
                name: 'Sol Badguy',
                title: 'The Flame of Corruption',
                bio: 'The main protagonist of the Guilty Gear series and one of the five characters who have been playable in every game in the series. He is an independent bounty hunter who has dedicated his life to the destruction of Gears, and is the rival of Ky Kiske.',
                moves: ['Gun Flame', 'Volcanic Viper', 'Bandit Revolver', 'Wild Throw', 'Tyrant Rave'],
                image: 'img/characters/sol-full.jpg'
            },
            'ky': {
                name: 'Ky Kiske',
                title: 'The Pious Soldier',
                bio: 'A deeply religious man who values order and justice above all else. He was appointed as the chief of the International Police Force (IPF) at a very young age and has worked to maintain global order ever since.',
                moves: ['Stun Edge', 'Vapor Thrust', 'Stun Dipper', 'Foudre Arc', 'Ride the Lightning'],
                image: 'img/characters/ky-full.jpg'
            }
            // Additional characters would be added here
        };
        
        // Open modal with character data
        characterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const characterId = btn.getAttribute('data-character');
                const character = characterData[characterId];
                
                if (character) {
                    // Populate modal content
                    modalContent.innerHTML = `
                        <div class="character-details">
                            <div class="character-image">
                                <img src="${character.image}" alt="${character.name}">
                            </div>
                            <div class="character-info">
                                <h2>${character.name}</h2>
                                <h3>${character.title}</h3>
                                <div class="character-bio">
                                    <p>${character.bio}</p>
                                </div>
                                <div class="character-moves">
                                    <h4>Signature Moves:</h4>
                                    <ul>
                                        ${character.moves.map(move => `<li>${move}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `;

                    // Show the modal
                    modal.classList.add('active');
                }
            });
        });

        // Close modal
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // Optional: Close modal when clicking outside the modal content
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});
