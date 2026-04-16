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

// Transformer tabs (before/after)
const tabs = document.querySelectorAll('.transformer-tab');
const pairs = document.querySelectorAll('.transformer-pair');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.target;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        pairs.forEach(p => {
            p.classList.remove('active');
            if (p.dataset.pair === target) {
                p.classList.add('active');
            }
        });
    });
});
