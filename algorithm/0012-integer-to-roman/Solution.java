// Given an integer, convert it to a Roman numeral

class Solution {
    public String intToRoman(int num) {
        return generateRomanNum(decomposeNum(num));
    }

    public String generateRomanNum(int[] vals) {
        StringBuilder romanNum = new StringBuilder();

        for (int x : vals) {
            switch (x) {
                case 1:
                    romanNum.append("I");
                    continue;
                case 2:
                    romanNum.append("II");
                    continue;
                case 3:
                    romanNum.append("III");
                    continue;
                case 4:
                    romanNum.append("IV");
                    continue;
                case 5:
                    romanNum.append("V");
                    continue;
                case 6:
                    romanNum.append("VI");
                    continue;
                case 7:
                    romanNum.append("VII");
                    continue;
                case 8:
                    romanNum.append("VIII");
                    continue;
                case 9:
                    romanNum.append("IX");
                    continue;
                case 10:
                    romanNum.append("X");
                    continue;
                case 20:
                    romanNum.append("XX");
                    continue;
                case 30:
                    romanNum.append("XXX");
                    continue;
                case 40:
                    romanNum.append("XL");
                    continue;
                case 50:
                    romanNum.append("L");
                    continue;
                case 60:
                    romanNum.append("LX");
                    continue;
                case 70:
                    romanNum.append("LXX");
                    continue;
                case 80:
                    romanNum.append("LXXX");
                    continue;
                case 90:
                    romanNum.append("XC");
                    continue;
                case 100:
                    romanNum.append("C");
                    continue;
                case 200:
                    romanNum.append("CC");
                    continue;
                case 300:
                    romanNum.append("CCC");
                    continue;
                case 400:
                    romanNum.append("CD");
                    continue;
                case 500:
                    romanNum.append("D");
                    continue;
                case 600:
                    romanNum.append("DC");
                    continue;
                case 700:
                    romanNum.append("DCC");
                    continue;
                case 800:
                    romanNum.append("DCCC");
                    continue;
                case 900:
                    romanNum.append("CM");
                    continue;
                case 1000:
                    romanNum.append("M");
                    continue;
                case 2000:
                    romanNum.append("MM");
                    continue;
                case 3000:
                    romanNum.append("MMM");
                    continue;
                default:
                    continue;
            }
        }

        return romanNum.toString();
    }

    public int[] decomposeNum(int n) {
        int l = String.valueOf(n).length();

        int[] vals = new int[l];

        // Positional notation
        int p = (int) Math.pow(10, l - 1);

        int i = 0;
        while (n > 0) {
            vals[i] = (n / p) * p;

            n = n % p;
            p = p / 10;
            i = i + 1;
        }

        return vals;
    }
}
