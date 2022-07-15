const fs =require('fs')
const chlk =require('chalk')
const getNotes = function () {
    return 'Your notes...'
}
const loadNote = () => {
    try {
        const buffer= fs.readFileSync('notes.json')
        const dataJSON= buffer.toString()
        return JSON.parse(dataJSON)
        
    }
    catch{
        return []
    }
    
}

const saveNote = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)
   
}

const readNote = (title) => {
    const notes=loadNote()

    const searchNote = notes.find((note) => note.title===title )
 //   ((note)=> note.title === title)
//console.log(title)
    if(searchNote)
    {
        console.log(chlk.inverse(searchNote.title))
        console.log(searchNote.body)
    } else {
        console.log(chlk.red.inverse("No note found?"))
    }


}

const listNote = () => {
    const notes= loadNote()

    console.log(chlk.inverse ('Your notes'))

    notes.forEach(n => {
        console.log(n.title)
    });
}

const addNote = (title,body) => {
 const notes= loadNote()
 const duplicateNote = notes.find((note)=> note.title === title)
    if(!duplicateNote)
    {
        notes.push({
            'title':title,
            'body':body
        })
        saveNote(notes)
        console.log(chlk.green.inverse("Note saved!"))
    } else {
        console.log(chlk.red.inverse("Note taken!"))
    }
}

const removeNote = (title) => {
    // console.log(title)
    const notes= loadNote()
   
    const nonmatchNote= notes.filter((note) => note.title !== title)
    if(notes.length > nonmatchNote.length){
        console.log(chlk.green.inverse("Note Removed!"))
        saveNote(nonmatchNote)
       
    } else {
        console.log(chlk.red.inverse("No Note Found!"))
    }
   

}

module.exports = {
    getNotes: getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote
}