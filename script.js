document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');

    if (mobileMenu && mobileNavOverlay) {
        mobileMenu.addEventListener('click', function() {
            mobileNavOverlay.classList.toggle('active');
        });

        mobileNavOverlay.addEventListener('click', function(event) {
            if (event.target === mobileNavOverlay || event.target.closest('.mobile-nav a')) {
                mobileNavOverlay.classList.remove('active');
            }
        });
    }
});