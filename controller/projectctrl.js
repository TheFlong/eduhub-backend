var knex = require('../db/knex')

module.exports = {

    
    getAll,
    getMembers,
    getOne,
    getLandingPage,
    getReactions,
    getDocumentList,
    getImageList,

    changeProject1,
    changeProject2,

    deleteProject
    

};
//Abfrage aller Projekte
function getAll(req, res) {
    knex.select()
        .from('Project')
        .then( Project => res.send(Project) );
}

//Abfrage aller Mitglieder eines Projekts
function getMembers(req, res){
    knex
        .select().from('User')
        .join('UserHasProject', 'uhp_iduser', 'userid')
        .where('uhp_idproject', req.params.projectid)
        .where(function(){
            this.where('uhp_userrole',"member")
                .orWhere('uhp_userrole', "author")
                .orWhere('uhp_userrole', "editor")
        })
        .then(function(User){
        res.send(User)
    })
}

//Abfrage eines bestimmten Projekts mit projektid
function getOne(req, res) {
    knex.select()
        .from('Project')
        .where('projectid', req.params.projectid)
        .then(function(Project){
            res.send(Project)
        })
}
//Abfrage um Landingpage zu generieren
function getLandingPage(req,res){
    knex.select()
        .from('Project')
        .where('project_projecttype', 'newProject')
        .orderBy('project_karma', 'desc')
        .limit(8)
        .then(Project => res.send(Project));
}
//Abfrage der Reaktionen auf ein Projekt
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
//Abfrage aller zum Projekt gehörender Dokumente
function getDocumentList(req,res){
    knex('Project')
        .where('Project_projectid', req.params.projectid)
        .andWhere('project_projecttype', "addDocument")
        .leftJoin('Document', 'projectid', 'document_idproject')
        .orderBy('project_created_at', 'desc')
        .select('project_name','document_documentpath')
        .then(function(documents){
            res.send(documents)
        })
}
//Abfrage aller zum Projekt gehörender Bilder
function getImageList(req,res){
    knex('Project')
        .where('Project_projectid', req.params.projectid)
        .andWhere('project_projecttype', "addImage")
        //.andWhere('image_deleted', 0)
        .leftJoin('Image', 'projectid', 'image_idproject')
        .orderBy('project_created_at', 'desc')
        .select('src','thumbnail','thumbnailWidth','thumbnailHeight')
        .then(function(image){
            res.send(image)
        })
}

//Funktion um Einträge in bestehendem Projekt zu ändern.
// req.body.userid , req.body.projectid, req.body.changeid (1,2,3)
// req.body.newtitle , req.body.newdescription, req.body.fileName, req.files.foo, req.body.newtermin, req.body.newgoal, req.body.newwriteRights
function changeProject1(req,res,next){
    req.changeid = req.body.changeid;
    //Projektpofilfoto ändern
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

    //Auslesen von Vorname, Nachname, Projektname für Änderungsevent
    knex.select('surname as temp1', 'forename as temp2').from('User').where('userid', req.body.userid)
    .then(function(response){
        req.name = response[0];
    })   
    .then(function(){
        knex
        .select('project_name as temp3','project_text as temp4', 'project_imagepath as temp5', 'project_termin as temp6', 'project_statement as temp7', 'project_writeRights as temp8'   )
        .from('Project').where('projectid',req.body.projectid)
        .then(function(response1){
            req.projectname = response1[0];  
            next();
        }) 
    }) 
}
function changeProject2(req,res){
    //Titel ändern
    if (req.changeid == 1){
        return knex.transaction(function(t){
            return knex('Project')
            .transacting(t)
            .insert({
                project_name: req.name.temp2 + ' ' + req.name.temp1 + ' ' + 'hat den Titel geändert!',
                project_text: req.body.newtitle,
                project_change: req.projectname.temp3,
                project_karma: 0,
                project_projecttype: "changeTitle",
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
                    project_name : req.body.newtitle
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
    //Beschreibung ändern
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
                .where('projectid', req.body.projectid)
                .then(function(Project) {
                    res.send(Project);
                })
            })
        }); 
    }
    //Projektbeginn ändern
    if(req.changeid == 4){
        return knex.transaction(function(t){
            return knex('Project')
            .transacting(t)
            .insert({
                project_name: req.name.temp2 + ' ' + req.name.temp1 + ' ' + 'hat den Projektbeginn verschoben!',
                project_text: req.body.newtermin,
                project_change: req.projectname.temp6,
                project_karma: 0,
                project_projecttype: "changeTermin",
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
                    project_termin : req.body.newtermin
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
    //Projektzielsetzung ändern
    if(req.changeid == 5){
        return knex.transaction(function(t){
            return knex('Project')
            .transacting(t)
            .insert({
                project_name: req.name.temp2 + ' ' + req.name.temp1 + ' ' + 'hat die Zielsetzung geändert!',
                project_text: req.body.newgoal,
                project_change: req.projectname.temp7,
                project_projecttype: "changeGoal",
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
                    project_statement : req.body.newgoal
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
    //Schreibrechte ändern
    if(req.changeid == 6){
        var str = '';
        var str2 = '';
        if(req.projectname.temp8 == 0){
            str = 'Das Projekt ist jetzt als privat markiert.'
        }
        else{
            str = 'Das Projekt ist jetzt als öffentlich markiert.'
        }
        return knex.transaction(function(t){
            return knex('Project')
            .transacting(t)
            .insert({
                project_name: req.name.temp2 + ' ' + req.name.temp1 + ' ' + 'hat die Schreibrechte geändert!',
                project_text: str,
                project_change: req.projectname.temp8,
                project_projecttype: "changeRights",
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
                    project_writeRights : req.body.newwriteRights
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
//Projekt löschen
function deleteProject(req, res){
    knex('Project').where('projectid', req.body.projectid)
        .del()
        .then(() => {
            knex.select()
            .from('UserHasProject')
            .then(Project => res.send(Project));
        })

}


function filename(a){    
    return a + '-' + Date.now()
}
