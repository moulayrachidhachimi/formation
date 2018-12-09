  const _ = require('lodash');
  const Course = require('../models/course');
  const Joi = require('joi');


  exports.getAllCourses =  function getAllCourses(req, res) {
        Course.find()
        .populate('author')
        .populate('tags')
        .sort({label: 1})
        .then((myCourses) => res.send(myCourses));
    }


 exports.postCourse = function postCourse(req, res) {

       const courseValidate = {
            label: Joi.string().alphanum().required().min(3).max(20),
            price: Joi.number().integer().required(),
            author: Joi.required(),
            tags: Joi.required()
        }

        const { error } = Joi.validate(req.body, courseValidate);


        if(error) {
            return res.status(400).send(error.details[0].message)
        }
       
        const myCourse = new Course({
            label: req.body.label,
            price: req.body.price,
            tags: req.body.tags,
            author: req.body.author
        })

         myCourse.save()
           .then((course) => res.send(course))
           .catch((err) => res.send(err.message));
       
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