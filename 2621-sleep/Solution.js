// Write an asynchronous function that sleeps for millis milliseconds

/**
 * @param {number} millis
 * @return {Promise}
 */

async function sleep(millis) {
    await new Promise(time => setTimeout(time, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
