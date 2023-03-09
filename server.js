
const express = require('express');
const fs = require('fs');
const path = require('path');

const api = require('./routes/apiRoute');
const html = require('./routes/htmlRoute');


// Create express server
const PORT = process.env.port || 3001;

const app = express();

//Middleware for parsing application/json
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);


// Create Listener
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});