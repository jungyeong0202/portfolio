// Header state remains available if the animation CDN cannot load.
const header = document.querySelector('.glass-header');
if (header) {
    const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 60);
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
}

if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
            // =================================================
            // 1. HERO
            // 가장 강한 첫 진입 모션
            // =================================================
            const heroTimeline = gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });
            heroTimeline
                .from(".header", {
                    y: -16,
                    autoAlpha: 0,
                    duration: 0.7
                })
                .from(".hero-title", {
                    y: 40,
                    autoAlpha: 0,
                    duration: 0.9
                }, "-=0.4")
                .from(".hero-role", {
                    y: 14,
                    autoAlpha: 0,
                    duration: 0.55
                }, "-=0.55")
                .from(".hero-message", {
                    y: 28,
                    autoAlpha: 0,
                    duration: 0.8
                }, "-=0.5")
                .from(".hero-description", {
                    y: 18,
                    autoAlpha: 0,
                    duration: 0.65
                }, "-=0.45")
                .from(".scroll-guide", {
                    y: 12,
                    autoAlpha: 0,
                    duration: 0.5
                }, "-=0.35");
            // =================================================
            // 2. SELECTED WORK TITLE
            // =================================================
            const workTitle = document.querySelector(
                ".section-heading"
            );
            if (workTitle) {
                gsap.from(workTitle, {
                    scrollTrigger: {
                        trigger: workTitle,
                        start: "top 88%",
                        once: true
                    },
                    y: 20,
                    autoAlpha: 0,
                    duration: 0.65,
                    ease: "power3.out"
                });
            }
            // =================================================
            // 3. PROJECT 01
            // 기본 프로젝트
            // =================================================
            const project01 = document.querySelector(
                ".project--01"
            );
            if (project01) {
                const number = project01.querySelector(
                    ".project-number"
                );
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: project01,
                        start: "top 78%",
                        once: true
                    },
                    defaults: {
                        ease: "power3.out"
                    }
                });
                if (number) {
                    timeline.from(number, {
                        y: 12,
                        autoAlpha: 0,
                        duration: 0.45
                    });
                }
                timeline
                    .from(
                        project01.querySelector(
                            ".project-visual"
                        ),
                        {
                            y: 30,
                            autoAlpha: 0,
                            scale: 0.985,
                            duration: 0.85
                        },
                        "-=0.2"
                    )
                    .from(
                        project01.querySelector(
                            ".project-header"
                        ),
                        {
                            y: 18,
                            autoAlpha: 0,
                            duration: 0.6
                        },
                        "-=0.45"
                    )
                    .from(
                        project01.querySelector(
                            ".project-info"
                        ),
                        {
                            y: 12,
                            autoAlpha: 0,
                            duration: 0.5
                        },
                        "-=0.35"
                    );
            }
            // =================================================
            // 4. PROJECT 02
            // 좌우 구성의 방향성 활용
            // =================================================
            const project02 = document.querySelector(
                ".project--02"
            );
            if (project02) {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: project02,
                        start: "top 78%",
                        once: true
                    },
                    defaults: {
                        ease: "power3.out"
                    }
                });
                const number = project02.querySelector(
                    ".project-number"
                );
                if (number) {
                    timeline.from(number, {
                        y: 10,
                        autoAlpha: 0,
                        duration: 0.4
                    });
                }
                timeline
                    .from(
                        project02.querySelector(
                            ".project-key-message"
                        ),
                        {
                            x: -24,
                            autoAlpha: 0,
                            duration: 0.7
                        },
                        "-=0.15"
                    )
                    .from(
                        project02.querySelector(
                            ".project-summary"
                        ),
                        {
                            y: 12,
                            autoAlpha: 0,
                            duration: 0.5
                        },
                        "-=0.4"
                    )
                    .from(
                        project02.querySelector(
                            ".project-visual"
                        ),
                        {
                            x: 28,
                            autoAlpha: 0,
                            scale: 0.99,
                            duration: 0.85
                        },
                        "-=0.65"
                    )
                    .from(
                        project02.querySelector(
                            ".project-info"
                        ),
                        {
                            y: 10,
                            autoAlpha: 0,
                            duration: 0.45
                        },
                        "-=0.35"
                    );
            }
            // =================================================
            // 5. PROJECT 03
            // SIGNATURE MOTION
            // =================================================
            const project03 = document.querySelector(
                ".project--03"
            );
            if (project03) {
                const phones = project03.querySelectorAll(
                    ".project-placeholder--phone"
                );
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: project03,
                        start: "top 72%",
                        once: true
                    },
                    defaults: {
                        ease: "power3.out"
                    }
                });
                timeline
                    .from(
                        project03.querySelector(
                            ".project-header"
                        ),
                        {
                            y: 18,
                            autoAlpha: 0,
                            duration: 0.6
                        }
                    )
                    .from(
                        project03.querySelector(
                            ".project-feature strong"
                        ),
                        {
                            y: 35,
                            autoAlpha: 0,
                            duration: 0.75
                        },
                        "-=0.2"
                    )
                    .from(
                        project03.querySelector(
                            ".project-feature p"
                        ),
                        {
                            y: 20,
                            autoAlpha: 0,
                            duration: 0.6
                        },
                        "-=0.4"
                    );
                if (phones[0]) {
                    timeline.from(
                        phones[0],
                        {
                            y: 90,
                            rotate: -3,
                            scale: 0.96,
                            autoAlpha: 0,
                            duration: 0.9
                        },
                        "-=0.55"
                    );
                }
                if (phones[1]) {
                    timeline.from(
                        phones[1],
                        {
                            y: 120,
                            rotate: 3,
                            scale: 0.96,
                            autoAlpha: 0,
                            duration: 0.9
                        },
                        "-=0.75"
                    );
                }
                timeline.from(
                    project03.querySelector(
                        ".project-info"
                    ),
                    {
                        y: 16,
                        autoAlpha: 0,
                        duration: 0.55
                    },
                    "-=0.3"
                );
                // ---------------------------------------------
                // PROJECT 03 SUBTLE PARALLAX
                // 해당 프로젝트에만 사용
                // ---------------------------------------------
                if (phones.length >= 2) {
                    gsap.to(phones[0], {
                        y: -18,
                        ease: "none",
                        scrollTrigger: {
                            trigger: project03,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1
                        }
                    });
                    gsap.to(phones[1], {
                        y: 18,
                        ease: "none",
                        scrollTrigger: {
                            trigger: project03,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1
                        }
                    });
                }
            }
            // =================================================
            // 6. PROJECT 04 + 05
            // 각각 따로 움직이지 않고 하나의 그룹으로 처리
            // =================================================
            const smallGrid = document.querySelector(
                ".project-small-grid"
            );
            if (smallGrid) {
                const smallProjects = smallGrid.querySelectorAll(
                    ".project--small"
                );
                gsap.from(smallProjects, {
                    scrollTrigger: {
                        trigger: smallGrid,
                        start: "top 82%",
                        once: true
                    },
                    y: 32,
                    autoAlpha: 0,
                    duration: 0.75,
                    stagger: 0.12,
                    ease: "power3.out"
                });
            }
            // =================================================
            // 7. ABOUT
            // 조용한 Reveal
            // =================================================
            const aboutSection = document.querySelector(
                ".about-section"
            );
            if (aboutSection) {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: aboutSection,
                        start: "top 78%",
                        once: true
                    },
                    defaults: {
                        ease: "power3.out"
                    }
                });
                timeline
                    .from(".about-main", {
                        y: 24,
                        autoAlpha: 0,
                        duration: 0.7
                    })
                    .from(".about-content", {
                        y: 20,
                        autoAlpha: 0,
                        duration: 0.65
                    }, "-=0.4");
            }
            // =================================================
            // 8. CONTACT
            // 마지막 CTA
            // =================================================
            const contactSection = document.querySelector(
                ".contact-section"
            );
            if (contactSection) {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: contactSection,
                        start: "top 80%",
                        once: true
                    },
                    defaults: {
                        ease: "power3.out"
                    }
                });
                timeline
                    .from(".contact-section h2", {
                        y: 45,
                        autoAlpha: 0,
                        duration: 0.85
                    })
                    .from(".contact-bottom", {
                        y: 14,
                        autoAlpha: 0,
                        duration: 0.55
                    }, "-=0.35");
            }
            // matchMedia automatically reverts its animations and ScrollTriggers.
        }
    );
    // =========================================================
    // LOAD
    // =========================================================
    window.addEventListener(
        "load",
        () => {
            ScrollTrigger.refresh();
        }
    );
}
