var knex = require('../db/knex')
module.exports = {
    //Funktionen um ein Projekt als Favorit zu markieren
    beFavorite1,
    beFavorite2,
    beFavoriteEvent1,
    beFavoriteEvent2,
    //Funktionen um ein Projekt als Favorit zu löschen
    cancelFavorite1,
    cancelFavorit2,
    cancelFavoriteEvent1,
    cancelFavoriteEvent2,
    //Funktion um Favoritenanzahl auszugeben
    amIFavorite
}


// Eintrag in Verknüpfungstabelle 'UserHasProject' mit dem rolle: favorite
function beFavorite1 (req,res,next){
    knex('UserHasProject')
            .insert({
                uhp_iduser: req.body.uhp_iduser,
                uhp_idproject: req.body.uhp_idproject,
                uhp_userrole: "favorite"
            }).then(function(){
                 req.projectid = req.body.uhp_idproject;
                 next();
            })
 }

//Update des Zählers für Favoriten im Projekt
function beFavorite2(req,res){
    knex('Project')
        .where('projectid', req.projectid)
        .increment('project_favcount', 1) 
        .then(function(response1) {
            knex.select()
            .from('Project')
            .where('projectid', req.projectid)
            .then(function(Project){
                res.send(Project);
            })
        })
    
}
//Auslesen von Vorname, Nachname und Projektname um Favoritevent zu erzeugen
function beFavoriteEvent1(req,res,next){
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
//Favoriteevent als Projekt ablegen
function beFavoriteEvent2(req,res, next){
    return knex.transaction(function(t){
        return knex('Project')
        .transacting(t)
        .insert({
            project_name: req.name.temp2 + ' ' + req.name.temp1 + ' ' + 'hat das Projekt' + ' "'+ req.projectname.temp3 + '" ' + 'als Favorit markiert!',
            project_text: "",
            project_karma: 0,
            project_projecttype: "befavorite",
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
//Herabsetzen des Favzählers im Projekt
function cancelFavorite1(req,res,next){
    knex('Project')
    .where('projectid', req.body.uhp_idproject)
    .decrement('project_favcount', 1)
    .then(function(){
        req.projectid = req.body.uhp_idproject;
        req.userid = req.body.uhp_iduser;
        next();
   })

}
//Löschen des Eintrages in der Verknüpfungstabelle 'UserHasProject'
function cancelFavorit2(req,res){
    knex('UserHasProject')
        .where('uhp_idproject',  req.projectid)
        .andWhere('uhp_iduser', req.userid )
        .andWhere('uhp_userrole', 'favorite')
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
//Auslesen von Vorname, Nachname und Projektname um Favoritevent zu erzeugen
function cancelFavoriteEvent1(req,res,next){
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
//Favoriteevent als Projekt ablegen
function cancelFavoriteEvent2(req,res, next){
    return knex.transaction(function(t){
        return knex('Project')
        .transacting(t)
        .insert({
            project_name: req.name.temp2 + ' ' + req.name.temp1 + ' ' + 'hat das Projekt' + ' "'+ req.projectname.temp3 + '" ' + 'verlassen!',
            project_text: "",
            project_karma: 0,
            project_projecttype: "cancelfavorite",
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

//Ausgabe ob User dieses Projekt als fav markiert hat 0/1
function amIFavorite(req, res){
    knex('UserHasProject')
        .count('uhp_idproject as CNT')
        .where(function (){ 
        this.where('uhp_idproject', req.params.uhp_idproject)
                .andWhere('uhp_iduser', req.params.uhp_iduser)
                .andWhere('uhp_userrole', 'favorite')
        })
        .then(function(response){
            res.send({
                response: response[0].CNT
            });
        })
}
