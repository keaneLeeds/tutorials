var express = require("express");
var app = express();
var PORT = process.argv[2];
app.get('/home', function(req, res) {
    res.send("Hello World!")
});
app.listen(PORT);
console.log('Running on http://localhost:'+PORT);
