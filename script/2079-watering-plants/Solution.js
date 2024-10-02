// Return the number of steps needed to water all the plant

/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */

var wateringPlants = function (plants, capacity) {
    let steps = 0;
    let water = capacity;

    for (let i = 0; i < plants.length; i++) {
        if (plants[i] > water) {
            steps += i * 2;
            water = capacity;
        }

        water -= plants[i];
        steps += 1;
    }

    return steps;
};