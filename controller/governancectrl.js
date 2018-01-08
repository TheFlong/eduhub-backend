var knex = require('../db/knex')


module.exports = {
    amIAuthor,
    amIEditor,
    addEditor

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

function addEditor(req,res){
    knex('UserHasProject')
        .where('uhp_idproject', req.body.uhp_idproject)
        .andWhere('uhp_iduser', req.body.uhp_iduser)
        .update({
            uhp_userrole : "editor"
        })

}

function removeEditor(req,res){

}