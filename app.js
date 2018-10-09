// console.log("Starting app.");

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const lodash = require('lodash')
const functionNotes = require('./function-notes');




var command = process.argv[2];

if(command == "add"){

    var name = process.argv[3];
    var lastname = process.argv[4];
    if(name && lastname){        
        functionNotes.addNote( name , lastname ); 
    }

}else if (command == "get"){    

    functionNotes.getAll(); 

}else if (command == "del"){    

    functionNotes.getAll(); 

}else{    

    

}