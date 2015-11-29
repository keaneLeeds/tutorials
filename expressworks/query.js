var express = require("express");
var app = express();

app.get("/search", function(req, res) {
    var ary = req.query;
    ary = parse(ary);
    res.send(ary);
});

app.listen(process.argv[2]);
