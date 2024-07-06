# JavaScript URL Rotator

This script dynamically rotates through a specified list of URLs.

## Usage

Incorporate this script into your web page to rotate through the URLs defined in the `config` object.

```html
<script>
    const config = {
        urls: [
            'https://example.com/url_1',
            'https://example.com/url_2',
            'https://example.com/url_3'
        ],
        redirectDelay: 3000 // Time before redirection in milliseconds
    };

    function loadUrlRotator(url) {
        const scriptElement = document.createElement('script');
        scriptElement.src = url;
        document.body.appendChild(scriptElement);
    }
    loadUrlRotator('URL_OF_YOUR_ROTATOR_SCRIPT');
</script>
