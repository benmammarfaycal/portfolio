/*================================
    SCROLL ANIMATION
================================*/


const sections = document.querySelectorAll("section");
/*================================
    NAVBAR
================================*/

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    // Navbar shadow
    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

    // Active section
    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {


            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }


        });


    },
    {
        threshold: 0.15
    }
);



sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});