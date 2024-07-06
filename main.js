/**
         * URL Rotator configuration.
         * @type {Object}
         */
const config = {
    urls: [
        'https://example.com/url_1',
        'https://example.com/url_2',
        'https://example.com/url_3'
    ],
    redirectDelay: 3000 // Time before redirection in milliseconds
};

/**
 * URL Rotator state.
 * @type {Object}
 */
const state = {
    visitedUrls: new Set()
};

/**
 * Selects a random URL from the list of URLs without repeating until all have been visited.
 * @param {string[]} urls - List of URLs.
 * @param {Set} visitedUrls - Set of visited URLs.
 * @return {string} Non-repeated random URL.
 */
function getRandomUrl(urls, visitedUrls) {
    if (visitedUrls.size === urls.length) {
        visitedUrls.clear(); // Resets the set if all URLs have been visited
    }

    let randomUrl;
    do {
        const randomIndex = Math.floor(Math.random() * urls.length);
        randomUrl = urls[randomIndex];
    } while (visitedUrls.has(randomUrl));

    visitedUrls.add(randomUrl);
    return randomUrl;
}

/**
 * Redirects to the provided URL.
 * @param {string} url - URL to redirect to.
 */
function redirectToUrl(url) {
    try {
        window.location.href = url;
    } catch (error) {
        console.error('Error redirecting to URL:', error);
    }
}

/**
 * Main function to start the URL rotator.
 * @param {Object} config - Rotator configuration.
 * @param {Object} state - Rotator state.
 */
function startUrlRotator(config, state) {
    const selectedUrl = getRandomUrl(config.urls, state.visitedUrls);
    setTimeout(() => redirectToUrl(selectedUrl), config.redirectDelay);
}

// Start the URL rotator with provided configuration and state.
startUrlRotator(config, state);