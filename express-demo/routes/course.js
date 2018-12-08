    const express = require('express');
    const CourseController = require('./../controllers/courses');

    const route = express.Router();

    route.get('/', CourseController.getAllCourses);

    route.post('/', CourseController.postCourse)

    route.put('/:id', CourseController.putCourse);

    route.get('/:id', CourseController.getOneCourse)

    route.delete('/:id', CourseController.deleteCourse)
   
    route.put('/:id/status', CourseController.changeStatus)


    module.exports = route;