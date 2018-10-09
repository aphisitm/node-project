console.log("Starting Function Notes");

const fs = require('fs');

var addNote = (name,lastname) =>{
    console.log("addNote : ");
    var notes = [];
    var note = {
        name,
        lastname
    };

    try{
        var noteString = fs.readFileSync('./json/notes-data.json');
        notes =JSON.parse(noteString);
    }catch(e){
        notes = []
    }
    
    var duplicateNotes = notes.filter((note)=> note.name === name && note.lastname === lastname)
    console.log("duplicateNotes",duplicateNotes)
    if(duplicateNotes && duplicateNotes.length === 0){
        notes.push(note)
        fs.writeFileSync('./json/notes-data.json',JSON.stringify(notes))
    }

};

var getAll = () =>{
    var notes = [] ;
    try{
        var noteString = fs.readFileSync('./json/notes-data.json');
        notes =JSON.parse(noteString);
    }catch(e){
        notes = []
    }

    if(notes && notes.length > 0){
        let index = 0
        notes.forEach( el  => {
            console.log(++index ," Name : ", el.name ,"Lastname : ", el.lastname);
        });
    }else{
        console.log("Data Not Found");
    }
};

var getNote = () =>{
};

var removeNote = () =>{
    try{
        var noteString = fs.readFileSync('./json/notes-data.json');
        notes =JSON.parse(noteString);
    }catch(e){
        notes = []
    }
};


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}
