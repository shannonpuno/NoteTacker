
const fs = require('fs');
const path = require('path');


//Import npm uuid to create ids
const {v4 : uuid4} = require('uuid');

//GET/api/notes should read the db.json file and return all saved notes as JSON
module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        let dbFile = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
        res.json(dbFile);
    });
//POST /api/notes should recieve a new note to save on the request body,
    app.post('/api/notes', (req, res) => {
        const newUserNote = req.body;

        //Unique ID from uuid 
        newUserNote.id = uuid4();

        let dbFile =  JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));

        //add it to the db.json file, then return new note to client
        dbFile.push(newUserNote);
        
        fs.writeFileSync('./db/db.json', JSON.stringify(dbFile));

        res.json(dbFile);
    });

    //Delete Note

};

