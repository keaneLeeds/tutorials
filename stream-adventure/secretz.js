var concat = require("concat-stream");
var crypto = require("crypto");
var decipher = crypto.createDecipher(process.argv[2].toString(), process.argv[3].toString());
var unzip = require("zlib").createGunzip();
var parser = require("tar").Parse();
var through = require("through");
var tr = through(function(stream) {
        this.queue(stream);
    }, function() {
        this.queue(null);
    });

parser.on("entry", function(e) {
    if(e.type === "File") {
        var hex = crypto.createHash("md5", {encoding:"hex"});
        e.pipe(hex).pipe(concat(function(hash) {
            console.log(hash + " " + e.path);
        }));
    }
});

process.stdin
.pipe(decipher)
.pipe(unzip)
.pipe(parser);

