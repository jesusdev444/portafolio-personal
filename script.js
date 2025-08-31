document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    // Add fade-in class to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Add fade-in class to hero elements
    document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-buttons').forEach(el => {
        el.classList.add('fade-in');
    });
    
    // Add fade-in class to portfolio items
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.classList.add('fade-in');
    });
    
    // Add fade-in class to skills
    document.querySelectorAll('.skills-category').forEach(category => {
        category.classList.add('fade-in');
    });
    
    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Initialize animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);

    // ================================
    // SWIPER INITIALIZATION - CORREGIDO
    // ================================
    
    // Swiper para Baldosas
    var swiper1 = new Swiper(".mySwiper1", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".mySwiper1 .swiper-button-next",
            prevEl: ".mySwiper1 .swiper-button-prev",
        },
        pagination: {
            el: ".mySwiper1 .swiper-pagination",
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    // Swiper para Cielo Raso
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".mySwiper2 .swiper-button-next",
            prevEl: ".mySwiper2 .swiper-button-prev",
        },
        pagination: {
            el: ".mySwiper2 .swiper-pagination",
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    // Swiper para Repello y Estuco
    var swiper3 = new Swiper(".mySwiper3", {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".mySwiper3 .swiper-button-next",
            prevEl: ".mySwiper3 .swiper-button-prev",
        },
        pagination: {
            el: ".mySwiper3 .swiper-pagination",
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });
});