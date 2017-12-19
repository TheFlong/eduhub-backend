var knex = require('../db/knex')

module.exports = {
    
        addImage,
        addComment,
        addDocument,
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
    var startup_image = req.files.foo;
    var fileName = filename(req.body.fileName);
        
    
    // Use the mv() method to place the file somewhere on your server
    startup_image.mv('documents/' + fileName + '.pdf' , function(err) {
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
            project_projecttype: "addDocument",
            project_author: req.body.project_author
        })
        .then(function(response){
            return knex('Image')
            .transacting(t)
            .insert({
                document_idproject: response[0],
                document_name: fileName,
                document_documentpath: 'documents/' + fileName + '.pdf'


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
    return knex.transaction(function(t){
        return knex('Project')
        .transacting(t)
        .insert({
            project_name: req.body.project_name,
            project_text: req.body.project_text,
            project_karma: 0,
            project_projecttype: "addTermin",
            project_author: req.body.project_author,
            Project_projectid: req.body.Project_projectid,
            project_termin: req.body.project_termin
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
function filename(a){    
    return a + '-' + Date.now()
}
