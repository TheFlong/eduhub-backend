var knex = require('../db/knex')

module.exports = {
    addOne,
    getProjectsResources
}


function addOne(req, res){
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
                phr_idproject: req.body.phr_idproject,
                phr_idresource: response[0]
            })
        })
        .then(t.commit)
        .catch(t.rollback)
        .then(function() {
            knex.select().from('ProjectHasResource')
            .then(function(ProjectHasResource) {
                res.send(ProjectHasResource);
            })
        }) 
    });
}
function getProjectsResources(req,res){
    knex
        .select('resourceid', 'resource_name').from('Resource')
            .join('ProjectHasResource', 'phr_idresource', 'resourceid')
            .where('phr_idproject', req.params.projectid)
        .then(function(Resource){
            res.send(Resource)
        })

}