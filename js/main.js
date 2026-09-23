/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("page-loader");

    setTimeout(function () {

        loader.classList.add("hidden");

    }, 500);

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal-element");


const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "reveal-visible"
                );

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("main section[id]");


const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

const anchorLinks = document.querySelectorAll(
    'a[href^="#"]'
);

anchorLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const navbarHeight =
            document.querySelector(".navbar").offsetHeight;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const mobileNavLinks =
    document.querySelectorAll(
        "#mainNavigation .nav-link, #mainNavigation .nav-contact"
    );


const navigation =
    document.getElementById("mainNavigation");


mobileNavLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (
            navigation.classList.contains("show")
        ) {

            const bootstrapCollapse =
                bootstrap.Collapse.getInstance(
                    navigation
                );

            if (bootstrapCollapse) {

                bootstrapCollapse.hide();

            }

        }

    });

});


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(6, 21, 34, 0.96)";

    } else {

        navbar.style.background =
            "rgba(7, 26, 43, 0.90)";

    }

});