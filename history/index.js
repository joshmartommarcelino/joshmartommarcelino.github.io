// Timeline functionality
document.addEventListener('DOMContentLoaded', function() {
    const timelineMarkers = document.querySelectorAll('.timeline-marker');
    const timelineCards = document.querySelectorAll('.timeline-card');
    let activeMarker = null;
    let activeCard = null;
    
    // Function to set active timeline item
    function setActiveTimelineItem(year) {
        // Remove active class from all markers and cards
        timelineMarkers.forEach(marker => {
            marker.classList.remove('active');
        });
        
        timelineCards.forEach(card => {
            card.classList.remove('active');
        });
        
        // Set active class on selected marker and card
        activeMarker = document.querySelector(`.timeline-marker[data-year="${year}"]`);
        activeCard = document.querySelector(`.timeline-card[data-year="${year}"]`);
        
        if (activeMarker) activeMarker.classList.add('active');
        if (activeCard) activeCard.classList.add('active');
        
        // Adjust the card's height to create space for it
        const cardsContainer = document.querySelector('.timeline-cards');
        if (activeCard && cardsContainer) {
            cardsContainer.style.height = `${activeCard.offsetHeight}px`;
        }
    }
    
    // Initialize timeline with the first item active
    function initTimeline() {
        if (timelineMarkers.length > 0) {
            const firstYear = timelineMarkers[0].getAttribute('data-year');
            setActiveTimelineItem(firstYear);
        }
    }
    
    // Add event listeners to timeline markers
    timelineMarkers.forEach(marker => {
        marker.addEventListener('click', function() {
            const year = this.getAttribute('data-year');
            setActiveTimelineItem(year);
        });
        
        marker.addEventListener('mouseenter', function() {
            const year = this.getAttribute('data-year');
            setActiveTimelineItem(year);
        });
        
        // For touch devices
        marker.addEventListener('touchstart', function(e) {
            e.preventDefault();
            const year = this.getAttribute('data-year');
            setActiveTimelineItem(year);
        });
    });
    
    // Add responsive behavior for timeline on window resize
    window.addEventListener('resize', function() {
        if (activeCard) {
            const cardsContainer = document.querySelector('.timeline-cards');
            cardsContainer.style.height = `${activeCard.offsetHeight}px`;
        }
    });
    
    // Initialize timeline on page load
    initTimeline();
    
    // Set up automatic cycling through timeline if desired
    let timelineInterval;
    const autoPlayTimeline = false; // Set to true if you want auto-play
    
    if (autoPlayTimeline) {
        const cycleTimeline = () => {
            const years = Array.from(timelineMarkers).map(marker => 
                marker.getAttribute('data-year')
            );
            
            const currentIndex = years.indexOf(activeMarker.getAttribute('data-year'));
            const nextIndex = (currentIndex + 1) % years.length;
            
            setActiveTimelineItem(years[nextIndex]);
        };
        
        // Cycle every 5 seconds
        timelineInterval = setInterval(cycleTimeline, 5000);
        
        // Stop cycling when user interacts with timeline
        document.querySelector('.timeline').addEventListener('mouseenter', () => {
            clearInterval(timelineInterval);
        });
    }
});