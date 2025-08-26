let finderShortsContainer = setInterval(() => {
    let shotsContainers = document.querySelectorAll("#dismissible");
    let shotsSmallContainer = document.querySelector("ytd-reel-shelf-renderer")
    shotsContainers.forEach((item) => {
        item.style.display = "none"
    })
    if (shotsSmallContainer) {
        if (shotsSmallContainer.contains(document.querySelector("ytm-shorts-lockup-view-model"))) {
            shotsSmallContainer.style.display = "none";
        }
    }

}, 3000)