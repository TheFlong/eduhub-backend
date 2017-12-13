
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ProjectHasTag').del()
    .then(function () {
      // Inserts seed entries
      return knex('ProjectHasTag').insert([
        {projecthastagid: 1, pht_idtag: '1', pht_idproject: '1'},
        {projecthastagid: 2, pht_idtag: '2', pht_idproject: '1'},
        {projecthastagid: 3, pht_idtag: '3', pht_idproject: '1'},
        {projecthastagid: 4, pht_idtag: '4', pht_idproject: '1'},
        {projecthastagid: 5, pht_idtag: '5', pht_idproject: '1'},
        {projecthastagid: 6, pht_idtag: '6', pht_idproject: '2'},
        {projecthastagid: 7, pht_idtag: '7', pht_idproject: '2'},
        {projecthastagid: 8, pht_idtag: '8', pht_idproject: '2'},
        {projecthastagid: 9, pht_idtag: '4', pht_idproject: '2'},
        {projecthastagid: 10, pht_idtag: '5', pht_idproject: '3'},
        {projecthastagid: 11, pht_idtag: '6', pht_idproject: '3'},
        {projecthastagid: 12, pht_idtag: '7', pht_idproject: '3'},
        {projecthastagid: 13, pht_idtag: '8', pht_idproject: '4'},

      ]);
    });
};
