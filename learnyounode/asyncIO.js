var fs = require('fs');
function callback(err, list) {
    if(err) {
        console.log(err());
    }
    console.log(data.toString().split('\n').length -1);
}

var fileNum = fs.readFile(process.argv[2], callback);

