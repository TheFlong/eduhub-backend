
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('Image').del()
      .then(function () {
        // Inserts seed entries
        return knex('Image').insert([
          { 
            imageid: 1, 
            src: "images/Bild.jpg", 
            thumbnail: "http://backend-edu.azurewebsites.net/images/Bild.jpg",
            image_idproject: 11 
          },
         
        ]);
      });
  };
  