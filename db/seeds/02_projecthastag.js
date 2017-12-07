
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ProjectHasTag').del()
    .then(function () {
      // Inserts seed entries
      return knex('ProjectHasTag').insert([
        {projecthastagid: 1, idtag: '1', idproject: '1'},
        {projecthastagid: 2, idtag: '2', idproject: '1'},
        {projecthastagid: 3, idtag: '3', idproject: '1'},
        {projecthastagid: 4, idtag: '4', idproject: '1'},
        {projecthastagid: 5, idtag: '5', idproject: '2'},
        {projecthastagid: 6, idtag: '6', idproject: '2'},
        {projecthastagid: 7, idtag: '7', idproject: '2'},
        {projecthastagid: 8, idtag: '8', idproject: '2'},
      ]);
    });
};
