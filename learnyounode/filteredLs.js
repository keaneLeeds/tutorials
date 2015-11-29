var fs = require('fs');
var dir = process.argv[2];
var filter = process.argv[3];

function callback(err, list) {
    if(err) {
        console.log(err);
    }

    for(var i=0; i<list.length ; i++) {
        var end = list[i].split('.');
        if(end[1] == filter) {
            console.log(list[i]);
        }
    }
}
fs.readdir(dir, callback);
