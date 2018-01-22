var knex = require('../db/knex')


module.exports = {
    //Abfrage nach Rechtetyp
    amIAuthor,
    amIEditor,
    
    //Editor hinzufügen
    addEditor1,
    addEditorEvent1,
    addEditorEvent2,

    //Editor entfernen
    deleteEditor1,
    deleteEditorEvent1,
    deleteEditorEvent2

};
//Abfrage ob Nutzer Autor ist mit dem Rückgabewert 0 für nein und 1 für ja
function amIAuthor(req, res){
    knex('UserHasProject')
        .count('uhp_idproject as CNT')
        .where(function (){ 
        this.where('uhp_idproject', req.params.uhp_idproject)
                .andWhere('uhp_iduser', req.params.uhp_iduser)
                .andWhere('uhp_userrole', 'author')
        })
        .then(function(response){
            res.send({
                response: response[0].CNT
            });
        })
}
//Abfrage ob Nutzer Editor ist mit dem Rückgabewert 0 für nein und 1 für ja
function amIEditor(req, res){
    knex('UserHasProject')
        .count('uhp_idproject as CNT')
        .where(function (){ 
        this.where('uhp_idproject', req.params.uhp_idproject)
                .andWhere('uhp_iduser', req.params.uhp_iduser)
                .andWhere('uhp_userrole', 'editor')
        })
        .then(function(response){
            res.send({
                response: response[0].CNT
            });
        })
}

//Updaten der verknüfungstabelle des Nutzer der als Editor hinzugefügt wird
function addEditor1 (req,res,next){
    knex('UserHasProject')
    .where('uhp_iduser',req.body.uhp_iduser)
    .andWhere('uhp_idproject', req.body.uhp_idproject)
    .andWhere('uhp_userrole',"member")
    .update({
        uhp_userrole: "editor"
    }).then(function(){
         next();
    })
}
//Auslesen von Vorname, Nachname und Projektname um Editorevent zu erzeugen
function addEditorEvent1(req,res,next){
    knex.select('surname as temp1', 'forename as temp2').from('User').where('userid', req.body.uhp_iduser)
        .then(function(response, response1){
            response : response[0].temp1;
            req.name = response[0];
        })   
       .then(function(){
            knex.select('project_name as temp3').from('Project').where('projectid',req.body.uhp_idproject)
           .then(function(response1){
            response1 : response1[0].temp3; 
            req.projectname = response1[0];  
            next();
        }) 
    })  
}
//Editorevent als Projekt ablegen
function addEditorEvent2(req,res){
    var projectid = 0;
    return knex.transaction(function(t){
        return knex('Project')
        .transacting(t)
        .insert({
            project_name: req.name.temp2 + ' ' + req.name.temp1 + ' ' + 'wurde dem Projekt' + ' "'+ req.projectname.temp3 + '" ' + 'als Editor hinzugefügt!',
            project_text: "",
            project_karma: 0,
            project_projecttype: "beeditor",
            project_author: req.body.authorid,
            project_membercount: 2,
            Project_projectid: req.body.uhp_idproject
        })
        .then(function(response){
            projectid = response[0]
            return knex('UserHasProject')
            .transacting(t)
            .insert({
                uhp_iduser: req.body.authorid,
                uhp_idproject: projectid,
                uhp_userrole: "author"
            })
        })
        .then(function(response){
            return knex('UserHasProject')
            .transacting(t)
            .insert({
                uhp_iduser: req.body.uhp_iduser,
                uhp_idproject: projectid,
                uhp_userrole: "member"
                
            })
        })
        .then(t.commit)
        .catch(t.rollback)
        .then(function(response) {
            knex.select().from('UserHasProject').where('uhp_iduser', req.body.authorid).andWhere('uhp_userrole',  "author")
            .then(function(User) {
                res.send(User);
            })
        })

    });
}
//Updaten der verknüfungstabelle des Nutzer der als Editor entfernt wird
function deleteEditor1 (req,res,next){
    knex('UserHasProject')
    .where('uhp_iduser',req.body.uhp_iduser)
    .andWhere('uhp_idproject', req.body.uhp_idproject)
    .andWhere('uhp_userrole',"editor")
    .update({
        uhp_userrole: "member"
    }).then(function(){
         next();
    })
}

//Auslesen von Vorname, Nachname und Projektname um Editorevent zu erzeugen
function deleteEditorEvent1(req,res,next){
    knex.select('surname as temp1', 'forename as temp2').from('User').where('userid', req.body.uhp_iduser)
        .then(function(response, response1){
            response : response[0].temp1;
            req.name = response[0];
        })   
       .then(function(){
            knex.select('project_name as temp3').from('Project').where('projectid',req.body.uhp_idproject)
           .then(function(response1){
            response1 : response1[0].temp3; 
            req.projectname = response1[0];  
            next();
        }) 
    })  
}
//Editorevent als Projekt ablegen
function deleteEditorEvent2(req,res){
    var projectid = 0;
    return knex.transaction(function(t){
        return knex('Project')
        .transacting(t)
        .insert({
            project_name: req.name.temp2 + ' ' + req.name.temp1 + ' ' + 'ist nicht mehr Editor bei dem Projekt' + ' "'+ req.projectname.temp3 + '"',
            project_text: "",
            project_karma: 0,
            project_projecttype: "deleteeditor",
            project_author: req.body.authorid,
            project_membercount: 2,
            Project_projectid: req.body.uhp_idproject
        })
        .then(function(response){
            projectid = response[0]
            return knex('UserHasProject')
                .transacting(t)
                .insert({
                    uhp_iduser: req.body.authorid,
                    uhp_idproject: projectid,
                    uhp_userrole: "author"
                })
        })
        .then(function(response){
            if(req.body.authorid != req.body.uhp_iduser){
                return knex('UserHasProject')
                .transacting(t)
                .insert({
                    uhp_iduser: req.body.uhp_iduser,
                    uhp_idproject: projectid,
                    uhp_userrole: "member"
                    
                 })
            }
        })
        .then(t.commit)
        .catch(t.rollback)
        .then(function(response) {
            knex.select().from('UserHasProject').where('uhp_iduser', req.body.authorid).andWhere('uhp_userrole',  "author")
            .then(function(User) {
                res.send(User);
            })
        })

    });
}
