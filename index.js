const swapiService = require('./services/swapiService');
const { calculateStops } = require('./utils/timeConverter');

async function main() {
    const distanceMGLT = parseInt(process.argv[2]);

    if (isNaN(distanceMGLT) || distanceMGLT <= 0) {
        console.error('Please provide a valid positive integer for the distance in MegaLights (MGLT).');
        console.error('Usage: node index.js <distance_in_MGLT>');
        process.exit(1);
    }

    try {
        const starships = await swapiService.getAllStarships();

        starships.forEach(starship => {
            const stops = calculateStops(distanceMGLT, starship.MGLT, starship.consumables);
            console.log(`${starship.name}: ${stops}`);
        });
    } catch (error) {
        console.error('An error occurred while fetching starship data or calculating stops:', error.message);
    }
}

main();