console.log("starting app.js , Hi Albert~yo")

const fs=require('fs');
//fs-> module fs is from node.js document
// const os=require('os');
// for system , module  in node

const yargs= require('yargs')

const notes= require('./notes.js');

const argv=yargs.argv;

//just right here

console.log('Process',process.argv);
console.log('Yargs',argv)
//comand line arguement list
// var command = process.argv[2];
var command =argv._[0]
console.log('Command:', command);

//
if(command ==="add"){
  console.log("Adding new note");
  notes.addNote(argv.title,argv.body);

} else if (command ==='list'){
  // console.log("list all notes")
  notes.getAll()
} else if(command==='read'){
  // console.log('reading note')
  notes.getNote(argv.title)
} else if(command==='remove'){
  // console.log('remove')
  notes.removeNote(argv.title);

}else{
    console.log("can not recognized");
  }


// console.log("Rresult :" , notes.add(9,-2));


// // var res =notes.addNote();
// //
// // console.log(res)
// // var user = os.userInfo();
// //
// // // console.log(user)x
// // // store
// // fs.appendFileSync("greeting.txt",`Hello ! ${user.username}!`)
// //insert a js  only for ES6
//
// //grrate a new file
// const _=require('lodash');

// const notes= require('./notes.js')
