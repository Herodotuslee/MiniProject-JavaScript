// var personString ='{"name":"Andrew","age":25}'
// var person =JSON.parse(personString);
//
// console.log(typeof person)
// console.log(person);


const fs = require('fs');

var originalNote ={
  title:'Some title',
  body:"Some body"
};
//orihinalNoteString

var originalNoteString=JSON.stringify(originalNote);
// to string create a json
fs.writeFileSync('notes.json',originalNoteString);
// write to notes.json file
var noteString=fs.readFileSync('notes.json');
//to save  to read

var note=JSON.parse(noteString);
// to object
console.log(typeof note)
console.log(note.title);
