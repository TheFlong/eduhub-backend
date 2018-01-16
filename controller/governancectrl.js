var knex = require('../db/knex')


module.exports = {
    amIAuthor,
    amIEditor,
    
    addEditor1,
    addEditorEvent1,
    addEditorEvent2

};

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


function addEditor1 (req,res,next){
    knex('UserHasProject')
    .insert({
        uhp_iduser: req.body.uhp_iduser,
        uhp_idproject: req.body.uhp_idproject,
        uhp_userrole: "editor"
    }).then(function(){
         req.projectid = req.body.uhp_idproject;
         next();
    })
}

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
            console.log(projectid)
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
function removeEditor(req,res){

}