const state = {
    visitedUrls: new Set()
};

function getRandomUrl(urls, visitedUrls) {
    if (visitedUrls.size === urls.length) {
        visitedUrls.clear();
    }

    let randomUrl;
    do {
        const randomIndex = Math.floor(Math.random() * urls.length);
        randomUrl = urls[randomIndex];
    } while (visitedUrls.has(randomUrl));

    visitedUrls.add(randomUrl);
    return randomUrl;
}

function redirectToUrl(url) {
    try {
        window.location.href = url;
    } catch (error) {
        console.error('Error redirecting to URL:', error);
    }
}

function startUrlRotator(config, state) {
    const selectedUrl = getRandomUrl(config.urls, state.visitedUrls);
    setTimeout(() => redirectToUrl(selectedUrl), config.redirectDelay);
}

startUrlRotator(config, state);