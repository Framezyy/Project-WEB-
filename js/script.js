// Multi-slider initialization: each `.image-slider` runs independently
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.image-slider');
    sliders.forEach((slider) => initializeSlider(slider));

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
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