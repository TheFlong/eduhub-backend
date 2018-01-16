var knex = require('../db/knex')

module.exports = {

    addTag1,
    addTag2,
    getProjectsTags
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

// Muss erst checken ob Tag schon vorhanden:
/* Wenn Ja: ProjectHasTag mit vorhandenem Tag
        Nein: neuen Tag erst
 */

 //Testing steht noch aus dann funktion übertragen auf Ressourcen. Ist die Funktion anwendbar wenn neues Projekt erstellt wird? Mit Kev absprechen!
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
function addTag2(req,res){
    if(req.tagid != null){
        knex('ProjectHasTag')
            .insert({
                pht_idtag: req.tagid.tagid,
                pht_idproject: req.body.projectid
            })
            .then(function(response){
                res.send(response)
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
                .then(function(){
                    res.send(Project)

                })
        })
    }
}