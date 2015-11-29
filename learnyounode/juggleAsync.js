var http = require("http");

var heap = [[],[],[]];
var done = [undefined, undefined, undefined];

function collect(data, number) {
    heap[number].push(data);
}

function finish(number) {
    var catString = "";

    for(i in heap[number]) {
        catString += heap[number][i];
    }
    done[number] = catString;
    checkAllFinished();
}

function checkAllFinished() {
    var isDone = true;
    for(var i = 0; i < 3; i++) {
        if(!done[i]) {
            isDone = false;
        }
    }

    if(isDone) {
        for(var j = 0; j < 3; j++) {
            console.log(done[j]);
        }
    }
}

function resp(response, number) {
    response.setEncoding("utf8");
    response.on("data", function(response) {
        collect(response, number);
    });
    response.on("error", console.error);
    response.on("end", function() {
        finish(number);
    }); 
}

function makeHttp(i) {
    http.get(process.argv[i+2], function(response) {
        resp(response, i);
    });
}

for(var i = 0; i < 3; i++) {
    makeHttp(i);
}
