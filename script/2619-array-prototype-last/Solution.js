// Return the last element. If there are no elements in the array, it should return -1

/**
 * @return {null|boolean|number|string|Array|Object}
 */

Array.prototype.last = function () {
    if (this.length > 0) { return this[this.length - 1]; }

    return -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
