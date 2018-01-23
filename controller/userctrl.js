
var knex = require('../db/knex')


module.exports = {

    getAll,
    getOne,
    getMyProject,
    getMyFavProjects,
    getMyTimeline,
    //Abfrage aller Termine des Nutzers
    getMyMeetings,
    //Nutzer hinzufügen
    adduser1,
    adduser2,
    //User aktualisieren
    changeOne1,
    changeOne2,
    //Profilfoto ändern
    changePicture1,
    changePicture2,
    
    deleteOne
    
    

};

//Ausgabe aller Nutzer
function getAll(req, res) {
    knex
        .select()
        .from('User')
        .join('School', 'schoolid','user_schoolid')
        .then( User => res.send(User) );
}
//Ausgabe eines bestimmten Users anhand der Emailadresse
function getOne(req, res) {
    knex.select().from('User')
    .where('email', req.params.email)
    .join('School', 'schoolid','user_schoolid')
    .then(function(User){
        res.send(User)
    })
}
//Ausgabe aller Projekte die mit User mit den Rollen "member" oder "author" oder "editor" verlinkt sind
function getMyProject(req, res){
    knex
        .select().from('Project')
        .join('UserHasProject', 'uhp_idproject', 'projectid')
        .where('uhp_iduser', req.params.userid)
        .where(function(){
            this.where('uhp_userrole',"member")
                .orWhere('uhp_userrole', "author")
                .orWhere('uhp_userrole', "editor")
        })
        .andWhere('project_projecttype', "newProject")
    .then(function(Project){
        res.send(Project)
    })
}

//Abfrage aller Projekte die User als Favorit markiert hat
function getMyFavProjects(req,res){
    knex.select()
        .from('Project')
        .join('UserHasProject', 'uhp_idproject', 'projectid')
        .where('uhp_iduser', req.params.userid)
        .where('uhp_userrole',"favorite")
        .then(function(Project){
            res.send(Project)
        })
}

//Abfrage aller vergangenen Aktionen des Users
function getMyTimeline(req,res){
    knex.select('*')
        .from('Project')
        .where('project_author', req.params.userid)
        .orderBy('project_created_at', 'desc')
        .then(function(Project){
            res.send(Project)
    })
 }




//Abfrage aller Termine des Users
function getMyMeetings(req,res){
   
        knex.select('ua.projectid as projectid1', 'ua.project_name as project_name1', 'ua.Project_projectid as project_projectid1', 'ua.project_termin as project_termin1',  'uw.project_name as parentproject' )
             .from('Project as ua')
             .innerJoin('Project as uw', 'uw.projectid', 'ua.Project_projectid')
             .where('ua.project_projecttype', 'addTermin') 
             .leftJoin('UserHasProject', 'uhp_idproject', 'ua.projectid')
             .where('uhp_iduser', req.params.userid)
        .then( User => res.send(User))
}
       
//User hinzufügen
function adduser1(req, res, next){
    
        knex.from('School')
            .select('schoolid')
            .where('school_name', req.body.school_name)
            .andWhere('school_street', req.body.school_street)
            .andWhere('school_postcode', req.body.school_postcode)
            .then(function(response1){
                    response1 : response1[0]; 
                    req.schoolid = response1[0];  
                    next(); 
            }) 
    
    }
    //Hinzufügen des Users und der Schule
function adduser2(req,res){ 
    var startup_image = req.files.foo;
    var fileName = filename(req.body.fileName);


    // Use the mv() method to place the file somewhere on your server
    startup_image.mv('images/' + fileName + '.png' , function(err) {
        if(err){
            console.log(err);
        }else{
            console.log("uploaded");
        }
    });
    if(req.schoolid != null){
        
        knex('User').insert({
            forename: req.body.forename,
            surname: req.body.surname,
            email: req.body.email,
            street: req.body.street,
            city: req.body.city,
            number: req.body.number,
            function: req.body.function,
            subject1: req.body.subject1,
            subject2: req.body.subject2,
            subject3: req.body.subject3,
            profilpic: 'images/' + fileName + '.png',
            user_karma: 0,
            user_description: req.body.user_description,
            user_privacy: req.body.user_privacy,
            user_schoolid: req.schoolid.schoolid,
            postcode: req.body.postcode
        })
        .then(function(response) {
            knex.select().from('User').where('userid', response[0])
            .then(function(User) {
                res.send(User);
            })
        })
    }
    else {
        return knex.transaction(function(t){
            return knex('School')
                .transacting(t)
                .insert({
                    school_name: req.body.school_name,
                    school_street: req.body.school_street,
                    school_number: req.body.house_number,
                    school_postcode: req.body.school_postcode,
                    school_city: req.body.school_city,
                    school_studentnumber: req.body.student_number
                })
                .then(function(response){
                    return knex('User')
                        .transacting(t)
                        .insert({
                            forename: req.body.forename,
                            surname: req.body.surname,
                            email: req.body.email,
                            street: req.body.street,
                            city: req.body.city,
                            number: req.body.number,
                            postcode: req.body.postcode,
                            function: req.body.function,
                            subject1: req.body.subject1,
                            subject2: req.body.subject2,
                            subject3: req.body.subject3,
                            profilpic: 'images/' + fileName + '.png',
                            user_karma: 0,
                            user_description: req.body.user_description,
                            user_privacy: req.body.user_privacy,
                            user_schoolid: response[0]
                        })

                }).then(function(response2) { 
                    return knex('User')
                    .transacting(t)
                    .select()
                    .where('userid', response2[0])
                    .then(function(User) {
                        res.send(User);
                    })
                })
                .then(t.commit)
                .catch(t.rollback)
    
        })
    }
}
//Schule prüfen bei Aktualisierung
function changeOne1(req,res,next){
    
        knex.from('School')
            .select('schoolid')
            .where('school_name', req.body.school_name)
            .andWhere('school_street', req.body.school_street)
            .andWhere('school_postcode', req.body.school_postcode)
            .then(function(response1){
                response1 : response1[0]; 
                req.schoolid = response1[0];  
                next(); 
            }) 
   
}
//Update des Users und wenn nötig eintrag einer neuen Schule
function changeOne2(req,res){ 
    if(req.schoolid != null){
        
        knex('User')
        .where('email', req.body.email)
        .update({
            forename: req.body.forename,
            surname: req.body.surname,
            email: req.body.email,
            street: req.body.street,
            city: req.body.city,
            number: req.body.number,
            postcode: req.body.postcode,
            user_schoolid: req.schoolid.schoolid,
            function: req.body.function,
            subject1: req.body.subject1,
            subject2: req.body.subject2,
            subject3: req.body.subject3,
            user_description: req.body.user_description,
            user_privacy: req.body.user_privacy
            

        })
        .then(function(response) {
            knex.select().from('User')
            .then(function(User) {
                res.send(User);
            })
        })
    }
    else {
        return knex.transaction(function(t){
            return knex('School')
                .transacting(t)
                .insert({
                    school_name: req.body.school_name,
                    school_street: req.body.school_street,
                    school_number: req.body.house_number,
                    school_postcode: req.body.school_postcode,
                    school_city: req.body.school_city,
                    school_studentnumber: req.body.student_number
                })
                .then(function(response){
                    return knex('User')
                        .transacting(t)
                        .where('email', req.body.email)
                        .update({
                            forename: req.body.forename,
                            surname: req.body.surname,
                            email: req.body.email,
                            street: req.body.street,
                            city: req.body.city,
                            number: req.body.number,
                            postcode: req.body.postcode,
                            function: req.body.function,
                            subject1: req.body.subject1,
                            subject2: req.body.subject2,
                            subject3: req.body.subject3,
                            user_description: req.body.user_description,
                            user_privacy: req.body.user_privacy,
                            user_schoolid: response[0]
                        })

                }).then(function(response2) { 
                    return knex('User')
                    .transacting(t)
                    .select()
                    .then(function(User) {
                        res.send(User);
                    })
                })
                .then(t.commit)
                .catch(t.rollback)
    
        })
    }
}

//Abfragen des Imagepath des vorhandenen Profilfotos
//req.body.email, req.file.foo
function changePicture1(req,res,next){
    knex.select('profilpic as temp1').from('User').where('email', req.body.email)
    .then(function(response, response1){
        response : response[0].temp1;
        req.filepath = response[0];
        next();
    })       
}
//Neues Bild speichern
function changePicture2(req, res){
    var filepath = req.filepath.temp1;
    var startup_image = req.files.foo;
    // Use the mv() method to place the file somewhere on your server
    startup_image.mv(filepath , function(err) {
        if(err){
            console.log(err);
        }else{
            console.log("uploaded");
        }
    });
    knex('User')
        .where('email', req.body.email)
        .update({
            profilpic: req.filepath.temp1
        })
        .then(() => {
            knex.select()
                .from('User')
                .then(User => res.send(User));
        })
}

//User löschen
function deleteOne(req, res){
    knex('User').where('email', req.body.email)
        .del()
        .then(() => {
            knex.select()
            .from('User')
            .then(User => res.send(User));
        })

}



function filename(a){

    return a + '-' + Date.now()

}

function getfilepath(a){

    knex('User').select('profilpic').where('userid',a)
    .then(function(response){
        return response.toString;
    })
}
