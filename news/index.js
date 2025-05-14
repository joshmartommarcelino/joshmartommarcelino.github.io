document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            document.getElementById('main-nav').classList.toggle('active');
        });
    }

    // Filter buttons functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.textContent.trim();
            
            // Filter news items
            newsCards.forEach(card => {
                const category = card.querySelector('.news-category').textContent.trim();
                
                if (filter === 'All News' || filter === category) {
                    card.style.display = 'block';
                    card.classList.add('visible');
                    card.classList.remove('hidden');
                } else {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                    card.classList.remove('visible');
                }
            });
            
            // Reset to page 1 when filtering
            updateActivePage(1);
        });
    });

    // Pagination functionality
    const itemsPerPage = 6;
    let currentPage = 1;
    const pageBtns = document.querySelectorAll('.page-btn:not(.prev):not(.next)');
    const prevBtn = document.querySelector('.page-btn.prev');
    const nextBtn = document.querySelector('.page-btn.next');
    
    // Function to update which page is active
    function updateActivePage(pageNum) {
        currentPage = pageNum;
        
        // Update active page button
        pageBtns.forEach(btn => {
            if (parseInt(btn.textContent) === currentPage) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Initial setup - mark all news cards as visible if none are marked
        if (!document.querySelector('.news-card.visible')) {
            newsCards.forEach(card => {
                card.classList.add('visible');
                card.classList.remove('hidden');
            });
        }
        
        // Show/hide news items based on current page
        const visibleCards = document.querySelectorAll('.news-card.visible');
        
        visibleCards.forEach((card, index) => {
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            
            if (index >= start && index < end) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Calculate total pages
        const totalVisibleCards = visibleCards.length;
        const totalPages = Math.ceil(totalVisibleCards / itemsPerPage);
        
        // Update pagination button states
        if (prevBtn) {
            prevBtn.disabled = currentPage === 1;
            if (currentPage === 1) {
                prevBtn.classList.add('disabled');
            } else {
                prevBtn.classList.remove('disabled');
            }
        }
        
        if (nextBtn) {
            nextBtn.disabled = currentPage === totalPages || totalPages === 0;
            if (currentPage === totalPages || totalPages === 0) {
                nextBtn.classList.add('disabled');
            } else {
                nextBtn.classList.remove('disabled');
            }
        }
        
        // Update page number buttons visibility based on total pages
        pageBtns.forEach(btn => {
            const pageNum = parseInt(btn.textContent);
            if (pageNum <= totalPages) {
                btn.style.display = 'flex';
            } else {
                btn.style.display = 'none';
            }
        });
    }
    
    // Handle page number clicks
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const pageNum = parseInt(this.textContent);
            updateActivePage(pageNum);
        });
    });
    
    // Handle previous and next buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                updateActivePage(currentPage - 1);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            const visibleCards = document.querySelectorAll('.news-card.visible');
            const totalPages = Math.ceil(visibleCards.length / itemsPerPage);
            
            if (currentPage < totalPages) {
                updateActivePage(currentPage + 1);
            }
        });
    }
    
    // Newsletter form submission handler
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            if (emailInput && emailInput.value.trim() !== '') {
                alert(`Thank you for subscribing with ${emailInput.value.trim()}! You'll receive updates soon.`);
                newsletterForm.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Initialize the page
    updateActivePage(1);
});