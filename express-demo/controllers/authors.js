  const _ = require('lodash');
  const Author = require('../models/author');


  exports.getAllAuthors =  function getAllAuthors(req, res) {
        Author.find().then((Authors) => res.send(Authors));
    }


 exports.postAuthor = function postAuthor(req, res) {
        
        const myAuthor = new Author({
            firstName: req.body.firstName,
            lastName: req.body.lastName
        })

         myAuthor.save().then((Author) => res.send(Author));
       
    }


exports.putAuthor = async function putAuthor (req, res) {

        let id = req.params.id;
        let myAuthor = await Author.findById(id);

        myAuthor.firstName = req.body.firstName;
        myAuthor.lastName = req.body.lastName;
        
        const result = await myAuthor.save();
        res.send(result);


    }

exports.getOneAuthor = async function getOneAuthor(req, res) {
        let id = req.params.id;
        let myAuthor = await Author.findById(id);
        res.send(myAuthor);
    }

exports.deleteAuthor = async function deleteAuthor(req, res) {
        let id = req.params.id;
        const result = await Author.findByIdAndDelete(id);
        res.send(result);
    }

