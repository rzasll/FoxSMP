const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.querySelectorAll('.nav-menu a');
const pages = document.querySelectorAll('.page');

navToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

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
