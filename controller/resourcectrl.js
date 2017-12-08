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
            name: req.body.name,
        })
        .then(function(response){
            return knex('ProjectHasResource')
            .transacting(t)
            .insert({
                idproject: req.body.projectid,
                idresource: response[0]
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
        .select('resourceid', 'name').from('Resource')
            .join('ProjectHasResource', 'idresource', 'resourceid')
            .where('idproject', req.params.projectid)
        .then(function(Tag){
            res.send(Tag)
        })

}