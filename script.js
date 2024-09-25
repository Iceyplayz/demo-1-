// JavaScript for Image Slider Animation
document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slider .slide');
    const totalSlides = slides.length;

    function changeSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    setInterval(changeSlide, 5000); // Change slide every 5 seconds
});

// JavaScript for Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for Form Submission (example)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    // Basic form validation
    if (name && email && message) {
        formMessage.textContent = 'Thank you for your message!';
        formMessage.style.color = 'green';
        // Clear form
        this.reset();
    } else {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
    }
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formMessage = document.getElementById('formMessage');
    const loadingSpinner = document.getElementById('loadingSpinner');

    let valid = true;

    // Name validation
    if (name === '') {
        valid = false;
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }

    // Email validation
    if (email === '' || !validateEmail(email)) {
        valid = false;
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }

    // Message validation
    if (message === '') {
        valid = false;
        messageError.style.display = 'block';
    } else {
        messageError.style.display = 'none';
    }

    if (valid) {
        // Show loading spinner
        loadingSpinner.style.display = 'block';

        // Simulate form submission (replace this with actual AJAX or Fetch request)
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
            formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            formMessage.style.color = 'green';
            formMessage.style.display = 'block';
            this.reset();
        }, 2000);
    }
});

// Helper function to validate email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
// JavaScript to handle dropdown click
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdown.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown if clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});

// script.js

// Example: Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animation for Sections
    const fadeIns = document.querySelectorAll('.fade-in');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeIns.forEach(fadeIn => {
        observer.observe(fadeIn);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animation for Sections
    const fadeIns = document.querySelectorAll('.fade-in');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeIns.forEach(fadeIn => {
        observer.observe(fadeIn);
    });

    // Dynamic Hero Background Animation
    const heroSection = document.querySelector('.hero-section');
    let bgPosition = 0;

    function animateBackground() {
        bgPosition -= 0.5; // Adjust this value for speed
        heroSection.style.backgroundPosition = `0 ${bgPosition}px`;
        requestAnimationFrame(animateBackground);
    }

    animateBackground();
});
document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animation for Sections
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-in-left, .animate-slide-in-right');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Dynamic Hero Background Animation
    const heroSection = document.querySelector('.hero-section');
    let bgPosition = 0;

    function animateBackground() {
        bgPosition -= 0.5; // Adjust this value for speed
        heroSection.style.backgroundPosition = `0 ${bgPosition}px`;
        requestAnimationFrame(animateBackground);
    }

    animateBackground();
});
/* Global Styles */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    overflow-x: hidden;
}

header {
    background-color: #004080; /* Dark Blue Header */
    padding: 20px 0;
    color: white;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

header nav ul li {
    display: inline-block;
    margin-left: 20px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease;
}

header nav ul li a:hover,
header nav ul li a.active {
    color: #ffcc00; /* Hover effect */
}

/* Hero Section */
.hero-section {
    background-image: url('images/hero-background.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 150px 20px;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    overflow: hidden;
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
}

.hero-content h1,
.hero-content p {
    margin: 0;
}

.hero-content h1 {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Text shadow */
    animation: fadeInDown 1s ease-out;
}

.hero-content p {
    font-size: 24px;
    animation: fadeInUp 1s ease-out;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 64, 128, 0.7);
    z-index: 1;
    animation: fadeIn 2s ease-out forwards;
}

/* Company Information Section */
.section {
    padding: 60px 20px;
    background-color: #fff;
}

#company-info .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    gap: 40px;
    margin-top: 20px;
}

.company-description,
.company-values {
    flex: 1;
    max-width: 600px;
}

.company-description h2,
.company-values h2 {
    font-size: 28px;
    margin-bottom: 15px;
    font-weight: 500;
}

.company-description p,
.company-values ul {
    font-size: 16px;
    line-height: 1.6;
}

.company-values ul {
    list-style-type: none;
    padding: 0;
}

.company-values ul li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.company-values ul li::before {
    content: "\f058"; /* Font Awesome check icon */
    font-family: 'Font Awesome 5 Free';
    display: inline-block;
    font-weight: 900;
    margin-right: 10px;
    color: #007bff;
}

/* Google Map and Contact Information Styles */
#location {
    padding: 50px 20px;
    text-align: center;
    background-color: #e6f7ff; /* Light blue background */
}

.map-container {
    margin: 20px auto;
    width: 100%;
    max-width: 800px; /* Limit maximum width */
    height: 450px;
    border: 2px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
}

#contact-info {
    padding: 50px 20px;
    text-align: center;
    background-color: #f4f4f4;
}

#contact-info h2 {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 500;
}

#contact-info p {
    font-size: 18px;
    margin-bottom: 10px;
}

/* Animation Keyframes */
@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes slideInLeft {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    0% {
        opacity: 0;
        transform: translateX(50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Animation Classes */
.animate-fade-in-down {
    animation: fadeInDown 1s ease-out;
}

.animate-fade-in-up {
    animation: fadeInUp 1s ease-out;
}

.animate-fade-in {
    opacity: 0;
    animation: fadeIn 1.5s ease-out forwards;
}

.animate-slide-in-left {
    opacity: 0;
    animation: slideInLeft 1s ease-out forwards;
}

.animate-slide-in-right {
    opacity: 0;
    animation: slideInRight 1s ease-out forwards;
}

/* Footer Styles */
footer {
    background-color: #004080; /* Dark Blue Footer */
    color: white;
    text-align: center;
    padding: 20px 0;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}
