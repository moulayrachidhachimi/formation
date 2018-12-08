    const express = require('express');
    const AuthorController = require('./../controllers/authors');

    const route = express.Router();

    route.get('/', AuthorController.getAllAuthors);

    route.post('/', AuthorController.postAuthor)

    route.put('/:id', AuthorController.putAuthor);

    route.get('/:id', AuthorController.getOneAuthor)

    route.delete('/:id', AuthorController.deleteAuthor)
   

    module.exports = route;