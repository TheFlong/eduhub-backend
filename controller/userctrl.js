var knex = require('../db/knex')


module.exports = {

    getAll,
    getOne,
    getMyProject,
    getMyFavProjects,
    getMyTimeline,

    addOne,
    
    changeOne,
    changePicture,
    
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


function changePicture(req, res){
    var filepath = getfilepath(req.body.userid);
    var startup_image = req.files.foo;
    //var fileName = filename(req.body.fileName);


    // Use the mv() method to place the file somewhere on your server
    startup_image.mv(filepath , function(err) {
      if(err){
        console.log(err);
      }else{
     console.log("uploaded");
    }
    });

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
