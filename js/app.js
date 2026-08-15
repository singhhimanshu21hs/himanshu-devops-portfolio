/* =========================================================
   DEVOPS PORTFOLIO MAIN APP ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       1. AOS (ANIMATE ON SCROLL) INITIALIZATION
    ========================================================= */
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
            disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        });
    }

    /* =========================================================
       2. SMOOTH SCROLLING FOR NAVIGATION LINKS
    ========================================================= */
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            // Ignore empty or placeholder hashes
            if (!targetId || targetId === "#") return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                // Compute position accounting for sticky header offset
                const headerOffset = 84;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    /* =========================================================
       3. STICKY HEADER GLASS EFFECT ON SCROLL
    ========================================================= */
    const header = document.querySelector(".navbar") || document.querySelector(".header");

    if (header) {
        const toggleHeaderState = () => {
            if (window.scrollY > 40) {
                header.classList.add("scrolled", "active");
            } else {
                header.classList.remove("scrolled", "active");
            }
        };

        window.addEventListener("scroll", toggleHeaderState, { passive: true });
        toggleHeaderState(); // Initial check on load
    }

    /* =========================================================
       4. DYNAMIC FOOTER YEAR UPDATE
    ========================================================= */
    const yearSpan = document.querySelector("#copyright-year");
    const currentYear = new Date().getFullYear();

    if (yearSpan) {
        yearSpan.textContent = currentYear;
    } else {
        const copyrightContainer = document.querySelector(".copyright p") || document.querySelector("footer p");
        if (copyrightContainer && !copyrightContainer.textContent.includes(currentYear)) {
            copyrightContainer.innerHTML = `© ${currentYear} <strong>DevOps Engineer Portfolio</strong>. All rights reserved.`;
        }
    }

    /* =========================================================
       5. DEVTOOLS TERMINAL BANNER
    ========================================================= */
    const consoleStyles = [
        "color: #00d9ff",
        "background: #070d1c",
        "font-family: monospace",
        "font-size: 13px",
        "padding: 10px 15px",
        "border: 1px solid #00d9ff",
        "border-radius: 6px"
    ].join(";");

    console.log(
        `%c🚀 DevOps Portfolio Engine Loaded Successfully!\n` +
        `----------------------------------------\n` +
        `Stack: Linux | AWS | Azure | Docker | K8s | Terraform | CI/CD\n` +
        `Status: All Systems Operational 🟢`,
        consoleStyles
    );
});