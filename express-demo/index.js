const express = require('express');
const mongoose = require('mongoose');
const pug = require('pug');
const cors = require('cors'); 

const courseRoute = require('./routes/course');
const authorRoute = require('./routes/author');
const tagRoute = require('./routes/tag');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static('public'));


app.set('view engine', 'pug');
app.set('views', './views');


mongoose.connect('mongodb://localhost/express_demo')
        .then(() => console.log('mongoDB is running'))
        .catch((err) => console.error(err.message))





app.use('/api/courses', courseRoute);
app.use('/api/authors', authorRoute);
app.use('/api/tags', tagRoute);

const port = 3002;
app.listen(3002, () => console.log(`server is running on port ${port} ...`))