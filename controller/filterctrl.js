var knex = require('../db/knex')
module.exports = {
    
    getUploadEvents,
    getTerminEvents,
    getCommentEvents,
    getMemberEvents

};
//Gibt alle Reaktionen auf ein Projekt aus mit dem Typ "addDocument" oder "addImage"
function getUploadEvents(req,res){
    knex('Project')
        .select('*')
        .where('Project_projectid', req.params.projectid)
        .andWhere(function(){ this.where('project_projecttype', "addDocument").orWhere('project_projecttype', "addImage")})
        .orderBy('project_created_at', 'desc')
        .then(function(response){
            res.send(response);
        })
}
//Gibt alle Reaktionen auf ein Projekt aus mit dem Typ "addTermin"
function getTerminEvents(req,res){
    knex('Project')
    .select('*')
    .where('Project_projectid', req.params.projectid)
    .andWhere('project_projecttype', "addTermin")
    .orderBy('project_created_at', 'desc')
    .then(function(response){
        res.send(response);
    })
}
//Gibt alle Reaktionen auf ein Projekt aus mit dem Typ "newComment"
function getCommentEvents(req,res){
    knex('Project')
    .select('*')
    .where('Project_projectid', req.params.projectid)
    .andWhere('project_projecttype', "newComment")
    .orderBy('project_created_at', 'desc')
    .then(function(response){
        res.send(response);
    })
}
//Gibt alle Reaktionen auf ein Projekt aus mit dem Typ "bemember" oder "cancelmembership"
function getMemberEvents(req,res){
    knex('Project')
    .select('*')
    .where('Project_projectid', req.params.projectid)
    .andWhere(function(){ this.where('project_projecttype', "bemember").orWhere('project_projecttype', "cancelmembership")})
    .orderBy('project_created_at', 'desc')
    .then(function(response){
        res.send(response);
    })
}