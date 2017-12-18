var knex = require('../db/knex')

module.exports = {

    
    getAll,
    getMembers,
    getOne,
    getLandingPage,
    getReactions
    

};
function getAll(req, res) {
    knex.select()
        .from('Project')
        .then( Project => res.send(Project) );
}

function getMembers(req, res){
    knex
        .select().from('User')
        .join('UserHasProject', 'uhp_iduser', 'userid')
        .where('uhp_idproject', req.params.projectid)
        .where(function(){
            this.where('uhp_userrole',"member")
                .orWhere('uhp_userrole', "author")
        })
        .then(function(User){
        res.send(User)
    })
}

function getOne(req, res) {
    knex.select()
        .from('Project')
        .where('projectid', req.params.projectid)
        .then(function(Project){
            res.send(Project)
        })
}

function getLandingPage(req,res){
    knex.select()
        .from('Project')
        .where('project_projecttype', 'newProject')
        .orderBy('project_karma', 'desc')
        .limit(8)
        .then(Project => res.send(Project));
}

function getReactions(req,res){
     knex.select('*')
        .from('Project')
        .where('Project_projectid', req.params.projectid)
        .join('User', 'userid', 'project_author')
        .leftJoin('Image', 'projectid', 'image_idproject')
        .orderBy('project_created_at', 'desc')
        .then(function(Project){
             res.send(Project)
    })
}

function filename(a){    
    return a + '-' + Date.now()
}
