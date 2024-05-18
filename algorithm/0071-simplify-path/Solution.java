// Return the simplified canonical path

class Solution {
    public String simplifyPath(String path) {
        StringBuilder canPath = new StringBuilder("");

        List<String> dir = new ArrayList<String>(Arrays.asList(path.split("/")));

        for (int i = 0; i < dir.size(); i++) {
            if (dir.get(i).equals("") || dir.get(i).equals(".")) {
                dir.remove(i--);
                continue;
            }

            if (dir.get(i).equals("..")) {
                dir.remove(i--);

                if (i >= 0) { dir.remove(i--); }
            }
        }

        if (dir.size() == 0) { return "/"; }

        for (int i = 0; i < dir.size(); i++) {
            canPath.append("/").append(dir.get(i));
        }

        return canPath.toString();
    }
}
