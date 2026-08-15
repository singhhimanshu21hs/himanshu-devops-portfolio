/* =========================================================
   DEVOPS PORTFOLIO - ENHANCED ANIMATIONS & INTERACTION ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* =========================================================
       1. INTERSECTION OBSERVER (SCROLL ANIMATIONS)
    ========================================================= */
    if (!prefersReducedMotion) {
        const observerOptions = {
            root: null,
            rootMargin: "0px 0px -50px 0px",
            threshold: 0.15
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Apply delay if specified via HTML data attribute (e.g., data-delay="100")
                    const delay = entry.target.dataset.delay || 0;

                    setTimeout(() => {
                        entry.target.classList.add("show");
                    }, delay);

                    // Unobserve after animating once to conserve memory and maintain performance
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Target scroll reveal elements
        const animateElements = document.querySelectorAll(`
            .skill-card, 
            .project-card, 
            .certification-card, 
            .experience-card, 
            .about-grid, 
            .contact-box, 
            .section-heading
        `);

        animateElements.forEach((element, index) => {
            // Automatically add staggered delay to grid items if not explicitly set
            if (element.matches(".skill-card, .project-card, .certification-card")) {
                const staggerDelay = (index % 3) * 100;
                element.setAttribute("data-delay", staggerDelay);
            }

            element.classList.add("reveal-hidden"); // Set up initial hidden state
            revealObserver.observe(element);
        });
    }

    /* =========================================================
       2. DYNAMIC NAVBAR SCROLL & SECTION HIGHLIGHTING
    ========================================================= */
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const handleScroll = () => {
        // Toggle compact header background on scroll
        if (window.scrollY > 50) {
            navbar?.classList.add("scrolled");
        } else {
            navbar?.classList.remove("scrolled");
        }

        // Highlight active navigation link based on current section
        let currentSectionId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id") || "";
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    /* =========================================================
       3. BACK TO TOP BUTTON TOGGLE
    ========================================================= */
    const backToTopBtn = document.querySelector(".back-to-top");

    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        }, { passive: true });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* =========================================================
       4. MOBILE MENU TOGGLE
    ========================================================= */
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navMenu = document.querySelector(".nav-menu");

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            const isExpanded = navMenu.classList.contains("open");
            mobileMenuBtn.setAttribute("aria-expanded", isExpanded);
        });

        // Close menu when clicking outside or on a link
        document.addEventListener("click", (e) => {
            if (!navbar.contains(e.target)) {
                navMenu.classList.remove("open");
            }
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
            });
        });
    }
});