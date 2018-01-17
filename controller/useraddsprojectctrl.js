var knex = require('../db/knex')

module.exports = {
    //Mitglied eines Projekts werden
    beMember1,
    beMember2,
    beMemberEvent1,
    beMemberEvent2,
    //Mitgliedschaft in einem Projekt beenden
    cancelMembership1,
    cancelMembership2,
    cancelMembershipEvent1,
    cancelMembershipEvent2,
    //Abfrage der Mitglieder
    amIMember
};
// Eintrag in Verknüpfungstabelle 'UserHasProject' mit dem rolle: member
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
//Update des Zählers für Member im Projekt
function beMember2(req,res){
    knex('Project')
    .where('projectid', req.projectid)
    .increment('project_membercount', 1) 
    .then(function(response1) {
        knex.select()
        .from('Project')
        .where('projectid', req.projectid)
        .then(function(Project){
            res.send(Project);
        })
    })

}
//Auslesen von Vorname, Nachname und Projektname um Memberevent zu erzeugen
function beMemberEvent1(req,res,next){
    knex.select('surname as temp1', 'forename as temp2').from('User').where('userid', req.body.uhp_iduser)
        .then(function(response, response1){
            response : response[0].temp1;
            req.name = response[0];
        })   
       .then(function(){
            knex.select('project_name as temp3').from('Project').where('projectid',req.body.uhp_idproject)
           .then(function(response1){
            response1 : response1[0].temp3; 
            req.projectname = response1[0];  
            next();
        }) 
    })  
}
//Memberevent als Projekt ablegen
function beMemberEvent2(req,res, next){
    return knex.transaction(function(t){
        return knex('Project')
        .transacting(t)
        .insert({
            project_name: req.name.temp2 + ' ' + req.name.temp1 + ' ' + 'ist dem Projekt' + ' "'+ req.projectname.temp3 + '" ' + 'beigetreten!',
            project_text: "",
            project_karma: 0,
            project_projecttype: "bemember",
            project_author: req.body.uhp_iduser,
            project_membercount: 1,
            Project_projectid: req.body.uhp_idproject
        })
        .then(function(response){
            return knex('UserHasProject')
            .transacting(t)
            .insert({
                uhp_iduser: req.body.uhp_iduser,
                uhp_idproject: response[0],
                uhp_userrole: "author"

            })
        })
        .then(t.commit)
        .catch(t.rollback)
        .then(function(){
            next();
        })

    });
}
//Herabsetzen des Memberzählers im Projekt
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
//Löschen des Eintrages in der Verknüpfungstabelle 'UserHasProject'
function cancelMembership2(req,res){
    knex('UserHasProject')
        .where('uhp_idproject',  req.projectid)
        .andWhere('uhp_iduser', req.userid )
        .andWhereNot('uhp_userrole', 'favorite')
        .del()
        .then(function(response1) { 
            knex.select()
            .from('Project')
            .where('projectid', req.projectid)
            .then(function(Project){
                res.send(Project);
            })
        })
}
//Auslesen von Vorname, Nachname und Projektname um Memberevent zu erzeugen
function cancelMembershipEvent1(req,res,next){
    knex.select('surname as temp1', 'forename as temp2').from('User').where('userid', req.body.uhp_iduser)
        .then(function(response, response1){
            response : response[0].temp1;
            req.name = response[0];
        })   
       .then(function(){
            knex.select('project_name as temp3').from('Project').where('projectid',req.body.uhp_idproject)
           .then(function(response1){
            response1 : response1[0].temp3; 
            req.projectname = response1[0];  
            next();
        }) 
    })  
}
//Memberevent als Projekt ablegen
function cancelMembershipEvent2(req,res, next){
    return knex.transaction(function(t){
        return knex('Project')
        .transacting(t)
        .insert({
            project_name: req.name.temp2 + ' ' + req.name.temp1 + ' ' + 'hat das Projekt' + ' "'+ req.projectname.temp3 + '" ' + 'verlassen!',
            project_text: "",
            project_karma: 0,
            project_projecttype: "cancelmembership",
            project_author: req.body.uhp_iduser,
            project_membercount: 1,
            Project_projectid: req.body.uhp_idproject
        })
        .then(function(response){
            return knex('UserHasProject')
            .transacting(t)
            .insert({
                uhp_iduser: req.body.uhp_iduser,
                uhp_idproject: response[0],
                uhp_userrole: "author"

            })
        })
        .then(t.commit)
        .catch(t.rollback)
        .then(function(){
            next();
        })

    });
}
//Ausgabe ob User Mitglied dieses Projekts ist 0/1
function amIMember(req, res){
    knex('UserHasProject')
        .count('uhp_idproject as CNT')
        .where(function (){ 
        this.where('uhp_idproject', req.params.uhp_idproject)
                .andWhere('uhp_iduser', req.params.uhp_iduser)
                .andWhere('uhp_userrole', 'member')
        })
        .then(function(response){
            res.send({
                response: response[0].CNT
            });
        })
}
