const navSlide = () => {
        const navbar = document.querySelector('.navbar');
        const burger = document.querySelector('.burger');
        const navLinks = document.querySelector('.nav-links');

        burger.addEventListener('click', () => {
            navbar.classList.toggle('navbar-active');
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');            
        });
}

navSlide();