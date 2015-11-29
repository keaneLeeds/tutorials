var fs = require("fs");

var peach = function(obj) {
    console.trace("traced")
    console.dir(obj);
};

var bowser = function(cb) {
    fs.readFile(process.argv[2], {encoding:"utf8"}, cb);
};

var koopa = function(err, file) {
    if(err) console.error("fuck.");
    peach(JSON.parse(file));
}

bowser(koopa);
