const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs');

const app = express();

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
// Router
app.get('/', require('./routes/index'));

//app.get('/', require('./routes/users'));

app.get('/', require('./routes/users'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server statered on port ${PORT}`));