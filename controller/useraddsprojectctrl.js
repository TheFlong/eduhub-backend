var knex = require('../db/knex')

module.exports = {
    beMember,
    beMember2,
    cancelMembership1,
    cancelMembership2,
    amIMember,

    setasFav

};

function beMember1 (req,res,next){
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
function beMember2(req,res){
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
function cancelMembership1(req,res,next){
    knex('Project')
    .where('projectid', req.body.uhp_idproject)
    .decrement('project_membercount', 1)
    .then(function(){
        req.projectid = req.body.uhp_idproject;
        req.userid = req.body.uhp_iduser;
        next();
   })

}
function cancelMembership2(req,res){
    knex('UserHasProject')
        .where('uhp_idproject',  req.projectid)
        .andWhere('uhp_iduser', req.userid )
        .andWhere('uhp_userrole', 'member')
        .del()
        .then(function(response1) { 
            knex.select()
                .from('UserHasProject')
                .then(function(Project){
                    res.send(Project);
                })
        })
}

function amIMember(req, res){
    knex('UserHasProject').count('uhp_idproject as CNT')
                      .where(function (){ 
                            this.where('uhp_idproject', req.params.uhp_idproject)
                            .andWhere('uhp_iduser', req.params.uhp_iduser)
                            .andWhere('uhp_userrole', 'member')
                         })
                        
                        .then(function(response){
                            console.log(response);
                            res.send({
                                    response: response[0].CNT
                                     
                            });

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
