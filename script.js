const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.querySelectorAll('.nav-menu a');
const pages = document.querySelectorAll('.page');

// Menangani tombol Navigasi Utama (titik tiga)
navToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// Menangani klik pada link Navigasi Utama (Home, Tutorial, dll)
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetPageId = event.target.getAttribute('data-page');
        
        const currentPage = document.querySelector('.page.active');
        if (currentPage) {
            currentPage.style.opacity = '0';
            currentPage.style.pointerEvents = 'none';
            currentPage.style.overflowY = 'hidden';
        }

        // Sembunyikan semua halaman detail tutorial
        document.querySelectorAll('.tutorial-detail').forEach(detail => {
            detail.classList.remove('active');
        });

        setTimeout(() => {
            pages.forEach(page => {
                page.classList.remove('active');
                page.classList.remove('page-enter');
            });

            const newPage = document.getElementById(targetPageId);
            if (newPage) {
                newPage.classList.add('active');
                newPage.classList.add('page-enter');
                newPage.style.overflowY = 'auto';
            }
        }, 500);

        navMenu.classList.remove('active');
    });
});

document.getElementById('home').classList.add('active');

// --- Kode untuk Tombol Selengkapnya ---
const moreButtons = document.querySelectorAll('.more-btn');
const closeTutorialButtons = document.querySelectorAll('.close-tutorial');
const tutorialDetails = document.querySelectorAll('.tutorial-detail');

// Menangani klik pada tombol 'Klik Selengkapnya'
moreButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const targetId = event.target.getAttribute('data-target');
        const targetDetail = document.getElementById(targetId);
        if (targetDetail) {
            targetDetail.classList.add('active');
        }
    });
});

// Menangani tombol tutup (x) di halaman detail tutorial
closeTutorialButtons.forEach(button => {
    button.addEventListener('click', () => {
        const parentDetail = button.closest('.tutorial-detail');
        if (parentDetail) {
            parentDetail.classList.remove('active');
        }
    });
});
