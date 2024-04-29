var findPoisonedDuration = function (timeSeries, duration) {
    let poisoned = 0;

    timeSeries.forEach((e, i) => {
        if(i == timeSeries.length - 1) return;

        let interval = timeSeries[i + 1] - e;

        poisoned += (interval >= duration) ? duration : interval;
    });

    return poisoned + duration;
};
