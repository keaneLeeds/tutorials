var level = require("level");
var db = level(process.argv[2]);
var fucker = (function() {
    var stuff = [];

    return {
        addStuff: function(stf) {
            stuff.push(stf);
        },
        listStuff: function() {
            return stuff;
        }
    }
})()

function getX(key) {
    function pushDat(key) {
        //console.log(key);
        fucker.addStuff(key);
        //console.log(fucker);
    }

    //console.log(key);
    db.get(key, function(err, value) {
        if(err) {
            if(!err.notFound) throw err;
        } else {
            (function(keyz) {
                //console.log(value)
                var goddamnit = {'key' : keyz.replace('key', ''), 'value' : value};
                //console.log(goddamnit);
                pushDat(goddamnit);
                //console.log(key + "=" + value);
            })(key)
        }
    });
}



function loop() {
    for(var i = 0; i<101; i++) {
        (function(index) {
            var key = "key"+i;
            getX(key);
        })(i)
    }
    console.log(fucker.listStuff());
    //callBack();
}

function callBack() {
    //console.log(fucker);
    //fucker.sort();
    //for(var i = 0; i<fucker.length; i++) {
        //console.log(fucker[i].key + "=" + fucker[i].value);
    //}
}

loop();
