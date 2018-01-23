var knex = require('../db/knex')

module.exports = {
    searchString,
    searchStringwithCat,
    searchCat
}
//Suche nach Teilstring in Tags und Projektnamen
function searchString(req,res){
        knex.select('projectid','project_name','project_text','project_karma','project_projecttype','project_author','project_activity','project_statement','project_imagepath','project_writeRights','project_membercount','project_favcount','project_termin','project_change','Project_projectid','project_created_at','project_updated_at')
        .from('Project')
        .where('project_projecttype', "newProject")
        .andWhere('project_name', 'like', '%' + req.params.project_name + '%')
        .union (function(){
            this.select('projectid','project_name','project_text','project_karma','project_projecttype','project_author','project_activity','project_statement','project_imagepath','project_writeRights','project_membercount','project_favcount','project_termin','project_change','Project_projectid','project_created_at','project_updated_at')
                .from('Project')
                .join('ProjectHasTag', 'pht_idproject', 'projectid')
                .join('Tag', 'tagid', 'pht_idtag')
                .where('project_projecttype', "newProject")
                .andWhere('tag_name', 'like', '%' + req.params.project_name + '%')
        })
        .union (function(){
            this.select('projectid','project_name','project_text','project_karma','project_projecttype','project_author','project_activity','project_statement','project_imagepath','project_writeRights','project_membercount','project_favcount','project_termin','project_change','Project_projectid','project_created_at','project_updated_at')
                .from('Project')
                .join('ProjectHasResource', 'phr_idproject', 'projectid')
                .join('Resource', 'resourceid', 'phr_idresource')
                .where('project_projecttype', "newProject")
                .andWhere('resource_name', 'like', '%' + req.params.project_name + '%')
        })
        .then( User => res.send(User))
}

function searchStringwithCat(req,res){
    knex.select('projectid','project_name','project_text','project_karma','project_projecttype','project_author','project_activity','project_statement','project_imagepath','project_writeRights','project_membercount','project_favcount','project_termin','project_change','Project_projectid','project_created_at','project_updated_at')
    .from('Project')
    .where('project_projecttype', "newProject")
    .andWhere('project_name', 'like', '%' + req.params.project_name + '%')
    .andWhere('project_activity', req.params.project_activity)
    .union (function(){
        this.select('projectid','project_name','project_text','project_karma','project_projecttype','project_author','project_activity','project_statement','project_imagepath','project_writeRights','project_membercount','project_favcount','project_termin','project_change','Project_projectid','project_created_at','project_updated_at')
            .from('Project')
            .join('ProjectHasTag', 'pht_idproject', 'projectid')
            .join('Tag', 'tagid', 'pht_idtag')
            .where('project_projecttype', "newProject")
            .andWhere('tag_name', 'like', '%' + req.params.project_name + '%')
    })
    .union (function(){
        this.select('projectid','project_name','project_text','project_karma','project_projecttype','project_author','project_activity','project_statement','project_imagepath','project_writeRights','project_membercount','project_favcount','project_termin','project_change','Project_projectid','project_created_at','project_updated_at')
            .from('Project')
            .join('ProjectHasResource', 'phr_idproject', 'projectid')
            .join('Resource', 'resourceid', 'phr_idresource')
            .where('project_projecttype', "newProject")
            .andWhere('resource_name', 'like', '%' + req.params.project_name + '%')
            .andWhere('project_activity', req.params.project_activity)
    })
    .then( User => res.send(User))
}

function searchCat(req,res){
    knex.select('projectid','project_name','project_text','project_karma','project_projecttype','project_author','project_activity','project_statement','project_imagepath','project_writeRights','project_membercount','project_favcount','project_termin','project_change','Project_projectid','project_created_at','project_updated_at')
    .from('Project')
    .where('project_projecttype', "newProject")
    .andWhere('project_activity', req.params.project_activity)
    .union (function(){
        this.select('projectid','project_name','project_text','project_karma','project_projecttype','project_author','project_activity','project_statement','project_imagepath','project_writeRights','project_membercount','project_favcount','project_termin','project_change','Project_projectid','project_created_at','project_updated_at')
            .from('Project')
            .join('ProjectHasTag', 'pht_idproject', 'projectid')
            .join('Tag', 'tagid', 'pht_idtag')
            .where('project_projecttype', "newProject")
            .andWhere('tag_name', 'like', '%' + req.params.project_name + '%')
    })
    .union (function(){
        this.select('projectid','project_name','project_text','project_karma','project_projecttype','project_author','project_activity','project_statement','project_imagepath','project_writeRights','project_membercount','project_favcount','project_termin','project_change','Project_projectid','project_created_at','project_updated_at')
            .from('Project')
            .join('ProjectHasResource', 'phr_idproject', 'projectid')
            .join('Resource', 'resourceid', 'phr_idresource')
            .where('project_projecttype', "newProject")
            .andWhere('project_activity', req.params.project_activity)
    })
    .then( User => res.send(User))

}
