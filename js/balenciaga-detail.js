// Keep the table of contents in sync without changing native anchor navigation.
const chapterLinks = [...document.querySelectorAll('.case-jump a')];
const chapters = chapterLinks.map(link => document.querySelector(link.hash));
let pending = false;

function updateChapter() {
    pending = false;
    document.querySelector('.detail-header')?.classList.toggle('is-scrolled', window.scrollY > 24);
    let active = 0;
    const scrollPadding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    chapters.forEach((chapter, index) => {
        if (!chapter) return;
        const margin = parseFloat(getComputedStyle(chapter).scrollMarginTop) || 0;
        if (chapter.getBoundingClientRect().top <= scrollPadding + margin + 24) active = index;
    });
    chapterLinks.forEach((link, index) => {
        if (index === active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
    });
}

window.addEventListener('scroll', () => {
    if (!pending) {
        pending = true;
        requestAnimationFrame(updateChapter);
    }
}, { passive: true });
window.addEventListener('resize', updateChapter);
window.addEventListener('load', updateChapter);
updateChapter();

// Content is visible by default, including when the animation CDN is unavailable.
if (window.gsap && window.IntersectionObserver) {
    const motion = gsap.matchMedia();
    motion.add('(prefers-reduced-motion: no-preference)', context => {
        context.add('reveal', element => {
            gsap.to(element, {
                y: 0, opacity: 1, duration: 0.5, ease: 'power2.out',
                delay: element.matches('figure') ? 0.08 : 0,
                clearProps: 'transform,opacity'
            });
        });
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                context.reveal(entry.target);
                observer.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -5% 0px', threshold: 0 });

        // A direct chapter link or a restored scroll position should remain immediate.
        if (!location.hash && window.scrollY < 40) {
            gsap.from([
                document.querySelector('#detail-title'),
                ...document.querySelectorAll('.detail-lead, .case-project-period, .detail-hero__copy .detail-cta'),
                document.querySelector('.case-hero-facts')
            ], {
                y: 14, opacity: 0, duration: 0.5, stagger: 0.07,
                ease: 'power2.out', clearProps: 'transform,opacity'
            });
        }

        const targets = document.querySelectorAll(
            '.overview-grid, .case-overview-points, .gallery-heading, ' +
            '.case-subpages-title, .case-feature-copy, .detail-section figure, .case-closing'
        );
        targets.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight * 0.95) return;
            gsap.set(element, { y: 16, opacity: 0 });
            observer.observe(element);
        });

        const onFocus = event => {
            const element = event.target.closest('.detail-hero__copy, .case-closing');
            if (!element) return;
            // Keyboard navigation never waits for a reveal animation.
            gsap.getTweensOf([element, ...element.querySelectorAll('*')]).forEach(tween => tween.progress(1));
            observer.unobserve(element);
            gsap.set(element, { clearProps: 'transform,opacity' });
        };
        document.addEventListener('focusin', onFocus);
        return () => {
            observer.disconnect();
            document.removeEventListener('focusin', onFocus);
        };
    });
}

const walkthrough = document.querySelector('.case-hero-video video');
if (walkthrough) {
    let hovering = false;
    let userControlled = false;
    // Once native controls are used, playback belongs to the viewer.
    const useControls = () => { userControlled = true; };
    walkthrough.addEventListener('pointerdown', useControls);
    walkthrough.addEventListener('keydown', event => {
        if ([' ', 'Enter', 'k', 'K', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) useControls();
    });
    walkthrough.addEventListener('pointerenter', event => {
        if (event.pointerType !== 'mouse') return;
        hovering = true;
        if (userControlled) return;
        walkthrough.play().then(() => {
            // A pointer may leave while the browser is still loading the video.
            if (!hovering && !userControlled) walkthrough.pause();
        }).catch(() => {
            // Native controls remain available if automatic playback is blocked.
        });
    });
    walkthrough.addEventListener('pointerleave', event => {
        if (event.pointerType !== 'mouse') return;
        hovering = false;
        if (!userControlled) walkthrough.pause();
    });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            hovering = false;
            walkthrough.pause();
        }
    });
}
