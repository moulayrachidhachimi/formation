  const _ = require('lodash');
  const Course = require('../models/course');


  const courses = [
                  {id: 1, label: "Laravel", status: true}, 
                  {id: 2, label: "Python", status: false},
                  {id: 3, label: "NodeJS", status: true}
                ]

  exports.getAllCourses =  function getAllCourses(req, res) {
        Course.find().then((courses) => res.send(courses));
    }


 exports.postCourse = function postCourse(req, res) {
        
        const myCourse = new Course({
            label: req.body.label
        })

         myCourse.save().then((course) => res.send(course));
       
    }


exports.putCourse = async function putCourse (req, res) {

        let id = req.params.id;
        let myCourse = await Course.findById(id);

        myCourse.label = req.body.label;
        
        const result = await myCourse.save();
        res.send(result);


    }

exports.getOneCourse = async function getOneCourse(req, res) {
        let id = req.params.id;
        let myCourse = await Course.findById(id);
        res.send(myCourse);
    }

exports.deleteCourse = async function deleteCourse(req, res) {
        let id = req.params.id;
        const result = await Course.findByIdAndDelete(id);
        res.send(result);
    }


exports.changeStatus = async function changeSatus(req, res) {
        let id = +req.params.id;
        let myCourse = await Course.find((course) => course.id === id);

        myCourse.status = !myCourse.status
        const result = await myCourse.save();
        res.send(result)
    }