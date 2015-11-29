var net = require("net");

function zeroFill(x) {
    return (x < 10 ? "0" : "")+x;
}
var server = net.createServer(function(socket) {
    var date = new Date();
    var yr = date.getFullYear();
    var mo = date.getMonth();
    mo = zeroFill(mo+1);
    var day = zeroFill(date.getDate());
    var hr = zeroFill(date.getHours());
    var minutes = zeroFill(date.getMinutes());
    var dateTime = yr+"-"+mo+"-"+day+" "+hr+":"+minutes+"\n";
    socket.end(dateTime);
});
server.listen(process.argv[2]);
