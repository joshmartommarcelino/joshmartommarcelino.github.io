 // DOM Elements
        const menuToggle = document.getElementById('menu-toggle');
        const mainNav = document.getElementById('main-nav');
        const newsletterForm = document.getElementById('newsletter-form');
        const carouselContainer = document.querySelector('.carousel-container');
        const carouselSlides = document.querySelectorAll('.carousel-slide');
        const prevButton = document.querySelector('.carousel-arrow-left');
        const nextButton = document.querySelector('.carousel-arrow-right');
        const pagination = document.querySelector('.carousel-pagination');

        // Carousel Variables
        let currentSlide = 0;
        const slideCount = carouselSlides.length;

        // Initialize Carousel
        function initCarousel() {
            // Create pagination dots
            for (let i = 0; i < slideCount; i++) {
                const dot = document.createElement('div');
                dot.classList.add('carousel-dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(i));
                pagination.appendChild(dot);
            }

            // Add event listeners to buttons
            prevButton.addEventListener('click', prevSlide);
            nextButton.addEventListener('click', nextSlide);

            // Auto-advance carousel every 5 seconds
            const autoAdvance = setInterval(nextSlide, 5000);

            // Pause auto-advance when interacting with carousel
            const carouselElements = [carouselContainer, prevButton, nextButton, pagination];
            carouselElements.forEach(element => {
                element.addEventListener('mouseenter', () => clearInterval(autoAdvance));
                element.addEventListener('mouseleave', () => setInterval(nextSlide, 5000));
            });

            // Add touch swipe support
            let touchStartX = 0;
            let touchEndX = 0;

            carouselContainer.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].screenX;
            });

            carouselContainer.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].screenX;
                if (touchStartX - touchEndX > 50) {
                    nextSlide();
                } else if (touchEndX - touchStartX > 50) {
                    prevSlide();
                }
            });
        }

        // Go to specific slide
        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateCarousel();
        }

        // Move to previous slide
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            updateCarousel();
        }

        // Move to next slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slideCount;
            updateCarousel();
        }

        // Update carousel position and active indicators
        function updateCarousel() {
            // Update slider position
            carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update active dot
            const dots = document.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        // Document ready function
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize carousel
            initCarousel();

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