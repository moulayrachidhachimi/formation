const express = require('express');
const _ = require('lodash');
const mongoose = require('mongoose');
const app = express();


app.use(express.json())



mongoose.connect('mongodb://localhost/express_demo')
        .then(() => console.log('mongoDB is running'))
        .catch((err) => console.error(err.message))


const courseSchema = new mongoose.Schema({
    label: String,
    status: Boolean
});

const Course = mongoose.model('Course', courseSchema);


const courses = [
                  {id: 1, label: "Laravel", status: true}, 
                  {id: 2, label: "Python", status: false},
                  {id: 3, label: "NodeJS", status: true}
                ]

    app.get('/api/courses', async (req, res) => {
        const courses = await Course.find();
        res.send(courses);
    })


    app.post('/api/courses', async (req, res) => {
        
        const myCourse = new Course({
            label: req.body.label
        })

        const result = await myCourse.save();
        res.send(result);
    })


    app.put('/api.courses/:id', async (req, res) => {

        let id = req.params.id;
        let myCourse = await Course.findById(id);

        myCourse.label = req.body.label;
        
        const result = await myCourse.save();
        res.send(result);


    });

    app.get('/api/courses/:id', async (req, res) => {
        let id = req.params.id;
        let myCourse = await Course.findById(id);
        res.send(myCourse);
    })

    app.delete('/api/courses/:id', async (req, res) => {
        let id = req.params.id;
        const result = await Course.findByIdAndDelete(id);
        res.send(result);
    })

   

    app.put('/api/courses/:id/status', (req, res) => {
        let id = +req.params.id;
        let myCourse = courses.find((course) => course.id === id);

        myCourse.status = !myCourse.status
        res.send(courses)
    })

app.listen(3000, () => console.log('server is running on port 3000...'))