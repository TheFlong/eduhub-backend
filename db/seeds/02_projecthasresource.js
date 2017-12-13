
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ProjectHasResource').del()
    .then(function () {
      // Inserts seed entries
      return knex('ProjectHasResource').insert([
        {projecthasresourceid: 1, phr_idresource: 1, phr_idproject: 1},
        {projecthasresourceid: 2, phr_idresource: 2, phr_idproject: 1},
        {projecthasresourceid: 3, phr_idresource: 3, phr_idproject: 1},
        {projecthasresourceid: 4, phr_idresource: 4, phr_idproject: 1},
        {projecthasresourceid: 5, phr_idresource: 5, phr_idproject: 1},
        {projecthasresourceid: 6, phr_idresource: 1, phr_idproject: 2},
        {projecthasresourceid: 7, phr_idresource: 2, phr_idproject: 3},
        {projecthasresourceid: 8, phr_idresource: 3, phr_idproject: 3},
        {projecthasresourceid: 9, phr_idresource: 4, phr_idproject: 2},
      ]);
    });
};
