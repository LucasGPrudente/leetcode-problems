// Return the minimum minutes difference between any two time-points in the list

class Solution {
    public int findMinDifference(List<String> timePoints) {
        List<Integer> timeInMinutes = new ArrayList<>();

        for (String time : timePoints) {
            int minutes = Integer.parseInt(time.substring(0, 2)) * 60 + Integer.parseInt(time.substring(3, 5));

            if (timeInMinutes.contains(minutes)) {
                return 0;
            } else {
                timeInMinutes.add(minutes);
            }
        }

        Collections.sort(timeInMinutes);

        timeInMinutes.add(timeInMinutes.get(0) + (24 * 60));

        int min = Integer.MAX_VALUE;

        for (int i = 1; i < timeInMinutes.size(); i++) {
            min = Math.min(min, timeInMinutes.get(i) - timeInMinutes.get(i - 1));
        }

        return min;
    }
}