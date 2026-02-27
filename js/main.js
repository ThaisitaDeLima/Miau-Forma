// js/main.js

// Previne a restauração do scroll do navegador
if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; }
window.onload = function() { window.scrollTo(0, 0); }

document.addEventListener('DOMContentLoaded', () => {
    // Inicia AOS
    AOS.init({
        once: true,
        offset: 80,
        duration: 800,
        easing: 'ease-out-cubic',
    });

    // Menu Mobile
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-menu');
    const links = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        menu.classList.toggle('translate-x-full');
    }

    if(btn) btn.addEventListener('click', toggleMenu);
    if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
    links.forEach(link => { link.addEventListener('click', toggleMenu); });

    // Efeito de rolagem na Navbar
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if(navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('py-2');
                navbar.classList.remove('py-4');
            } else {
                navbar.classList.add('py-4');
                navbar.classList.remove('py-2');
            }
        }
    });
});