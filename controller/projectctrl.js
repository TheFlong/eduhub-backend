var knex = require('../db/knex')

module.exports = {

    
    getAll,
    getMembers,
    getOne,
    getProjectInfo,
    getLandingPage,
    getReactions,

    changeProject1,
    changeProject2
    

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

// req.body.userid , req.body.projectid, req.body.changeid (1,2,3)
// req.body.newtitel , req.body.newdescription, req.body.fileName, req.files.foo
function changeProject1(req,res,next){
    req.changeid = req.body.changeid;
    if(req.changeid == 3){
        var startup_image = req.files.foo;
        var fileName = filename(req.body.fileName);
        req.fileName = fileName;    
        
        // Use the mv() method to place the file somewhere on your server
        startup_image.mv('images/' + fileName + '.png' , function(err) {
            if(err){
                console.log(err);
            }else{
                console.log("uploaded");
             }
        });
    }
    knex.select('surname as temp1', 'forename as temp2').from('User').where('userid', req.body.userid)
    .then(function(response){
        req.name = response[0];
    })   
   .then(function(){
        knex
        .select('project_name as temp3','project_text as temp4', 'project_imagepath as temp5'  ).from('Project').where('projectid',req.body.projectid)
        .then(function(response1){
            req.projectname = response1[0];  
            next();
        }) 
    }) 
}

function changeProject2(req,res){
    if (req.changeid == 1){
        return knex.transaction(function(t){
            return knex('Project')
            .transacting(t)
            .insert({
                project_name: req.name.temp2 + ' ' + req.name.temp1 + ' ' + 'hat den Titel geändert!',
                project_text: req.body.newtitel,
                project_change: req.projectname.temp3,
                project_karma: 0,
                project_projecttype: "changeTitel",
                project_author: req.body.userid,
                project_membercount: 1,
                Project_projectid: req.body.projectid
            })
            .then(function(response){
                return knex('UserHasProject')
                .transacting(t)
                .insert({
                    uhp_iduser: req.body.userid,
                    uhp_idproject: response[0],
                    uhp_userrole: "author"
    
                })
            }).then(function(){
                return knex('Project')
                .transacting(t)
                .where('projectid', req.body.projectid)
                .update({
                    project_name : req.body.newtitel
                })
            })
            .then(t.commit)
            .catch(t.rollback)
            
            .then(function() {
                knex.select().from('Project')
                .then(function(Project) {
                    res.send(Project);
                })
            })
        }); 
    }
    
    if(req.changeid == 2){
        return knex.transaction(function(t){
            return knex('Project')
            .transacting(t)
            .insert({
                project_name: req.name.temp2 + ' ' + req.name.temp1 + ' ' + 'hat die Beschreibung geändert!',
                project_text: req.body.newdescription,
                project_change: req.projectname.temp4,
                project_karma: 0,
                project_projecttype: "changeDescription",
                project_author: req.body.userid,
                project_membercount: 1,
                Project_projectid: req.body.projectid
            })
            .then(function(response){
                return knex('UserHasProject')
                .transacting(t)
                .insert({
                    uhp_iduser: req.body.userid,
                    uhp_idproject: response[0],
                    uhp_userrole: "author"
    
                })
            }).then(function(){
                return knex('Project')
                .transacting(t)
                .where('projectid', req.body.projectid)
                .update({
                    project_text : req.body.newdescription
                })
            })
            .then(t.commit)
            .catch(t.rollback)
            
            .then(function() {
                knex.select().from('Project')
                .then(function(Project) {
                    res.send(Project);
                })
            })
        }); 

    }
    if (req.changeid == 3){
        return knex.transaction(function(t){
            return knex('Project')
            .transacting(t)
            .insert({
                project_name: req.name.temp2 + ' ' + req.name.temp1 + ' ' + 'hat das Titelbild geändert!',
                project_text: "Neues Titelbild",
                project_change: req.projectname.temp5,
                project_karma: 0,
                project_projecttype: "changeImage",
                project_author: req.body.userid,
                project_membercount: 1,
                Project_projectid: req.body.projectid
            })
            .then(function(response){
                return knex('UserHasProject')
                .transacting(t)
                .insert({
                    uhp_iduser: req.body.userid,
                    uhp_idproject: response[0],
                    uhp_userrole: "author"
    
                })
            }).then(function(){
                return knex('Project')
                .transacting(t)
                .where('projectid', req.body.projectid)
                .update({
                    project_imagepath: 'images/' + req.fileName + '.png'
                })
            })
            .then(t.commit)
            .catch(t.rollback)
            .then(function() {
                knex.select().from('Project')
                .then(function(Project) {
                    res.send(Project);
                })
            })
        }); 
    }
}

function filename(a){    
    return a + '-' + Date.now()
}
