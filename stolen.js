var fs = require('fs');
var input = fs.readfileSync("./input.txt")
    .split("\n")
    .map(function (x) { return x.split(" "); })
    .map(function (x) { return [x[0], parseInt(x[1])]; });
var updateLocation = function (startingPosition, direction, steps) {
    var x = startingPosition[0], y = startingPosition[1];
    switch (direction) {
        case "down":
        case "up":
            return [x, y + steps];
        case "forward":
            return [x + steps, y];
        default:
            return [x, y];
    }
};
//part 1
var location = [0, 0]; // y is not absolute (y = -y)
for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
    var x = input_1[_i];
    location = updateLocation(location, x[0], x[1]);
}
var answer1 = location[0] * location[1];
//part 2
var updateAim = function (startingPosition, direction, steps) {
    var x = startingPosition[0], aim = startingPosition[1], y = startingPosition[2];
    switch (direction) {
        case "down":
            return [x, aim + steps, y];
        case "up":
            return [x, aim - steps, y];
        case "forward":
            return [x + steps, aim, y + aim * steps];
        default:
            return [x, aim, y];
    }
};
var location2 = [0, 0, 0];
for (var _a = 0, input_2 = input; _a < input_2.length; _a++) {
    var x = input_2[_a];
    location2 = updateAim(location2, x[0], x[1]);
    console.log(location2);
}
var answer2 = location2[0] * location2[2];
