var knex = require('../db/knex')

module.exports = {
    beMember,
    takepart,
    setasFav

};

function takepart (req,res,next){
knex('UserHasProject')
        .insert({
            uhp_iduser: req.body.uhp_iduser,
            uhp_idproject: req.body.uhp_idproject,
            uhp_userrole: "member"
        }).then(function(){
             req.projectid = req.body.uhp_idproject;
             next();
        })
}
function beMember(req,res){
    knex('Project')
    .where('projectid', req.projectid)
    .increment('project_membercount', 1) 
    .then(function(response1) {
        knex.select()
            .from('Project')
            .then(function(Project){
                res.send(Project);
            })
    })

}

function setasFav(req,res){
    knex('UserHasProject')
    .insert({
        uhp_iduser: req.body.uhp_iduser,
        uhp_idproject: req.body.uhp_idproject,
        uhp_userrole: "favorite"
    })
}
