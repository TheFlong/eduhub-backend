
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('Image').del()
      .then(function () {
        // Inserts seed entries
        return knex('Image').insert([
          { 
            imageid: 1, 
            name: 'Bild',
            imagepath: "5.jpg", 
            idproject: 1 
          },
          {
            imageid: 2, 
            name: 'Bild',
            imagepath: "5.jpg", 
            idproject: 2
          },
        ]);
      });
  };
  