// Return true if you can visit all the rooms, or false otherwise

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

var canVisitAllRooms = function (rooms) {
    let visited = Array(rooms.length).fill(false);
    visited[0] = true;

    checkRooms(0, rooms, visited);

    return visited.includes(false) == false;
};

function checkRooms(i, rooms, visited) {
    let room = rooms[i];

    room.forEach((key) => {
        if (visited[key] == false) {
            visited[key] = true;
            checkRooms(key, rooms, visited)
        }
    });
}
