// Return the time taken for the person at position k to finish buying tickets

class Solution {
    public int timeRequiredToBuy(int[] tickets, int k) {
        return calcTime(tickets, k, 0);
    }

    public int calcTime(int[] tickets, int k, int time) {
        for (int i = 0; i < tickets.length; i++) {
            if (tickets[k] == 0) { return time; }
            if (tickets[i] == 0) { continue; }

            time++;
            tickets[i]--;
        }

        return calcTime(tickets, k, time);
    }
}
