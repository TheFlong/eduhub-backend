var knex = require('../db/knex')


module.exports = {
    test
}

function test(req,res){
    
knex.select('ua.projectid as projectid', 'ua.project_name as project_name', 'ua.Project_projectid as project_projectid', 'ua.project_termin as project_termin', 'uw.project_name as parentproject')
    .from('Project as ua')
    /* .where('ua.project_projecttype', "addTermin") */
    .innerJoin('UserHasProject',function(){
        this.on('uhp_idproject', 'ua.projectid');
        this.andOn('ua.project_projecttype', '=','NULL');
        this.andOn('uhp_iduser', '=', 14);
    })
    /* .where('w.uhp_iduser', 14) */
    .leftJoin('Project as uw','uw.Project_projectid', 'ua.uhp_idproject')




/* knex.select( 'w.*', 'ua.projectid as projectid', 'ua.project_name as project_name', 'ua.Project_projectid as project_projectid', 'ua.project_termin as project_termin', 'uw.project_name as parentproject')
    .from('UserHasProject as w')
    .where('w.uhp_iduser', 14)
    .innerJoin('Project as ua', 'w.uhp_idproject', 'ua.projectid') 
    .leftJoin('Project as uw','w.uhp_idproject', 'uw.Project_projectid')
     */
  /*   
    
    // 
   
    
    
    // */

   //.innerJoin('Project as ua', function() {
     //   this.on('ua.projectid', 'w.uhp_idproject').where('ua.project_projecttype', "addTermin")
      //})
   // 
    //
    //
    
   
    .then( User => res.send(User))
    /* knex.select('ua.project_name AS ua_name', 'uw.project_name AS uw_name' )
    .from('User as w')
    .innerJoin( 'Project AS ua', 'userid', 'ua.project_author' )
    .leftJoin( 'Project as uw', 'userid', 'uw.project_author' )
    .then( User => res.send(User)) */
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

