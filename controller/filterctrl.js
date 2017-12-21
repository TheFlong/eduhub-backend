var knex = require('../db/knex')
module.exports = {
    
    getUploadEvents

};

function getUploadEvents(req,res){
    knex('Project')
        .select('*')
        .where('Project_projectid', req.params.projectid)
        .andWhere(function(){ this.where('project_projecttype', "addDocument").orWhere('project_projecttype', "addImage")})
        .then(function(response){
            res.send(response);
        })
}