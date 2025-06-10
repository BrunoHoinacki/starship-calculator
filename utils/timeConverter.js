/**
 * Converts a given time string (e.g., "2 days", "1 week", "1 year") into hours.
 * @param {string} timeString - The time string to convert.
 * @returns {number | null} The time in hours, or null if the format is invalid.
 */
function convertToHours(timeString) {
    if (!timeString || timeString.toLowerCase() === 'unknown' || timeString.toLowerCase() === 'n/a') {
        return null;
    }

    const parts = timeString.split(' ');
    if (parts.length !== 2) {
        return null; // Invalid format
    }

    const value = parseFloat(parts[0]);
    const unit = parts[1].toLowerCase();

    if (isNaN(value)) {
        return null;
    }

    switch (unit) {
        case 'second':
        case 'seconds':
            return value / 3600;
        case 'minute':
        case 'minutes':
            return value / 60;
        case 'hour':
        case 'hours':
            return value;
        case 'day':
        case 'days':
            return value * 24;
        case 'week':
        case 'weeks':
            return value * 7 * 24;
        case 'month':
        case 'months':
            return value * 30 * 24; // Assuming 30 days per month
        case 'year':
        case 'years':
            return value * 365 * 24; // Assuming 365 days per year
        default:
            return null; // Unknown unit
    }
}

/**
 * Calculates the number of refuel stops required for a starship to travel a given distance.
 * @param {number} totalDistanceMGLT - The total distance to travel in MegaLights.
 * @param {string} MGLTPerHour - The MegaLights per hour capacity of the starship.
 * @param {string} consumables - The maximum time a starship can go without refueling (e.g., "2 days").
 * @returns {number} The number of refuel stops.
 */
function calculateStops(totalDistanceMGLT, MGLTPerHour, consumables) {
    const mglt = parseInt(MGLTPerHour);
    const consumablesInHours = convertToHours(consumables);

    if (isNaN(mglt) || mglt <= 0 || consumablesInHours === null || consumablesInHours <= 0) {
        return 0; // Cannot calculate, or starship has no practical travel capability / consumables
    }

    const distancePerConsumableCycle = mglt * consumablesInHours;

    if (distancePerConsumableCycle === 0) {
        return 0; // Prevents division by zero if MGLT or consumables are effectively zero
    }

    const numberOfStops = Math.floor(totalDistanceMGLT / distancePerConsumableCycle);
    return numberOfStops;
}

module.exports = {
    convertToHours,
    calculateStops,
};