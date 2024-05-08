// Return a string array answer 

class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> answer = new ArrayList<String>();

        for (int x = 1; x <= n; x++) {
            if (x % 3 == 0 && x % 5 == 0) {
                answer.add("FizzBuzz");
            } else if (x % 5 == 0) {
                answer.add("Buzz");
            } else if (x % 3 == 0) {
                answer.add("Fizz");
            } else {
                answer.add(String.valueOf(x));
            }
        }

        return answer;
    }
}
