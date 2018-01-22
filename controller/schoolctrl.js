var knex = require('../db/knex')


module.exports = {
    getSchools

};
function getSchools(req,res){
    knex.select().from('School')
    .then(function(School){
        res.send(School)
    })
}
function getSchoolbyId(req,res){
    knex('School')
        .select('*')
        .where('schoolid', req.params.schoolid)
        .then(function(School){
            res.send(School)
        })
}

function getSchoolbyName(req,res){
    knex('School')
    .select('*')
    .where('school_name', req.params.school_name)
    .then(function(School){
        res.send(School)
    })
}


//prüfen ob schule existiert--> #Fragen ob es die richtige Schule ist und die Angaben stimmen --> eintrag der schoolid in nutzerprofil
//wenn schule nicht existiert --> Schule hinzufügen
//Lösen durch einbauen von einer Abfrage: Daten richitg oder vorhanden Schule vorschlagen.
function isSchoolexisting(req,res){
    knex('School')
        .select('*')
        .where('school_name', req.body.school_name)
        .orWhere(function(){
            this.where('school_street', req.body.school_street)
            .andWhere('school_number', req.body.school_number)
            .andWhere('school_postcode', req.body.school_postcode)
            .andWhere('school_city', req.body.school_city)
        })
        .then(function(School){
            res.send(School)
        })     
}

function addexistingSchool(req,res){
    knex('User')
        .where('userid', req.body.userid)
        .update({
            user_schoolid: req.body.schoolid
        })
        .then(function(User){
            res.send(User)
        })
}

function addnewSchool(req,res){
    return knex.transaction(function(t){
        return knex('School')
            .transacting(t)
            .insert({
                school_name: req.body.school_name,
                school_street:  req.body.school_street,     
                school_number: req.body.school_number,
                school_postcode: req.body.school_postcode,
                school_city: req.body.school_city, 
                school_studentnumber: req.body.school_studentnumber
            })
            .then(function(response){
                return knex('User')
                    .transacting(t)
                    .update({
                        user_schoolid: req.body.schoolid
                    })
            })
            .then(t.commit)
            .catch(t.rollback)
            .then(function(){
                res.send(User)
            })
    })
}

