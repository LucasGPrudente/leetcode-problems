class Solution {
    public int romanToInt(String s) {
        int num = 0, val = 0, previousNum = 0;

        for (int x = s.length() - 1; x >= 0; x--) {
            switch (s.charAt(x)) {
                case 'I' -> val = 1;
                case 'V' -> val = 5;
                case 'X' -> val = 10;
                case 'L' -> val = 50;
                case 'C' -> val = 100;
                case 'D' -> val = 500;
                case 'M' -> val = 1000;
            }

            if (val >= previousNum) {
                num += val;
            } else {
                num -= val;
            }

            previousNum = val;
        }

        return num;
    }
}
