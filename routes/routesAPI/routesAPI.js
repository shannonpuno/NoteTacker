
const router = require('express').Router();
const fs = require('fs');




//Import npm uuid to create ids
const {v4 : uuid4} = require('uuid');

//GET/api/notes should read the db.json file and return all saved notes as JSON
const allNotes = fs.readFileSync('./db/db.json', 'utf-8');
if (allNotes) {
    let prevNotes = JSON.parse(allNotes);
    dbFile = prevNotes;
} else {
    dbFile = [];
}

router.get('/api/notes', (req, res) => {
    return res.json(dbFile);
});
//POST /api/notes should recieve a new note to save on the request body,
router.post('/api/notes', (req, res) => {
    //Unique ID from uuid 
    let newUserNoteID = uuid4();

    const newUserNote = {
        id: newUserNoteID,
        title: req.body.title,
        text: req.body.text,
    };
     //add it to the db.json file, then return new note to client
     dbFile.push(newUserNote);
     fs.writeFileSync('./db/db.json', JSON.stringify(dbFile));
     res.json(dbFile);
});


 //Delete Note

 module.exports = router;


