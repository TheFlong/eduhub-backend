var knex = require('../db/knex')

module.exports = {
    
        addImage,
        addComment,
        addDocument,
        addTermin,

        deleteImage,
        /* deleteComment,
        deleteDocument,
        deleteTermin */
        
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
                src: 'http://backend-edu.azurewebsites.net/images/' + fileName + '.png',
                thumbnail: 'http://backend-edu.azurewebsites.net/images/' + fileName + '.png'
            })
        })
        .then(function(response){
            return knex('Image')
                .transacting(t)
                .select('image_idproject as temp1')
                .where('imageid',response[0])
        })
        .then(function(response){ 
            return knex('UserHasProject')
                .transacting(t)
                .insert({
                    uhp_iduser: req.body.project_author,
                    uhp_idproject: response[0].temp1,
                    uhp_userrole: "author"
            })
        })
        .then(t.commit)
        .catch(t.rollback)
        .then(function() {
            knex.select().from('UserHasProject')
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
            return knex('Document')
            .transacting(t)
            .insert({
                document_idproject: response[0],
                document_name: fileName,
                document_documentpath: 'documents/' + fileName + '.pdf'
            })
        })
        .then(function(response){
            return knex('Document')
                .transacting(t)
                .select('document_idproject as temp1')
                .where('documentid',response[0])
        })
        .then(function(response){ 
            return knex('UserHasProject')
                .transacting(t)
                .insert({
                    uhp_iduser: req.body.project_author,
                    uhp_idproject: response[0].temp1,
                    uhp_userrole: "author"
            })
        })
        .then(t.commit)
        .catch(t.rollback)
        .then(function() {
            knex.select().from('Document')
            .then(function(Document) {
                res.send(Document);
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
                uhp_userrole: "author"

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
                uhp_userrole: "author"

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

function deleteImage(req,res){
    
}


function filename(a){    
    return a + '-' + Date.now()
}
