
const path = require('path');

// GET /notes should return notes.html file
module.exports = (app) => {

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
        
    });


// GET * should return index.html file

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
    
    });


};




