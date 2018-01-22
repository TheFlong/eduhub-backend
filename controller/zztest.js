var knex = require('../db/knex')


module.exports = {
   
}

//req.body.school_name, req.body.school_street,  req.body.school_postcode,req.body.house_number, req.body.school_city, req.body.student_number
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
            function: req.body.function,
            subject1: req.body.subject1,
            subject2: req.body.subject2,
            subject3: req.body.subject3,
            profilpic: 'images/' + fileName + '.png',
            user_karma: 0,
            user_description: req.body.user_description,
            user_privacy: req.body.user_privacy,
            user_schoolid: req.schoolid.schoolid
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
function filename(a){
    
        return a + '-' + Date.now()
    
    }
    
    function getfilepath(a){
    
        knex('User').select('profilpic').where('userid',a)
        .then(function(response){
            return response.toString;
        })
    }
    
