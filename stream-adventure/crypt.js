var crypto = require("crypto");
var stream = crypto.createDecipher("aes256", process.argv[2].toString());
stream.pipe(process.stdout);
process.stdin.pipe(stream);
