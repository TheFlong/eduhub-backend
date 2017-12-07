
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ProjectHasResource').del()
    .then(function () {
      // Inserts seed entries
      return knex('ProjectHasResource').insert([
        {projecthasresourceid: 1, idresource: 1, idproject: 1},
        {projecthasresourceid: 2, idresource: 2, idproject: 1},
        {projecthasresourceid: 3, idresource: 3, idproject: 1},
        {projecthasresourceid: 4, idresource: 4, idproject: 1},
        {projecthasresourceid: 5, idresource: 5, idproject: 1},
        {projecthasresourceid: 6, idresource: 1, idproject: 2},
        {projecthasresourceid: 7, idresource: 2, idproject: 2},
        {projecthasresourceid: 8, idresource: 3, idproject: 2},
        {projecthasresourceid: 9, idresource: 4, idproject: 2},
      ]);
    });
};
