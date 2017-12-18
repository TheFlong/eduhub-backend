var knex = require('../db/knex')

module.exports = {
    
        addImage,
        addComment,
        addTermin
        
    };


    function addImage(req, res){
        var startup_image = req.files.foo;
        var fileName = filename(req.body.fileName);
            
        
        // Use the mv() method to place the file somewhere on your server
        startup_image.mv('images/' + fileName + '.png' , function(err) {
          if(err){
            console.log(err);
          }else{
         console.log("uploaded");
       }
        });
    
    
    
        return knex.transaction(function(t){
            return knex('Project')
            .transacting(t)
            .insert({
                Project_projectid: req.body.Project_projectid,
                project_name: req.body.project_name,
                project_text: req.body.project_text,
                project_karma: 0,
                project_projecttype: "addImage",
                project_author: req.body.project_author
            })
            .then(function(response){
                return knex('Image')
                .transacting(t)
                .insert({
                    image_idproject: response[0],
                    image_name: fileName,
                    image_imagepath: 'images/' + fileName + '.png'
    
    
                })
            })
            .then(t.commit)
            .catch(t.rollback)
            .then(function() {
                knex.select().from('Image')
                .then(function(Image) {
                    res.send(Image);
                })
            })
    
        });
    }
    
    function addDocument(req, res){
        knex('Document').insert({
            document_name: rey.body.document_name,
            document_documentpath: req.body.imagepath,
            document_idproject: req.body.idproject,
        })
        .then(function() {
            knex.select().from('Document')
            .then(function(document) {
                res.send(Document);
            })
        })
    }
    
    function addComment(req, res){
        return knex.transaction(function(t){
            return knex('Project')
            .transacting(t)
            .insert({
                project_name: req.body.project_name,
                project_text: req.body.project_text,
                project_karma: 0,
                project_projecttype: "newComment",
                project_author: req.body.project_author,
                Project_projectid: req.body.Project_projectid
            })
            .then(function(response){
                return knex('UserHasProject')
                .transacting(t)
                .insert({
                    uhp_iduser: req.body.project_author,
                    uhp_idproject: response[0],
    
                })
            })
            .then(t.commit)
            .catch(t.rollback)
            .then(function() {
                knex.select().from('Project')
                .then(function(Project) {
                    res.send(Project);
                })
            })
    
        });
    
    }

function addTermin(req,res){
    
}