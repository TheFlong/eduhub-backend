
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Tag').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tag').insert([
        {tagid: 1, tag_name: 'Schule'},
        {tagid: 2, tag_name: 'Stern'},
        {tagid: 3, tag_name: 'Keks'},
        {tagid: 4, tag_name: 'Welt'},
        {tagid: 5, tag_name: 'Ente'},
        {tagid: 6, tag_name: 'Kanu'},
        {tagid: 7, tag_name: 'Kevin'},
        {tagid: 8, tag_name: 'Git'},
        
      ]);
    });
};
