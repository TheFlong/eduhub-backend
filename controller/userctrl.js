var knex = require('../db/knex')

module.exports = {

    getAll,
    getOne,
    addOne,
    changeOne,
    deleteOne,
    getMyProject

};


function getAll(req, res) {
    knex.select().from('User').then( User => res.send(User) );
}

function getOne(req, res) {
    knex.select().from('User').where('email', req.params.email).then(function(User){
        res.send(User)
    })
}
function addOne(req,res){
    knex('User').insert({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        street: req.body.street,
        city: req.body.city,
        number: req.body.number,
        postcode: req.body.postcode,
        schoolid: req.body.schoolid,
        function: req.body.function,
        subject1: req.body.subject1,
        subject2: req.body.subject2,
        subject3: req.body.subject3
    })
    .then(function() {
        knex.select().from('User')
        .then(function(User) {
            res.send(User);
        })
    })
}
function changeOne(req, res){
    knex('User').where('email', req.body.email)
        .update({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            street: req.body.street,
            city: req.body.city,
            number: req.body.number,
            postcode: req.body.postcode,
            schoolid: req.body.schoolid,
            function: req.body.function,
            subject1: req.body.subject1,
            subject2: req.body.subject2,
            subject3: req.body.subject3

        })
        .then(() => {
            knex.select()
                .from('User')
                .then(User => res.send(User));
        })
}
function deleteOne(req, res){
    knex('User').where('email', req.body.email)
        .del()
        .then(() => {
            knex.select()
            .from('User')
            .then(User => res.send(User));
        })

}

function getMyProject(req, res){
    knex
    .select().from('Project')
        .join('UserHasProject', 'idproject', 'projectid')
        .where('iduser', req.body.userid)
    .then(function(Project){
        res.send(Project)
    })     
}

