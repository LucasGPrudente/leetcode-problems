var countStudents = function (stud, sand) {
    while (sand.length > 0) {
        if (!stud.includes(sand[0])) break;

        stud.splice(stud.indexOf(sand[0]), 1);
        sand.splice(0, 1);
    }

    return stud.length;
};
