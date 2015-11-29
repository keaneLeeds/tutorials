var bindings = require("bindings");
var addon = bindings("myaddon");

var len = addon.length(process.argv[2]);
console.log(len);
//addon.print(process.argv[2]);
