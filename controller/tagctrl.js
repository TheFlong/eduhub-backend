var knex = require('../db/knex')

module.exports = {
    addOne,
    getProjectsTags
}

/* Tag :  tagid , name
ProjectHasTag: projecthastagid, idtag, idproject */

function addOne(req, res){
    return knex.transaction(function(t){
        return knex('Tag')
        .transacting(t)
        .insert({
            name: req.body.name,
        })
        .then(function(response){
            return knex('ProjectHasTag')
            .transacting(t)
            .insert({
                idproject: req.body.projectid,
                idtag: response[0]
            })
        })
        .then(t.commit)
        .catch(t.rollback)
        .then(function() {
            knex.select().from('ProjectHasTag')
            .then(function(ProjectHasTag) {
                res.send(ProjectHasTag);
            })
        }) 
    });
}
function getProjectsTags(req,res){
    knex
        .select('tagid', 'name').from('Tag')
        .join('ProjectHasTag', 'idtag', 'tagid')
        .where('idproject', req.body.projectid)
        .then(function(Project){
            res.send(Project)
        })     
}