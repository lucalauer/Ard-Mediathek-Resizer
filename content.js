const observer = new MutationObserver(() => {
    let videoPlayer = document.querySelector('.b14noydu');
    console.log(videoPlayer)
    let container = document.querySelector('._16mbll2');
    console.log(container)

    if (videoPlayer && container) {
        // Live
        container.style.setProperty('width', '100%');
        videoPlayer.style.setProperty('max-width', '85%');
    } else if (videoPlayer) {
        // Mediathek
        videoPlayer.style.setProperty('max-width', '85%');
    }
});

observer.observe(document.body, { childList: true, subtree: true });