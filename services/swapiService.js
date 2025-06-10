const axios = require('axios');
const https = require('https');

const URL_BASE = 'https://swapi.dev/api';

const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

async function getAllStarships() {
    let allStarships = [];
    let nextUrl = `${URL_BASE}/starships/`;

    while (nextUrl) {
        try {
            const response = await instance.get(nextUrl);
            allStarships = allStarships.concat(response.data.results);
            nextUrl = response.data.next;
        } catch (error) {
            console.error(`Erro ao buscar naves espaciais de ${nextUrl}:`, error.message);
            throw new Error('Falha ao recuperar dados de naves espaciais da SWAPI.');
        }
    }
    return allStarships;
}

module.exports = {
    getAllStarships,
};