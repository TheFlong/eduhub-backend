var knex = require('../db/knex')

module.exports = {

    newProject,
    addProjectinformation
};

//Projekt wird nahezu leer erzeugt
function newProject(req,res){
    var projectid
    return knex.transaction(function(t){
        return knex('Project')
        .transacting(t)
        .insert({
            project_projecttype: "newProject",
            project_author: req.body.project_author,
            project_activity: req.body.project_activity
        })
        .then(function(response){
            projectid = response[0];
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
            knex.select().from('Project').where('projectid', projectid)
            .then(function(project) {
                res.send(project);
            })
        })

    });
}
//Projektinformationen werden hinzugefügt
function addProjectinformation(req,res){
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
    var projectid
    return knex.transaction(function(t){
        return knex('Project')
        .transacting(t)
        .where('projectid', req.body.projectid)
        .update({
            project_name: req.body.project_name,
            project_text: req.body.project_text,
            project_imagepath: 'images/' + fileName + '.png',
            project_writeRights: req.body.project_writeRights,
            project_statement: req.body.project_statement,
            project_termin: req.body.termin
        })
        .then(t.commit)
        .catch(t.rollback)
        .then(function() {
            knex.select().from('Project').where('projectid', projectid)
            .then(function(project) {
                res.send(project);
            })
        })
    });
}

function filename(a){
        return a + '-' + Date.now()

}
