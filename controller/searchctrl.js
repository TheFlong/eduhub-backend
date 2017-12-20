var knex = require('../db/knex')

module.exports = {
    searchString
}

function searchString(req,res){
    knex('Project')
    .select()
    .where('project_name', 'like', '%' + req.params.project_name + '%')
    .orderBy('project_name', 'asc')
    .then(Project => res.send(Project));
}