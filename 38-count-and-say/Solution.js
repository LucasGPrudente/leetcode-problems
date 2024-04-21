var countAndSay = function (n) {
    let seq = "1";

    for (let i = 1; i < n; i++) {
        seq = count(seq);
    }

    return seq;
};

function count(str) {
    let newSeq = "";
    let arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let times = 1;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] != num) {
                break;
            }

            i = j;
            times++;
        }

        newSeq += times + num;
    }

    return newSeq;
}
