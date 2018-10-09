// var obj = {
//     name : 'aphisit'
// }
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var obj = '{"name" : "aphisit" , "age" : 25 }'
// console.log(typeof obj);
// console.log(obj);
// var stringObj = JSON.parse(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

const fs = require('fs')

var obj = {
    name : 'aphisit jankiaw',
    job : 'programmer'
}
var stringObj = JSON.stringify(obj);
fs.writeFileSync('./json/note.json',stringObj)


var noteString =fs.readFileSync('./json/note.json');
var note = JSON.parse(noteString)
console.log(typeof note);
console.log(note.job);