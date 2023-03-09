
const path = require('path');
const router = require('express').Router();

// GET /notes should return notes.html file


router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// GET * should return index.html file

router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;





