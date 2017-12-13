var knex = require('../db/knex')

module.exports = {

    
    getAll,
    getOne,
    getLandingPage,
    
    getMembers,
   
    newProject,
    addImage,
    addComment,
    
    getReactions
    //addDocument

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


function newProject(req,res){
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

    return knex.transaction(function(t){
        return knex('Project')
        .transacting(t)
        .insert({
            project_name: req.body.project_name,
            project_text: req.body.project_text,
            project_karma: 0,
            project_projecttype: "newProject",
            project_author: req.body.project_author,
            project_imagepath: 'images/' + fileName + '.png'
        })
        .then(function(response){
            return knex('UserHasProject')
            .transacting(t)
            .insert({
                uhp_iduser: req.body.project_author,
                uhp_idproject: response[0],
                uhp_userrole: "author"

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



    return knex.transaction(function(t){
        return knex('Project')
        .transacting(t)
        .insert({
            Project_projectid: req.body.Project_projectid,
            project_name: req.body.project_name,
            project_text: req.body.project_text,
            project_karma: 0,
            project_projecttype: "addImage",
            project_author: req.body.project_author
        })
        .then(function(response){
            return knex('Image')
            .transacting(t)
            .insert({
                image_idproject: response[0],
                image_name: fileName,
                image_imagepath: 'images/' + fileName + '.png'


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
        document_name: rey.body.document_name,
        document_documentpath: req.body.imagepath,
        document_idproject: req.body.idproject,
    })
    .then(function() {
        knex.select().from('Document')
        .then(function(document) {
            res.send(Document);
        })
    })
}

function addComment(req, res){
    return knex.transaction(function(t){
        return knex('Project')
        .transacting(t)
        .insert({
            project_name: req.body.project_name,
            project_text: req.body.project_text,
            project_karma: 0,
            project_projecttype: "newComment",
            project_author: req.body.project_author,
            Project_projectid: req.body.Project_projectid
        })
        .then(function(response){
            return knex('UserHasProject')
            .transacting(t)
            .insert({
                uhp_iduser: req.body.project_author,
                uhp_idproject: response[0],

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





function getReactions(req,res){
   /*  knex('Project')
        .join('User','userid', 'project_author')
        .select('*')
        .where('Project_projectid', req.params.projectid) 
        .leftjoin('Image', 'projectid', 'imageid_project')
        .orderBy('project_created_at', 'desc')
    
    */
   
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
