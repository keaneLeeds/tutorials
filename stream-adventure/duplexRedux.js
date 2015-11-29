var duplex = require("duplexer");
var through = require("through");

module.exports = function(counter) {
    var list = {};
    var tr = through(function(input) {
        var country = input.country;
        if(!list[country]) {
            list[country] = [];
            list[country].push(1);
        } else {
            list[country]++;
        }
    }, function() {
        counter.setCounts(list);
    });

    var dup = duplex(tr, counter);
    return dup;
}
