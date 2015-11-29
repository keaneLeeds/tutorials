var concat = require("concat-stream");

process.stdin.pipe(concat(function(str) {
    console.log(str.toString().split("").reverse().join(""));
}));
