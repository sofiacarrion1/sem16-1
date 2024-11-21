const apiUrl = 'https://api.thecatapi.com/v1/images/search';
const container = document.getElementById('cat-container');
const apiKey = 'live_l8IToACeNN7HHrxwFuyZzoBJokpcReZXu3neiWiJVKtpkUvR1L9rZfvCGMbK77zs'; // Reemplaza con tu clave de API

async function fetchCat() {
    try {
        const response = await fetch(apiUrl, {
            headers: { 'x-api-key': apiKey },
        });
        const data = await response.json();
        displayCat(data[0]);
    } catch (error) {
        console.error('Error fetching the cat:', error);
        container.innerHTML = '<p>Algo salió mal. Por favor, intenta otra vez más tarde.</p>';
    }
}

function displayCat(cat) {
    container.innerHTML = `<img src="${cat.url}" alt="Un gatito.">`;
}

document.getElementById('new-cat-btn').addEventListener('click', fetchCat);
fetchCat(); // Cargar un gato al iniciar la página
