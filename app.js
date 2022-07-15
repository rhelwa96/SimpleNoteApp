const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command:'add',
    describe: 'adding notes',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe: 'Note body',
            demandOption: false,
            type:'string'
        }
    },
    handler(argv)
    {
        //console.log('Adding Notess!',argv)
        notes.addNote(argv.title,argv.body)
        // console.log('Title: '+argv.title);
        // console.log('Body: '+argv.body)
    }
    
})
// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe :"Note title",
            demandOption:true,
            type:'string'
    }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe: 'list all notes',
    handler(argv){
        notes.listNote()
    }
})

yargs.command({
    command:'read',
    describe: 'readnote',
    builder:{
        title: {
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
/*
// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})



// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})
*/
yargs.parse ()

