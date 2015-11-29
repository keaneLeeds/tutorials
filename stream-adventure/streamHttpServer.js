var through = require("through");
var http = require("http");

var server = http.createServer(function(req, res) {
    if(req.method == "POST") {
        req.pipe(through(function(buffer) {
            this.queue(buffer.toString().toUpperCase());
        })).pipe(res);
    }
    res.end();
});
server.listen(parseInt(process.argv[2]));
