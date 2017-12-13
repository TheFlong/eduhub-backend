
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('Resource').insert([
        {resourceid: 1, resource_name: 'Ipad'},
        {resourceid: 2, resource_name: 'Tafel'},
        {resourceid: 3, resource_name: 'Stuhl'},
        {resourceid: 4, resource_name: 'Ladekabel'},
        {resourceid: 5, resource_name: 'Tür'},
      ]);
    });
};
