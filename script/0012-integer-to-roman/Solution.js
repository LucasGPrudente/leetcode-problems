// Given an integer, convert it to a Roman numeral

/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function (num) {
    let romanNum = "";

    // Positional value
    let pos = Math.pow(10, num.toString().length - 1);

    while (num > 0) {
        dig = parseInt(num / pos) * pos;

        num = parseInt(num % pos);
        pos = parseInt(pos / 10);

        switch (dig) {
            case 1:
                romanNum += "I";
                continue;
            case 2:
                romanNum += "II";
                continue;
            case 3:
                romanNum += "III";
                continue;
            case 4:
                romanNum += "IV";
                continue;
            case 5:
                romanNum += "V";
                continue;
            case 6:
                romanNum += "VI";
                continue;
            case 7:
                romanNum += "VII";
                continue;
            case 8:
                romanNum += "VIII";
                continue;
            case 9:
                romanNum += "IX";
                continue;
            case 10:
                romanNum += "X";
                continue;
            case 20:
                romanNum += "XX";
                continue;
            case 30:
                romanNum += "XXX";
                continue;
            case 40:
                romanNum += "XL";
                continue;
            case 50:
                romanNum += "L";
                continue;
            case 60:
                romanNum += "LX";
                continue;
            case 70:
                romanNum += "LXX";
                continue;
            case 80:
                romanNum += "LXXX";
                continue;
            case 90:
                romanNum += "XC";
                continue;
            case 100:
                romanNum += "C";
                continue;
            case 200:
                romanNum += "CC";
                continue;
            case 300:
                romanNum += "CCC";
                continue;
            case 400:
                romanNum += "CD";
                continue;
            case 500:
                romanNum += "D";
                continue;
            case 600:
                romanNum += "DC";
                continue;
            case 700:
                romanNum += "DCC";
                continue;
            case 800:
                romanNum += "DCCC";
                continue;
            case 900:
                romanNum += "CM";
                continue;
            case 1000:
                romanNum += "M";
                continue;
            case 2000:
                romanNum += "MM";
                continue;
            case 3000:
                romanNum += "MMM";
                continue;
            default:
                continue;
        }
    }

    return romanNum;
};
