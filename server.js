
const express = require('express');

const api = require('./routes/routesAPI');
const html = require('./routes/routeHTML');

// Create express server
const PORT = process.env.port || 3001;

const app = express();

//Middleware for parsing application/json
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);
app.use('/', html);

app.use(express.static('public'));
// Create Listener
app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
);