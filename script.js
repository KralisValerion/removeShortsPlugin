let observer = new MutationObserver((mutationList) => {
    for (let mutationRecord of mutationList) {
        for (let node of mutationRecord.addedNodes) {
            if (node instanceof HTMLElement && node.matches("ytd-rich-section-renderer") || node instanceof HTMLElement && node.matches("ytd-reel-shelf-renderer") || node instanceof HTMLElement && node.matches("grid-shelf-view-model")) {
                node.style.display = "none";
            }
        }
    }
})

observer.observe(document.body, {
    childList: true,
    subtree: true,
})