const lodash = require('lodash')

var command = process.argv[2];
var num = [3,5,6,7];
console.log("command : ", command );

if(command === 'add'){
    var commandnum = parseInt(process.argv[3]);
    var check = lodash.isInteger(commandnum);
    if(check){
        num.push(commandnum)
    }
    console.log(" Adding new note : " ,commandnum);
    console.log(" Number : " ,num);
}else if(command === 'remove'){
    var commandnum = parseInt(process.argv[3]);
    var check = lodash.isInteger(commandnum);
    if(check){
        for (let index = num.length - 1; index >= 0; index--) {
            if(num[index] === commandnum){
                num.splice(index,1)
            }
        }
    }
    console.log(" Remove note ",  commandnum );
    console.log(" Number : " ,num);
}else if(command === 'list'){
    console.log(" List ",  num );
}else{
    console.log(" Command not recognized " );
}