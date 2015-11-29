var http = require("http");
var fs = require("fs");

function capitalize(str) {
    return str.toUpperCase();
}

var server = http.createServer(function(req, res) {
    req.setEncoding("utf8");
    req.on("data", function(chunk) {
        var capChunk = capitalize(chunk.toString());
        res.write(capChunk);
    });
    req.on("end", function() {
        req.end();
    });
})
server.listen(process.argv[2]);
