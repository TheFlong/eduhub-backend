
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('Resource').insert([
        {resourceid: 1, name: 'Ipad'},
        {resourceid: 2, name: 'Tafel'},
        {resourceid: 3, name: 'Stuhl'},
        {resourceid: 4, name: 'Ladekabel'},
        {resourceid: 5, name: 'Tür'},
      ]);
    });
};
