// Return to the remaining asteroids

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
      if (stack.length == 0 || asteroids[i] > 0 || stack[stack.length - 1] < 0) {
          stack.push(asteroids[i]);
      } else {
          while (stack.length > 0) {
              if (stack[stack.length - 1] == asteroids[i] * -1) {
                  stack.pop();
                  break;
              } else if (stack[stack.length - 1] > asteroids[i] * -1) {
                  break;
              } else {
                  stack.pop();
              }

              if (stack.length == 0 || stack[stack.length - 1] < 0) {
                  stack.push(asteroids[i]);
                  break;
              }
          }
      }
  }

  return stack;
};