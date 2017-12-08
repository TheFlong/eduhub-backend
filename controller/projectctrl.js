var knex = require('../db/knex')

module.exports = {

    newProject,
    addImage,
    getAll,
    getMembers,
    getOne
    //addDocument

};



function newProject(req,res){
    return knex.transaction(function(t){
        return knex('Project')
        .transacting(t)
        .insert({
            name: req.body.name,
            text: req.body.text,
            karma: 0,
            projecttype: "newProject",
            author: req.body.author
        })
        .then(function(response){
            return knex('UserHasProject')
            .transacting(t)
            .insert({
                iduser: req.body.author,
                idproject: response[0],

            })
        })
        .then(t.commit)
        .catch(t.rollback)
        .then(function() {
            knex.select().from('UserHasProject')
            .then(function(UserHasProject) {
                res.send(UserHasProject);
            })
        })

    });
}

function addImage(req, res){
    return knex.transaction(function(t){
        return knex('Project')
        .transacting(t)
        .insert({
            Project_projectid: req.body.projectid,
            name: req.body.name,
            text: req.body.text,
            karma: 0,
            projecttype: "addImage",
            author: req.body.author
        })
        .then(function(response){
            return knex('Image')
            .transacting(t)
            .insert({
                idproject: response[0],
                name: req.body.name,
                imagepath: req.body.imagepath,


            })
        })
        .then(t.commit)
        .catch(t.rollback)
        .then(function() {
            knex.select().from('Image')
            .then(function(Image) {
                res.send(Image);
            })
        })

    });
}

function addDocument(req, res){
    knex('Document').insert({
        name: rey.body.name,
        documentpath: req.body.imagepath,
        idproject: req.body.idproject,
    })
    .then(function() {
        knex.select().from('Document')
        .then(function(document) {
            res.send(Document);
        })
    })
}

function getAll(req, res) {
    knex.select().from('Project').then( Project => res.send(Project) );
}

function getMembers(req, res){
    knex
        .select().from('User')
        .join('UserHasProject', 'iduser', 'userid')
        .where('idproject', req.body.projectid)
        .then(function(Project){
        res.send(Project)
    })
}

function getOne(req, res) {
    knex.select().from('Project').where('projectid', req.params.projectid).then(function(Project){
        res.send(Project)
    })
}

/*  knex('users')
.join('contacts', 'users.id', 'contacts.user_id')
.select('users.id', 'contacts.phone')


/*
function addOne(req,res){
    knex('Project').insert({
    })
    .then(function() {
        knex.select().from('User')
        .then(function(User) {
            res.send(User);
        })
    })
}
function changeOne(req, res){
    knex('User').where('email', req.params.email)
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
 */
