var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);

var strArry = file.toString().split('\n');

var numLines = strArry.length -1;

console.log(numLines);
