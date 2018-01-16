
var knex = require('../db/knex')


module.exports = {

    getAll,
    getOne,
    getMyProject,
    getMyFavProjects,
    getMyTimeline,
    getMyMeetings,
    getMyMeetings2,
    getMyMeetings3,

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

function getMyMeetings(req,res,next){
    req.termin = [];
    knex.select('projectid as projectid', 'project_name as project_name', 'Project_projectid as project_projectid', 'project_termin as project_termin')
        .from('Project')
        .where('project_projecttype', "addTermin")
        .join('UserHasProject', 'uhp_idproject', 'projectid')
        .where('uhp_iduser', req.params.userid)
        .orderBy('project_termin', 'asc')
        .then(function(response){
            req.termin = response;
            next();
        })
}
function getMyMeetings2(req,res,next){
    var i = 0;
    req.name = []
    req.termin.forEach(function(response2){
        knex.select('project_name as titel')
            .from('Project')
            .where('projectid', req.termin[i].project_projectid)
            .then(function(response3){
                req.name.push(response3) 
            }).then(function(response12){
                if(i < req.termin.length -1){
                   i = i+1;
                }
                else{
                    next();
                }
            })
    })
}     

function getMyMeetings3(req,res){
    var r = 0;
    req.body.ergebnis = []
    req.termin.forEach(function(){
        var a = [{projectid : req.termin[r].projectid, project_name: req.termin[r].project_name ,project_projectid: req.termin[r].project_projectid, project_titel: (req.name[r])[0].titel, project_termin: req.termin[r].project_termin}];
        req.body.ergebnis.push(a)
        r++;
    })
     res.send(req.body.ergebnis);
}
       
       
       
       
       
       
       
       
        /*  .then(function (response1){
            var a = [];
            var i = 0;
            req.body.termin.forEach(function(response2){
                knex.select('project_name as project_titel')
                    .from('Project')
                    .where('projectid', req.body.termin[i].project_projectid)
                    .then(function(response3){
                        a.push(response3)
                        console.log(a)
                        })    
                i = i+1;
                
            }) */
            
            /* var j = 0;
            req.body.termin.forEach(function(response){  
                req.body.termin[0].push(req.body.ergebnis[j])
                console.log(req.body.termin)
                 j++;
                }) */
      /*   }).then(function(){
            res.send();
            console.log(req.body.ergebnis);
            console.log(req.body.termin);
        })
 */
           
       

/* 
function getMeetings2(req,res){ 
    var j=0;
    console.log(req.termin)
    var a = req.termin;
    console.log(req.ergebnis)
   // req.body.endergebnis = [];
    req.termin.forEach(function(){
        a.push(req.ergebins);
        j++;
    })
    console.log(req.termin)
}
 */





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
        user_schoolid: req.body.schoolid,
        function: req.body.function,
        subject1: req.body.subject1,
        subject2: req.body.subject2,
        subject3: req.body.subject3,
        profilpic: 'images/' + fileName + '.png',
        user_karma: 0,
        user_description: req.body.user_description,
        user_privacy: req.body.user_privacy
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
            user_schoolid: req.body.schoolid,
            function: req.body.function,
            subject1: req.body.subject1,
            subject2: req.body.subject2,
            subject3: req.body.subject3,
            user_description: req.body.user_description,
            user_privacy: req.body.user_privacy

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
