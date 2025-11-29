// Multi-slider initialization: each `.image-slider` runs independently
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.image-slider');
    sliders.forEach((slider) => initializeSlider(slider));
});

function initializeSlider(slider) {
    const slides = Array.from(slider.querySelectorAll('.slide'));
    const dots = Array.from(slider.querySelectorAll('.dot'));
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    let currentIndex = 0;
    let autoId = null;

    if (!slides.length) return;

    const showSlide = (index) => {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        const i = (index + slides.length) % slides.length;
        slides[i].classList.add('active');
        if (dots[i]) dots[i].classList.add('active');
        currentIndex = i;
    };

    const changeSlide = (delta) => {
        showSlide(currentIndex + delta);
        resetAuto();
    };

    const goTo = (i) => {
        showSlide(i);
        resetAuto();
    };

    const startAuto = () => {
        stopAuto();
        autoId = setInterval(() => changeSlide(1), 5000);
    };

    const stopAuto = () => {
        if (autoId) clearInterval(autoId);
        autoId = null;
    };

    const resetAuto = () => {
        stopAuto();
        startAuto();
    };

    // Buttons
    if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));
    // Dots
    dots.forEach((dot, idx) => dot.addEventListener('click', () => goTo(idx)));

    // Pause and resume on hover
    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);

    // Swipe support
    let startX = 0;
    slider.addEventListener('touchstart', (e) => startX = e.touches[0].clientX);
    slider.addEventListener('touchend', (e) => {
        const diff = startX - e.changedTouches[0].clientX;
        const threshold = 50;
        if (Math.abs(diff) > threshold) changeSlide(diff > 0 ? 1 : -1);
    });

    // Initialize
    showSlide(0);
    startAuto();
}

/* Smooth scrolling and navbar behavior */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) navbar.style.background = 'rgba(255,255,255,0.95)';
    else navbar.style.background = 'rgba(255,255,255,0.98)';
});

window.addEventListener('load', function() {
    if (window.location.hash) history.replaceState(null, null, ' ');
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
});

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.addEventListener('pageshow', (e) => { if (e.persisted) window.scrollTo(0, 0); });
window.addEventListener('beforeunload', () => { window.scrollTo(0, 0); });
// Multi-slider initialization: each `.image-slider` runs independently
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.image-slider');
    sliders.forEach((slider) => initializeSlider(slider));
});

function initializeSlider(slider) {
    const slides = Array.from(slider.querySelectorAll('.slide'));
    const dots = Array.from(slider.querySelectorAll('.dot'));
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    let currentIndex = 0;
    let autoId = null;

    if (!slides.length) return;

    const showSlide = (index) => {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        const i = (index + slides.length) % slides.length;
        slides[i].classList.add('active');
        if (dots[i]) dots[i].classList.add('active');
        currentIndex = i;
    };

    const changeSlide = (delta) => {
        showSlide(currentIndex + delta);
        resetAuto();
    };

    const goTo = (i) => {
        showSlide(i);
        resetAuto();
    };

    const startAuto = () => {
        stopAuto();
        autoId = setInterval(() => changeSlide(1), 5000);
    };

    const stopAuto = () => {
        if (autoId) clearInterval(autoId);
        autoId = null;
    };

    const resetAuto = () => {
        stopAuto();
        startAuto();
    };

    // Buttons
    if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));
    // Dots
    dots.forEach((dot, idx) => dot.addEventListener('click', () => goTo(idx)));

    // Pause and resume on hover
    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);

    // Swipe support
    let startX = 0;
    slider.addEventListener('touchstart', (e) => startX = e.touches[0].clientX);
    slider.addEventListener('touchend', (e) => {
        const diff = startX - e.changedTouches[0].clientX;
        const threshold = 50;
        if (Math.abs(diff) > threshold) changeSlide(diff > 0 ? 1 : -1);
    });

    // Initialize
    showSlide(0);
    startAuto();
}

/* Smooth scrolling and other helpers retained below */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) navbar.style.background = 'rgba(255,255,255,0.95)';
    else navbar.style.background = 'rgba(255,255,255,0.98)';
});

// Keep the rest of the page behavior
window.addEventListener('load', function() {
    if (window.location.hash) history.replaceState(null, null, ' ');
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
});

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.addEventListener('pageshow', (e) => { if (e.persisted) window.scrollTo(0, 0); });
window.addEventListener('beforeunload', () => { window.scrollTo(0, 0); });
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

// Initialize slider
document.addEventListener('DOMContentLoaded', function() {
    if (slides.length > 0) {
        showSlide(currentSlideIndex);
        startAutoSlide();
    }
});

// Show specific slide
function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev');
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Add active class to current slide and dot
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

// Change slide function
function changeSlide(direction) {
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    showSlide(currentSlideIndex);
    resetAutoSlide();
}

// Go to specific slide
function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
    resetAutoSlide();
}

// Auto slide functionality
function startAutoSlide() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Change slide every 5 seconds
}

// Reset auto slide
function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// Pause auto slide on hover
const sliderContainer = document.querySelector('.image-slider');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
}

// Touch/swipe support for mobile
let startX = 0;
let endX = 0;

if (sliderContainer) {
    sliderContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    sliderContainer.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = startX - endX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            changeSlide(1);
        } else {
            // Swipe right - previous slide
            changeSlide(-1);
        }
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    }
});

// Reset to top on page load/refresh
window.addEventListener('load', function() {
    // Hapus hash dari URL
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
    
    // Scroll ke paling atas
    window.scrollTo(0, 0);
    
    // Alternatif lebih smooth
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }, 0);
});

// Prevent browser restore scroll position
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Force scroll to top on page show (back/forward button)
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.scrollTo(0, 0);
    }
});

// Force scroll to top on before unload
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});