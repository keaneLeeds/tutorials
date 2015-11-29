var a;
var sum = new Number();
var count = 2;
for(; count < process.argv.length; count++) {
    a = new Number(process.argv[count]);
    
    sum += a;
}

console.log(sum);
