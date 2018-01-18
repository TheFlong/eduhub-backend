var knex = require('../db/knex')

module.exports = {
    addRes1,
    addRes2,
    getProjectsResources
}
//Prüfen ob Ressource schon vorhanden
function addRes1(req, res, next){
    knex('Resource')
        .select('resourceid as resourceid')
        .where('resource_name', req.body.resource_name)
        .then(function(response1){
            response1 : response1[0]; 
            req.resourceid = response1[0];  
            next();
        }) 

}
//Hinzufügen der Ressource zum Projekt
function addRes2(req,res){
    if(req.resourceid != null){
        knex('ProjectHasResource')
            .insert({
                phr_idresource: req.resourceid.resourceid,
                phr_idproject: req.body.projectid
            })
            .then(function(response){
                knex.select()
                .from('Resource')
                .where('resource_name', req.body.resource_name)
                .then(function(project) {
                    res.send(project);
                })
            })
    }
    else {
        return knex.transaction(function(t){
            return knex('Resource')
                .transacting(t)
                .insert({
                    resource_name: req.body.resource_name,
                })
                .then(function(response){
                    return knex('ProjectHasResource')
                        .transacting(t)
                        .insert({
                            phr_idresource: response[0],
                            phr_idproject: req.body.projectid
                        })

                })
                .then(t.commit)
                .catch(t.rollback)
                .then(function(response){
                    knex.select()
                    .from('Resource')
                    .where('resource_name', req.body.resource_name)
                    .then(function(project) {
                        res.send(project);
                    })
                })
        })
    }
}

//Abfrage aller verlinkten Ressource
function getProjectsResources(req,res){
    knex
        .select('resourceid', 'resource_name').from('Resource')
            .join('ProjectHasResource', 'phr_idresource', 'resourceid')
            .where('phr_idproject', req.params.projectid)
        .then(function(Resource){
            res.send(Resource)
        })

}