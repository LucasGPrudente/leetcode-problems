// Return to the remaining asteroids

class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        Stack<Integer> stack = new Stack<>();

        for (int i = 0; i < asteroids.length; i++) {
            if (stack.isEmpty() || asteroids[i] > 0 || stack.peek() < 0) {
                stack.add(asteroids[i]);
            } else {
                while (!stack.isEmpty()) {
                    if (stack.peek() == asteroids[i] * -1) {
                        stack.pop();
                        break;
                    } else if (stack.peek() > asteroids[i] * -1) {
                        break;
                    } else {
                        stack.pop();
                    }

                    if (stack.isEmpty() || stack.peek() < 0) {
                        stack.add(asteroids[i]);
                        break;
                    }
                }
            }
        }

        int[] answer = new int[stack.size()];

        for (int i = answer.length - 1; i > -1; i--) {
            answer[i] = stack.pop();
        }

        return answer;
    }
}