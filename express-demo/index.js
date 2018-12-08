const express = require('express');
const mongoose = require('mongoose');

const courseRoute = require('./routes/course');

const app = express();
app.use(express.json())



mongoose.connect('mongodb://localhost/express_demo')
        .then(() => console.log('mongoDB is running'))
        .catch((err) => console.error(err.message))






app.use('/api/courses', courseRoute);


app.listen(3000, () => console.log('server is running on port 3000...'))