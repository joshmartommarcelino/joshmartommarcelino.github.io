        // Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            this.classList.toggle('active');
            document.getElementById('main-nav').classList.toggle('active');
        });

        // Filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                // Here you would add logic to filter news items
            });
        });

        // Page buttons
        const pageBtns = document.querySelectorAll('.page-btn:not(.prev):not(.next)');
        pageBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                pageBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                // Here you would add logic to change pages
            });
        });