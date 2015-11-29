var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res) {
    req.setEncoding("utf8");
    res.writeHead(200, { "Content-Type" : "application/json" });
    var reqUrl = url.parse(req.url, true);
    //console.log(reqUrl);
    if(reqUrl.pathname == "/api/parsetime") {
        var d = new Date(reqUrl.query.iso);
        var e = {"hour":d.getHours(), "minute":d.getMinutes(), "second":d.getSeconds()};
        res.write(JSON.stringify(e));
        res.end();
    } else if(reqUrl.pathname == "/api/unixtime") {
        var d = new Date(reqUrl.query.iso).getTime();
        var e = {"unixtime":d};
        res.write(JSON.stringify(e));
        res.end();
    }
});
server.listen(process.argv[2]);
