
const router = require('express').Router();
const fs = require('fs');

const { db } = require('../../db/db.json');

//Import npm uuid to create ids
const {v4 : uuid4} = require('uuid');

//GET/api/notes should read the db.json file and return all saved notes as JSON
const allNotes = fs.readFileSync('./db/db.json', 'utf-8');
if (allNotes) {
    let prevNotes = JSON.parse(allNotes);
    notes = prevNotes;
} else {
    notes = [];
}

router.get('/notes', (req, res) => {
    return res.json(notes);
});
//POST /api/notes should recieve a new note to save on the request body,
router.post('/notes', (req, res) => {
    //Unique ID from uuid 
    let noteId = uuid4();

    let newNote = {
        id: noteId,
        title: req.body.title,
        text: req.body.text,
    };
     //add it to the db.json file, then return new note to client
     notes.push(newNote);
     res.json(newNote);
     fs.writeFileSync('./db/db.json', JSON.stringify(notes));

});


 //Delete Note

 module.exports = router;


