var http = require("http");

var heap = [];

function collect(data) {
    heap.push(data);
}

function finish() {
    var catString = "";
    for(i in heap) {
        catString += heap[i];
    }
    console.log(catString.length);
    console.log(catString);
}

http.get(process.argv[2], function(response) {
    response.setEncoding("utf8");
    response.on("data", function(response) {
        collect(response)
    });
    response.on("error", console.error);
    response.on("end", function() {
        finish();
    })
});
