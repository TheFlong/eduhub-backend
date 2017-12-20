var knex = require('../db/knex')


module.exports = {

    getAll,
    getOne,
    getMyProject,
    getMyFavProjects,
    getMyTimeline,
    getMyMeetings,

    addOne,
    
    changeOne,
    changePicture1,
    changePicture2,
    
    deleteOne
    
    

};


function getAll(req, res) {
    knex.select().from('User').then( User => res.send(User) );
}

function getOne(req, res) {
    knex.select().from('User').where('email', req.params.email).then(function(User){
        res.send(User)
    })
}

function getMyProject(req, res){
    knex
        .select().from('Project')
        .join('UserHasProject', 'uhp_idproject', 'projectid')
        .where('uhp_iduser', req.params.userid)
        .where(function(){
            this.where('uhp_userrole',"member")
                .orWhere('uhp_userrole', "author")
        })
    .then(function(Project){
        res.send(Project)
    })
}

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

function getMyTimeline(req,res){
    knex.select('*')
        .from('Project')
        .where('project_author', req.params.userid)
        .orderBy('project_created_at', 'desc')
        .then(function(Project){
            res.send(Project)
    })
 }

 function getMyMeetings(req,res){
     knex.select('*')
        .from('Project')
        .where('project_projecttype', "addTermin")
        .join('UserHasProject', 'uhp_idproject', 'projectid')
        .where('uhp_iduser', req.params.userid)
        .orderBy('project_termin', 'asc')
        .then(function(Project){
            res.send(Project)
    })

        
 }

function addOne(req,res){
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

    knex('User').insert({
        forename: req.body.forename,
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
        subject3: req.body.subject3,
        profilpic: 'images/' + fileName + '.png',
        user_karma: 0,
        user_description: req.body.user_description
    })
    .then(function(response) {
        knex.select().from('User').where('userid', response[0])
        .then(function(User) {
            res.send(User);
        })
    })
}
function changeOne(req, res){
    knex('User').where('email', req.body.email)
        .update({
            forename: req.body.forename,
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
            subject3: req.body.subject3,
            user_description: req.body.user_description

        })
        .then(() => {
            knex.select()
                .from('User')
                .then(User => res.send(User));
        })
}
//req.body.userid, req.file.foo
function changePicture1(req,res,next){
    knex.select('profilpic as temp1').from('User').where('email', req.body.email)
    .then(function(response, response1){
        response : response[0].temp1;
        req.filepath = response[0];
        next();
    })       
}

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
