module.exports = filteredLs;

function filteredLs(directory, filter, callback) {
    //console.log(directory.toString());
    //console.log(filter.toString());
    //console.log(callback.toString());
    var fs = require('fs');
    
    function cb(err, list) {
        if(err)
            return callback(err);
        var retList = [];
        for(var i=0; i<list.length ; i++) {
            var end = list[i].split('.');
            if(end[1] == filter) {
                //console.log(list[i]);
                retList.push(list[i]);
            }
        }
        return callback(null, retList);
    }
    fs.readdir(directory, cb);
}
