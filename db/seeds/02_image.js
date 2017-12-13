
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('Image').del()
      .then(function () {
        // Inserts seed entries
        return knex('Image').insert([
          { 
            imageid: 1, 
            image_imagepath: "images/Bild.jpg", 
            image_idproject: 11 
          },
         
        ]);
      });
  };
  