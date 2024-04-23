// Return the Goal Parser's interpretation of command

/**
 * @param {string} command
 * @return {string}
 */

var interpret = function (command) {
    let interpr = "";

    command = command.split("");

    let i = 0;
    while (i < command.length) {
        switch (true) {
            case (command[i] == "G"):
                interpr += "G";
                i += 1;
                continue;
            case (command[i] == "(" && command[i + 1] == ")"):
                interpr += "o";
                i += 2;
                continue;
            case (command[i] == "(" && command[i + 1] == "a"):
                interpr += "al";
                i += 4;
                continue;
            default:
                console.log("Invalid command!");
        }
    }

    return interpr;
};
