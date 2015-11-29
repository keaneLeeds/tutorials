var through = require("through");
var split = require("split");
var counter = 0;

function writeUp(buffer) {
    return buffer.toString().toUpperCase();
}

function writeDown(buffer) {
    return buffer.toString().toLowerCase();
}

function end() {
    this.queue(null);
}

var tUp = through(writeUp, end);
var tDown = through(writeDown, end);

process.stdin.pipe(split()).pipe(through(function(line) {
    counter++;
    if(counter%2 == 1) {
        console.log(writeDown(line));
    } else {
        console.log(writeUp(line));
    }
}));

