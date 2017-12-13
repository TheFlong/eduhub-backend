
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('Image').del()
      .then(function () {
        // Inserts seed entries
        return knex('Image').insert([
          { 
            imageid: 1, 
            imagepath: "/images/Bild.jpg", 
            idproject: 11 
          },
         
        ]);
      });
  };
  