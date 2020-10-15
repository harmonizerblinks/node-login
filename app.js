const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs');
const path = require('path');

const app = express();

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
// Router

require('./routes/index')(app);
require('./routes/users')(app);


// Handler for 404 - Resource Not Found
app.get('/**', (req, res, next) => {
    // res.status(404).send('data requests are not yet supported');
    res.status(404).send({ message: 'We think you are lost!' });
});

// Handler for Error 500
app.use('/**', (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send({ message: 'Internal Server error! :- ' + err.message });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server statered on port ${PORT}`));