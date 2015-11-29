var trumpet = require("trumpet");
var tr = trumpet();
process.stdin.pipe(tr).pipe(process.stdout);
var stream = tr.selectAll(".loud").createStream();
stream.on("data", function(a) {
    var b = a.toString().toUpperCase();
    stream.end(b);
});

