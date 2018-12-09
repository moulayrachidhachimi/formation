  const _ = require('lodash');
  const bcrypt = require('bcrypt');
  const Author = require('../models/author');


  exports.getAllAuthors =  function getAllAuthors(req, res) {
        Author.find().then((Authors) => res.send(Authors));
    }


 exports.postAuthor = function postAuthor(req, res) {
        
   
        bcrypt.hash(req.body.password, 10)
           .then((myPassword) => {

            const myAuthor = new Author({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: myPassword
                    })

                    myAuthor.save().then((Author) => res.send(Author));

           })

        
       
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


    exports.login = async function login(req, res) {
       
        const myUser = await Author.find({ email: req.body.email })
        
          if(myUser) {
            
            try{
                const result = await bcrypt.compare(req.body.password, myUser.password);
                console.log(result)
            }catch(e) {
                console.log(e)
            }
          
          
          }else {
              res.status(401).json({
                  message: "auth failed!!"
              })
          }
    }

