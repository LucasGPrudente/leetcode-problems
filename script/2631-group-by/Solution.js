// array.groupBy(fn) is a method on any array and it will return a grouped version of the array

Array.prototype.groupBy = function (fn) {
  let groupArr = {};

  for (let i = 0; i < this.length; i++) {
      let key = fn(this[i]);
      let value = this[i];

      if (groupArr[key]) {
          groupArr[key].push(value);
      } else {
          groupArr[key] = [value];
      }
  }

  return groupArr;
};

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/