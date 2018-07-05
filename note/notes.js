console.log('Starting notes.js');
// console.log(module)

//only export is useful


var addNote =(title, body) =>{
  console.log("Add note", title, body);
}

var getAll =()=>{
  console.log('Getting all notes')
}

var getNote=(title)=>{
  console.log('Getting note', title);

}

var removeNote =(title) =>{
  console.log('Removing note',title)
}

module.exports={
  addNote,
  getAll,
  getNote,
  removeNote

}
