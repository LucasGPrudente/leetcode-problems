// Return the simplified canonical path

/**
 * @param {string} path
 * @return {string}
 */

var simplifyPath = function (path) {
    let dir = path.split("/");

    for (let i = 0; i < dir.length; i++) {
        if (dir[i] == "" || dir[i] == ".") {
            dir.splice(i--, 1);
            continue;
        }

        if (dir[i] == "..") {
            dir.splice(i--, 1);

            if (i >= 0) { dir.splice(i--, 1); }
        }
    }

    return (dir.length == 0) ? "/" : "/" + dir.join("/");
};
