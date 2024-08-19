if (pageNotFound) {
    document.querySelector('main').innerHTML = `
        <h1>404 - Page Not Found</h1>
        <p>The page you requested could not be found.</p>
    `;
}