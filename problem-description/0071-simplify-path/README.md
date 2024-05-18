## [71. Simplify Path](https://leetcode.com/problems/simplify-path)

<code>Medium</code> <code>String</code> <code>Stack</code>

<br>

Given an absolute path for a Unix-style file system, which begins with a slash <code>'/'</code>, transform this path into its __simplified canonical path__.

In Unix-style file system context, a single period <code>'.'</code> signifies the current directory, a double period <code>".."</code> denotes moving up one directory level, and multiple slashes such as <code>"//"</code> are interpreted as a single slash. In this problem, treat sequences of periods not covered by the previous rules (like <code>"..."</code>) as valid names for files or directories.

The simplified canonical path should adhere to the following rules:

- It must start with a single slash <code>'/'</code>.
- Directories within the path should be separated by only one slash <code>'/'</code>.
- It should not end with a slash <code>'/'</code>, unless it's the root directory.
- It should exclude any single or double periods used to denote current or parent directories.

Return the new path.

<br>

#### Example 1:

> __Input:__ path = "/home/"  
>   
> __Output:__ "/home"  
>   
> __Explanation:__ The trailing slash should be removed.  

#### Example 2:

> __Input:__ path = "/home//foo/"  
>   
> __Output:__ "/home/foo"  
>   
> __Explanation:__ Multiple consecutive slashes are replaced by a single one.  

#### Example 3:

> __Input:__ path = "/home/user/Documents/../Pictures"  
>   
> __Output:__ "/home/user/Pictures"  
>   
> __Explanation:__ A double period ".." refers to the directory up a level.  

#### Example 4:

> __Input:__ path = "/../"  
>   
> __Output:__ "/"  
>   
> __Explanation:__ Going one level up from the root directory is not possible.  

#### Example 5:

> Input: path = "/.../a/../b/c/../d/./"  
>   
> Output: "/.../b/d"  
>   
> Explanation: "..." is a valid name for a directory in this problem.  

<br>

#### Constraints:

- <code>1 <= path.length <= 3000</code>
- <code>path</code> consists of English letters, digits, period <code>'.'</code>, slash <code>'/'</code> or <code>'_'</code>.
- <code>path</code> is a valid absolute Unix path.
