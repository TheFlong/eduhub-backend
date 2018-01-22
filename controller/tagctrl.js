var knex = require('../db/knex')

module.exports = {

    addTag1,
    addTag2,
    getProjectsTags,

    deleteTag
}

//Abfrage aller zugehöriger Tags
function getProjectsTags(req,res){
    knex
        .select('tagid', 'tag_name').from('Tag')
        .join('ProjectHasTag', 'pht_idtag', 'tagid')
        .where('pht_idproject', req.params.projectid)
        .then(function(Project){
            res.send(Project)
        })     
}
//Prüfen ob Tag schon vorhanden ist
function addTag1(req, res, next){

    knex('Tag')
        .select('tagid as tagid')
        .where('tag_name', req.body.tag_name)
        .then(function(response1){
            response1 : response1[0]; 
            req.tagid = response1[0];  
            next();
        }) 

}
//Hinzufügen des Tags
function addTag2(req,res){
    if(req.tagid != null){
        knex('ProjectHasTag')
            .insert({
                pht_idtag: req.tagid.tagid,
                pht_idproject: req.body.projectid
            })
            .then(function(response){
                knex.select()
                .from('Tag')
                .where('tag_name', req.body.tag_name)
                .then(function(project) {
                    res.send(project);
                })
            })
    }
    else {
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
                            pht_idtag: response[0],
                            pht_idproject: req.body.projectid
                        })

                })
                .then(t.commit)
                .catch(t.rollback)
                .then(function(response){
                    knex.select()
                    .from('Tag')
                    .where('tag_name', req.body.tag_name)
                    .then(function(project) {
                        res.send(project);
                    })
                })
        })
    }
}

//Löschen eines Tag
function deleteTag(req,res){
    return knex.transaction(function(t){
        return knex('Tag')
            .transacting(t)
            .select('tagid')
            .where('tag_name', req.body.tag_name)
            .then(function(response){
                return knex('ProjectHasTag')
                    .transacting(t)
                    .where('pht_idtag', response[0].tagid)
                    .andWhere('pht_idproject', req.body.projectid)
                    .del()
            })
            .then(t.commit)
            .catch(t.rollback)
            .then(function(response){
                knex
                .from('Tag')
                .select('tagid', 'tag_name')
                .join('ProjectHasTag', 'pht_idtag', 'tagid')
                .where('pht_idproject', req.body.projectid)
                .then(function(Project){
                    res.send(Project)
                })     
            })
        })
}