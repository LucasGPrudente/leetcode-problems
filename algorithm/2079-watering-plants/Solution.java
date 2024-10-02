// Return the number of steps needed to water all the plant

class Solution {
    public int wateringPlants(int[] plants, int capacity) {
        int steps = plants.length;
        int water = capacity;

        for (int i = 0; i < plants.length; i++) {
            if (plants[i] > water) {
                steps += i * 2;
                water = capacity;
            }

            water -= plants[i];
        }

        return steps;
    }
}