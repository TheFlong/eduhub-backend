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
            tag_name: req.body.tag_name,
        })
        .then(function(response){
            return knex('ProjectHasTag')
            .transacting(t)
            .insert({
                pht_idproject: req.body.pht_idproject,
                pht_idtag: response[0]
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
        .select('tagid', 'tag_name').from('Tag')
        .join('ProjectHasTag', 'pht_idtag', 'tagid')
        .where('pht_idproject', req.params.projectid)
        .then(function(Project){
            res.send(Project)
        })     
}