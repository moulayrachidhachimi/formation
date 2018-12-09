  const _ = require('lodash');
  const Tag = require('../models/tag');


  exports.getAllTags =  function getAllTags(req, res) {
        Tag.find().then((Tags) => res.send(Tags));
    }


 exports.postTag = function postTag(req, res) {
        
        const myTag = new Tag({
            label: req.body.label
        })

         myTag.save().then((Tag) => res.send(Tag));
       
    }


exports.putTag = async function putTag (req, res) {

        let id = req.params.id;
        let myTag = await Tag.findById(id);

        myTag.label = req.body.label;
       
        
        const result = await myTag.save();
        res.send(result);


    }

exports.getOneTag = async function getOneTag(req, res) {
        let id = req.params.id;
        let myTag = await Tag.findById(id);
        res.send(myTag);
    }

exports.deleteTag = async function deleteTag(req, res) {
        let id = req.params.id;
        const result = await Tag.findByIdAndDelete(id);
        res.send(result);
    }

