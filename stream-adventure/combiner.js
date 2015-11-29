var combine = require("stream-combiner");
var split = require("split");
var through = require("through");
var zlib = require("zlib").createGzip();

module.exports = function(input) {
    var library;
    var str; 
    var tr = through(function(line) {
        if(line) {
            str = JSON.parse(line);
        } else {
            return;
        }

        if(str.type == "genre") {
            if(library) {
                this.queue(JSON.stringify(library) + "\n");
            }

            library = {"name" : str.name, "books" : []};
        } else if(str.type == "book") {       
            library.books.push(str.name);
        } else {
            console.log('wtf');
        }
    }, function() {
        if(library) {
            this.queue(JSON.stringify(library) + "\n");
        }
        this.queue(null);
    });

    return combine(split(), tr, zlib);
};

