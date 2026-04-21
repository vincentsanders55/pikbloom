/* ============================================
   PIKBLOOM — Global Scripts
   ============================================ */

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));

// Nav scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle) {
    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
        toggle.classList.toggle('active');
    });
}

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        a.classList.add('active');
    }
});

// Lightbox
(function() {
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<button class="lightbox-close" aria-label="Close"></button><img>';
    document.body.appendChild(lb);
    const lbImg = lb.querySelector('img');

    function open(src) {
        lbImg.src = src;
        lb.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function close() {
        lb.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.masonry-item img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => open(img.src));
    });

    lb.addEventListener('click', close);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

