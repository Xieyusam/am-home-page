document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileNavOverlay = document.getElementById("mobile-nav-overlay");

  if (mobileMenu && mobileNavOverlay) {
    mobileMenu.addEventListener("click", function () {
      mobileNavOverlay.classList.toggle("active");
    });

    // Mobile navigation overlay click event listener
    mobileNavOverlay.addEventListener("click", function (event) {
      if (
        event.target === mobileNavOverlay ||
        event.target.closest(".mobile-nav a")
      ) {
        mobileNavOverlay.classList.remove("active");
      }
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

const carouselSlides = document.querySelector('.carousel-slides');
const carouselSlide = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function showSlide(index) {
  // Remove 'active' from all slides first, allowing them to fade out
  carouselSlide.forEach(slide => {
    slide.classList.remove('active');
  });

  // Add 'active' to the current slide after a short delay to ensure fade out starts
  setTimeout(() => {
    carouselSlide[index].classList.add('active');
  }, 10);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselSlide.length;
  showSlide(currentIndex);
}

// Auto-advance slides every 3 seconds
setInterval(nextSlide, 3000);

// Initial display
showSlide(currentIndex);

// Optional: Add touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

carouselSlides.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

carouselSlides.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  if (touchEndX < touchStartX) {
    nextSlide(); // Swipe left
  } else if (touchEndX > touchStartX) {
    // You can add a previousSlide function here if needed
  }
});

  // Add active class to current page's navigation link
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(
    "header nav ul li a, .mobile-nav ul li a"
  );

  navLinks.forEach((link) => {
    const linkPath = link.href.split("/").pop();
    if (
      linkPath === currentPath ||
      (currentPath === "" && linkPath === "index.html")
    ) {
      link.classList.add("active");
    }
  });
});
