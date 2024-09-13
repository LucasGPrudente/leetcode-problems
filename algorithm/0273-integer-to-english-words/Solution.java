// Convert a non-negative integer num to its English words representation

class Solution {
    public String numberToWords(int n) {
        if (n == 0) {
            return "Zero";
        }

        Map<Integer, String> table = new HashMap<>();

        fillTable(table);

        List<Integer> chunks = new ArrayList<>();

        divideInChunks(chunks, n);

        List<String> words = new ArrayList<>();

        chunksToWords(words, chunks, table);

        return String.join(" ", words.toArray(new String[0]));
    }

    // Fill in the table with the word representations of the numbers
    public void fillTable(Map<Integer, String> tab) {
        tab.put(1, "One");
        tab.put(2, "Two");
        tab.put(3, "Three");
        tab.put(4, "Four");
        tab.put(5, "Five");
        tab.put(6, "Six");
        tab.put(7, "Seven");
        tab.put(8, "Eight");
        tab.put(9, "Nine");

        tab.put(11, "Eleven");
        tab.put(12, "Twelve");
        tab.put(13, "Thirteen");
        tab.put(14, "Fourteen");
        tab.put(15, "Fifteen");
        tab.put(16, "Sixteen");
        tab.put(17, "Seventeen");
        tab.put(18, "Eighteen");
        tab.put(19, "Nineteen");

        tab.put(10, "Ten");
        tab.put(20, "Twenty");
        tab.put(30, "Thirty");
        tab.put(40, "Forty");
        tab.put(50, "Fifty");
        tab.put(60, "Sixty");
        tab.put(70, "Seventy");
        tab.put(80, "Eighty");
        tab.put(90, "Ninety");

        tab.put(100, "One Hundred");
        tab.put(200, "Two Hundred");
        tab.put(300, "Three Hundred");
        tab.put(400, "Four Hundred");
        tab.put(500, "Five Hundred");
        tab.put(600, "Six Hundred");
        tab.put(700, "Seven Hundred");
        tab.put(800, "Eight Hundred");
        tab.put(900, "Nine Hundred");
    }

    // Divide the number by thousands (3 digits)
    public void divideInChunks(List<Integer> chu, int n) {
        while (n > 0) {
            int len = 0;
            int num = 0;
            int dec = 1;

            while (n > 0 && len < 3) {
                num += (n % 10) * dec;
                len += 1;
                dec *= 10;
                n /= 10;
            }

            chu.add(0, num);
        }
    }

    // Create the answer and populate it via calls to numberToWords()
    public void chunksToWords(List<String> wrd, List<Integer> chu, Map<Integer, String> tab) {
        if (chu.size() == 4) {
            numberToWords(wrd, tab, chu.get(0));
            wrd.add("Billion");

            chu.remove(0);
        }

        if (chu.size() == 3) {
            if (chu.get(0) > 0) {
                numberToWords(wrd, tab, chu.get(0));
                wrd.add("Million");
            }

            chu.remove(0);
        }

        if (chu.size() == 2) {
            if (chu.get(0) > 0) {
                numberToWords(wrd, tab, chu.get(0));
                wrd.add("Thousand");
            }

            chu.remove(0);
        }

        if (chu.get(0) > 0) {
            numberToWords(wrd, tab, chu.get(0));
        }
    }

    // Convert number to word representation
    public void numberToWords(List<String> wrd, Map<Integer, String> tab, int num) {
        int ones = num - (num % 100);
        int tens = num % 100;
        int hund = num % 10;

        if (tens > 20) {
            tens -= hund;
        } else {
            hund = 0;
        }

        if (ones != 0) {
            wrd.add(tab.get(ones));
        }

        if (tens != 0) {
            wrd.add(tab.get(tens));
        }

        if (hund != 0) {
            wrd.add(tab.get(hund));
        }
    }
}