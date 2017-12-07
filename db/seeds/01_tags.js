
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Tag').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tag').insert([
        {tagid: 1, name: 'Schule'},
        {tagid: 2, name: 'Stern'},
        {tagid: 3, name: 'Keks'},
        {tagid: 4, name: 'Welt'},
        {tagid: 5, name: 'Ente'},
        {tagid: 6, name: 'Kanu'},
        {tagid: 7, name: 'Kevin'},
        {tagid: 8, name: 'Git'},
        
      ]);
    });
};
