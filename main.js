const apiUrl = "https://api.openweathermap.org/data/3.0/onecall?lang=en&appid=" + openweathermap.apiKey;

async function getWeatherData() {
    const response = await fetch(apiUrl + `&appid=${openweathermap.apiKey}`);
    const data = await response.json();
    console.log(data);
}

if (pageNotFound) {
    document.querySelector('main').innerHTML = `
        <h1>404 - Page Not Found</h1>
        <p>The page you requested could not be found.</p>
    `;
}

getWeatherData();