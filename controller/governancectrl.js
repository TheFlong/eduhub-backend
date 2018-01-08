var knex = require('../db/knex')


module.exports = {
    amIAuthor,
    amIEditor

};

function amIAuthor(req, res){
    knex('UserHasProject')
        .count('uhp_idproject as CNT')
        .where(function (){ 
        this.where('uhp_idproject', req.params.uhp_idproject)
                .andWhere('uhp_iduser', req.params.uhp_iduser)
                .andWhere('uhp_userrole', 'author')
        })
        .then(function(response){
            res.send({
                response: response[0].CNT
            });
        })
}

function amIEditor(req, res){
    knex('UserHasProject')
        .count('uhp_idproject as CNT')
        .where(function (){ 
        this.where('uhp_idproject', req.params.uhp_idproject)
                .andWhere('uhp_iduser', req.params.uhp_iduser)
                .andWhere('uhp_userrole', 'editor')
        })
        .then(function(response){
            res.send({
                response: response[0].CNT
            });
        })
}
