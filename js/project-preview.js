document.querySelectorAll('.balenciaga-cover').forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;
    let active = false;
    const stop = () => {
        active = false;
        video.pause();
        card.classList.remove('is-previewing');
    };
    const start = () => {
        active = true;
        video.play().then(() => {
            if (active) card.classList.add('is-previewing');
            else video.pause();
        }).catch(() => card.classList.remove('is-previewing'));
    };
    card.addEventListener('pointerenter', event => {
        if (event.pointerType === 'mouse') start();
    });
    card.addEventListener('pointerleave', stop);
    card.addEventListener('focus', start);
    card.addEventListener('blur', stop);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stop();
    });
});
