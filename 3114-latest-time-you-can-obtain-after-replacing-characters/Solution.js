var findLatestTime = function (s) {
    let hour = s.split("");

    if (hour[0] == '?') { hour[0] = (hour[1] <= 1 || hour[1] == '?') ? 1 : 0; }

    if (hour[1] == '?') { hour[1] = (hour[0] == 1) ? 1 : 9; }

    if (hour[3] == '?') { hour[3] = 5; }

    if (hour[4] == '?') { hour[4] = 9; }

    return hour.join("");
};
