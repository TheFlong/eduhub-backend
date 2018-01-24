var knex = require('../db/knex')


module.exports = {
    getSchools

};
function getSchools(req,res){
    knex.select().from('School')
    .then(function(School){
        res.send(School)
    })
}
