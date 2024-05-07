// Return the number of students that are unable to eat

class Solution {
    public int countStudents(int[] students, int[] sandwiches) {
        List<Integer> stud = new ArrayList<>();
        List<Integer> sand = new ArrayList<>();

        for (int s : students) {
            stud.add(s);
        }

        for (int s : sandwiches) {
            sand.add(s);
        }

        while (sand.size() > 0) {
            if (!stud.contains(sand.get(0))) {
                break;
            }

            stud.remove(stud.indexOf(sand.get(0)));
            sand.remove(0);
        }

        return stud.size();
    }
}
