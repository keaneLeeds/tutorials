var cproc = require("child_process");
var duplex = require("duplexer");

module.exports = function(cmd, args) {
    var kid = cproc.spawn(cmd, args);
    var dup = duplex(kid.stdin, kid.stdout);
    return dup;
};
