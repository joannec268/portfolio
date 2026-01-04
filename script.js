(function() {
    'use strict';

    // const hamburger = document.getElementById("hamburger-menu");
    // const navLinks = document.getElementById("nav-links");

    // hamburger.addEventListener("click", () => {
    //     navLinks.classList.toggle("show");
    // });


    const hamburger = document.getElementById("hamburger");
    const x = document.getElementById("x");
    const nav = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
        nav.classList.add("active");
        hamburger.style.display = "none"; // hide hamburger
        x.style.display = "block"; // show X
    });

    x.addEventListener("click", () => {
        nav.classList.remove("active");
        x.style.display = "none"; // hide X
        hamburger.style.display = "block"; // show hamburger
    });


    // Select all nav links
    const navLinks = document.querySelectorAll('.casestudy nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // prevent default jump if desired
            
            // Remove active from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active to clicked link
            this.classList.add('active');
            
            // Optionally scroll to the section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if(targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });


})();