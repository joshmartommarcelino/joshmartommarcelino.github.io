// Character filtering functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const characterCards = document.querySelectorAll('.character-card');
    
    // Filter characters based on selected game
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            // Show/hide character cards based on filter
            characterCards.forEach(card => {
                card.classList.remove('visible');
                
                // Need to reset the animation
                void card.offsetWidth;
                
                if (filter === 'all' || card.getAttribute('data-games').includes(filter)) {
                    card.style.display = 'block';
                    card.classList.add('visible');
                } else {
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 500);
                }
            });
        });
    });
    
    // Character modal functionality
    const detailBtns = document.querySelectorAll('.character-detail-btn');
    const modal = document.querySelector('.character-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalContent = document.querySelector('.modal-content');
    
    // Character data
    const characterData = {
        'sol': {
            name: 'Sol Badguy',
            title: 'The Flame of Corruption',
            bio: 'The main protagonist of the Guilty Gear series, Sol Badguy is a bounty hunter who was once known as Frederick, a scientist who specialized in researching Gears. After being unwillingly converted into a Gear, he wages a personal war against That Man, the creator of the Gears. Sol\'s raw strength and determination make him one of the most powerful characters in the series.',
            playstyle: 'Rushdown / Balanced',
            difficulty: 3,
            weapon: 'Fireseal/Junkyard Dog MKIII',
            moves: [
                {name: 'Gun Flame', desc: 'Sol fires a wave of flames across the ground'},
                {name: 'Volcanic Viper', desc: 'A rising uppercut engulfed in flames'},
                {name: 'Bandit Revolver', desc: 'A spinning kick that can be followed up'},
                {name: 'Tyrant Rave', desc: 'A powerful punch charged with explosive energy'}
            ],
            image: 'img/characters/sol-full.jpg'
        },
        'ky': {
            name: 'Ky Kiske',
            title: 'The Pious Soldier',
            bio: 'A deeply religious man who values order and justice above all else. Ky was appointed as the chief of the International Police Force (IPF) at a very young age and has worked to maintain global order ever since. He wields a legendary sword called the Thunderseal, which allows him to utilize powerful lightning-based attacks.',
            playstyle: 'Balanced / Footsies',
            difficulty: 2,
            weapon: 'Thunderseal/Ride the Lightning',
            moves: [
                {name: 'Stun Edge', desc: 'A projectile attack made of lightning'},
                {name: 'Vapor Thrust', desc: 'An anti-air slash attack with lightning properties'},
                {name: 'Stun Dipper', desc: 'A low dashing attack with a follow-up slash'},
                {name: 'Ride the Lightning', desc: 'Ky surrounds himself with lightning and rushes forward'}
            ],
            image: 'img/characters/ky-full.jpg'
        },
        'may': {
            name: 'May',
            title: 'The Innocent Buccaneer',
            bio: 'May is a young pirate girl who serves as the first mate of the Jellyfish Pirates, a group of air pirates led by her guardian, Johnny. Despite her small stature, May possesses immense physical strength, enabling her to wield a massive ship anchor with ease in combat.',
            playstyle: 'Mix-up / Rushdown',
            difficulty: 2,
            weapon: 'Ship Anchor',
            moves: [
                {name: 'Mr. Dolphin', desc: 'May charges forward with a dolphin'},
                {name: 'Overhead Kiss', desc: 'A jumping overhead attack with her anchor'},
                {name: 'Beach Ball', desc: 'May throws a beach ball that bounces around the screen'},
                {name: 'Great Yamada Attack', desc: 'May summons sea creatures to attack her opponents'}
            ],
            image: 'img/characters/may-full.jpg'
        },
        'zato': {
            name: 'Zato-1',
            title: 'The Shadowless Assassin',
            bio: 'The former leader of the Assassin\'s Guild who entered into a contract with a Forbidden Beast named Eddie, which granted him the ability to manipulate shadows. Having lost his eyesight as part of the contract, Zato relies on Eddie for combat, using complex and deceptive techniques to overwhelm his opponents.',
            playstyle: 'Setplay / Puppet',
            difficulty: 4,
            weapon: 'Eddie (shadow creature)',
            moves: [
                {name: 'Invite Hell', desc: 'Summons a shadow spike from the ground'},
                {name: 'Oppose', desc: 'Eddie forms a shield that can absorb attacks'},
                {name: 'Pierce', desc: 'Eddie transforms into a drill that lunges forward'},
                {name: 'Amorphous', desc: 'A massive wave of shadow energy crashes forward'}
            ],
            image: 'img/characters/zato-full.jpg'
        }
    };

    // Open modal with character data
    detailBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const characterId = btn.getAttribute('data-character');
            const character = characterData[characterId];

            if (character) {
                modalContent.innerHTML = `
                    <div class="character-details">
                        <div class="character-image">
                            <img src="${character.image}" alt="${character.name}">
                        </div>
                        <div class="character-info">
                            <h2>${character.name}</h2>
                            <h3>${character.title}</h3>
                            <p><strong>Playstyle:</strong> ${character.playstyle}</p>
                            <p><strong>Difficulty:</strong> ${character.difficulty}/5</p>
                            <p><strong>Weapon:</strong> ${character.weapon}</p>
                            <div class="character-bio">
                                <p>${character.bio}</p>
                            </div>
                            <div class="character-moves">
                                <h4>Signature Moves:</h4>
                                <ul>
                                    ${character.moves.map(move => `<li><strong>${move.name}</strong>: ${move.desc}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
                modal.classList.add('active');
            }
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Optional: Close modal when clicking outside modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});