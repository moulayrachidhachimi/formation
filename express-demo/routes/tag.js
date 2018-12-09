    const express = require('express');
    const TagController = require('./../controllers/tags');

    const route = express.Router();

    route.get('/', TagController.getAllTags);

    route.post('/', TagController.postTag)

    route.put('/:id', TagController.putTag);

    route.get('/:id', TagController.getOneTag)

    route.delete('/:id', TagController.deleteTag)
   

    module.exports = route;