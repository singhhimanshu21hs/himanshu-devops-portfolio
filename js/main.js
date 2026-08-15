/* =========================================================
   AMIT K PANDEY - DEVOPS PORTFOLIO
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const mobileMenuBtn =
        document.querySelector(".mobile-menu-btn");

    const navMenu =
        document.querySelector(".nav-menu");

    const navLinks =
        document.querySelectorAll(".nav-link");

    const backToTop =
        document.querySelector(".back-to-top");

    const navbar =
        document.querySelector(".navbar");

    const typingElement =
        document.querySelector(".typing-text");

    const sections =
        document.querySelectorAll("section[id]");

    const revealElements =
        document.querySelectorAll(
            ".skill-card, .project-card, .certification-card, .experience-card, .highlight-card"
        );


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    if (mobileMenuBtn && navMenu) {

        mobileMenuBtn.addEventListener("click", () => {

            navMenu.classList.toggle("open");

            const isOpen =
                navMenu.classList.contains("open");

            mobileMenuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

            mobileMenuBtn.innerHTML =
                isOpen
                    ? '<i class="fas fa-times"></i>'
                    : '<i class="fas fa-bars"></i>';

        });

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================================== */

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (!navMenu) return;

            navMenu.classList.remove("open");

            if (mobileMenuBtn) {

                mobileMenuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                mobileMenuBtn.innerHTML =
                    '<i class="fas fa-bars"></i>';

            }

        });

    });


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                !targetId.startsWith("#")
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const navbarHeight =
                navbar
                    ? navbar.offsetHeight
                    : 70;

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


    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    if (typingElement) {

        const roles = [

            "DevOps Engineer",

            "Cloud Engineer",

            "AWS Engineer",

            "Azure Engineer",

            "Kubernetes Engineer",

            "Infrastructure Engineer",

            "SRE Enthusiast"

        ];

        let roleIndex = 0;

        let characterIndex = 0;

        let deleting = false;

        const typingSpeed = 90;

        const deletingSpeed = 50;

        const pauseAfterTyping = 1500;

        const pauseAfterDeleting = 500;


        function typeRole() {

            const currentRole =
                roles[roleIndex];


            if (!deleting) {

                typingElement.textContent =
                    currentRole.substring(
                        0,
                        characterIndex + 1
                    );

                characterIndex++;


                if (
                    characterIndex ===
                    currentRole.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeRole,
                        pauseAfterTyping
                    );

                    return;

                }


                setTimeout(
                    typeRole,
                    typingSpeed
                );


            } else {

                typingElement.textContent =
                    currentRole.substring(
                        0,
                        characterIndex - 1
                    );

                characterIndex--;


                if (characterIndex === 0) {

                    deleting = false;

                    roleIndex =
                        (roleIndex + 1) %
                        roles.length;

                    setTimeout(
                        typeRole,
                        pauseAfterDeleting
                    );

                    return;

                }


                setTimeout(
                    typeRole,
                    deletingSpeed
                );

            }

        }


        typeRole();

    }


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    function handleNavbarScroll() {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.classList.add(
                "navbar-scrolled"
            );

        } else {

            navbar.classList.remove(
                "navbar-scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        handleNavbarScroll
    );


    handleNavbarScroll();


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    function updateActiveNavigation() {

        const scrollPosition =
            window.scrollY +
            150;


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");


            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                    sectionTop +
                    sectionHeight
            ) {

                navLinks.forEach((link) => {

                    link.classList.remove(
                        "active"
                    );

                    const href =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        href ===
                        `#${sectionId}`
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                });

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


    /* =====================================================
       BACK TO TOP BUTTON
    ===================================================== */

    function handleBackToTop() {

        if (!backToTop) return;


        if (window.scrollY > 500) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }


    window.addEventListener(
        "scroll",
        handleBackToTop
    );


    handleBackToTop();


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }


    /* =====================================================
       SCROLL REVEAL ANIMATION
    ===================================================== */

    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observerInstance.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {

                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -50px 0px"

                }
            );


        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "reveal"
                );

                observer.observe(
                    element
                );

            }
        );

    }


    /* =====================================================
       TERMINAL COMMAND ANIMATION
    ===================================================== */

    const terminalStatus =
        document.querySelector(
            ".terminal-success"
        );


    if (terminalStatus) {

        setInterval(() => {

            terminalStatus.style.opacity =
                terminalStatus.style.opacity ===
                "0.4"
                    ? "1"
                    : "0.4";

        }, 1000);

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.querySelector(
            "#current-year"
        );


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       PROJECT CARD HOVER EFFECT
    ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    (y - centerY) /
                    25;

                const rotateY =
                    (centerX - x) /
                    25;


                card.style.transform =
                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });


    /* =====================================================
       SKILL CARD STAGGER
    ===================================================== */

    const skillCards =
        document.querySelectorAll(
            ".skill-card"
        );


    skillCards.forEach(
        (card, index) => {

            card.style.transitionDelay =
                `${index * 60}ms`;

        }
    );


    /* =====================================================
       PROJECT CARD STAGGER
    ===================================================== */

    projectCards.forEach(
        (card, index) => {

            card.style.transitionDelay =
                `${index * 80}ms`;

        }
    );


    /* =====================================================
       CERTIFICATION CARD STAGGER
    ===================================================== */

    const certificationCards =
        document.querySelectorAll(
            ".certification-card"
        );


    certificationCards.forEach(
        (card, index) => {

            card.style.transitionDelay =
                `${index * 80}ms`;

        }
    );


    /* =====================================================
       TERMINAL COMMAND RANDOM STATUS
    ===================================================== */

    const terminalCommands = [

        "kubectl get pods",

        "terraform plan",

        "docker ps",

        "aws ec2 describe-instances",

        "git status",

        "kubectl get nodes",

        "terraform validate"

    ];


    const terminalCommand =
        document.querySelector(
            ".dynamic-terminal-command"
        );


    if (terminalCommand) {

        let commandIndex = 0;


        setInterval(() => {

            terminalCommand.style.opacity =
                "0";


            setTimeout(() => {

                terminalCommand.textContent =
                    `$ ${
                        terminalCommands[
                            commandIndex
                        ]
                    }`;

                terminalCommand.style.opacity =
                    "1";


                commandIndex =
                    (commandIndex + 1) %
                    terminalCommands.length;

            }, 300);


        }, 4000);

    }


    /* =====================================================
       COPY EMAIL
    ===================================================== */

    const emailButtons =
        document.querySelectorAll(
            "[data-copy-email]"
        );


    emailButtons.forEach((button) => {

        button.addEventListener(
            "click",
            async () => {

                const email =
                    button.getAttribute(
                        "data-copy-email"
                    );


                if (!email) return;


                try {

                    await navigator.clipboard.writeText(
                        email
                    );


                    const originalText =
                        button.innerHTML;


                    button.innerHTML =
                        '<i class="fas fa-check"></i> Email Copied!';


                    setTimeout(() => {

                        button.innerHTML =
                            originalText;

                    }, 2000);


                } catch (error) {

                    console.error(
                        "Unable to copy email:",
                        error
                    );

                }

            }
        );

    });


    /* =====================================================
       CONSOLE EASTER EGG
    ===================================================== */

    console.log(
        "%c🚀 Amit K Pandey | DevOps Portfolio",
        "color:#00d9ff;font-size:18px;font-weight:bold;"
    );


    console.log(
        "%cCloud • Kubernetes • Terraform • CI/CD • Automation",
        "color:#8d9ab5;font-size:13px;"
    );


    console.log(
        "%c$ kubectl get portfolio",
        "color:#00d084;font-family:monospace;"
    );


    console.log(
        "%cSTATUS: Running ✓",
        "color:#00d084;font-weight:bold;"
    );

});