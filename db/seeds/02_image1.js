exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('Image').del()
      .then(function () {
        // Inserts seed entries
        return knex('Image').insert([
//SLZ
{ 
    imageid: 1, 
    src: 'http://backend-edu.azurewebsites.net/images/SLZ1.jpeg',
    thumbnail: 'http://backend-edu.azurewebsites.net/images/SLZ1.jpeg',
    image_idproject: 15 
  },

  { 
    imageid: 2, 
    src: 'http://backend-edu.azurewebsites.net/images/SLZ2.jpeg',
    thumbnail: 'http://backend-edu.azurewebsites.net/images/SLZ2.jpeg',
    image_idproject: 16 
  },

  { 
    imageid: 3, 
    src: 'http://backend-edu.azurewebsites.net/images/SLZ3.jpeg',
    thumbnail: 'http://backend-edu.azurewebsites.net/images/SLZ3.jpeg',
    image_idproject: 17 
  },

  { 
    imageid: 4, 
    src: 'http://backend-edu.azurewebsites.net/images/SLZ4.jpg',
    thumbnail: 'http://backend-edu.azurewebsites.net/images/SLZ4.jpg',
    image_idproject: 18 
  },

  { 
    imageid: 5, 
    src: 'http://backend-edu.azurewebsites.net/images/SLZ5.jpeg',
    thumbnail: 'http://backend-edu.azurewebsites.net/images/SLZ5.jpeg',
    image_idproject: 19
  },
/* 
  //Schule als Staat
  { 
    imageid: 7, 
    image_imagepath: "images/Schule_Staat.jpg", 
    image_idproject:39
  },

  { 
    imageid: 8, 
    image_imagepath: "images/Schule1.jpg", 
    image_idproject: 43
  },

  { 
    imageid: 9, 
    image_imagepath: "images/Schule2.jpg", 
    image_idproject: 44
  },

  { 
    imageid: 10, 
    image_imagepath: "images/Schule3.jpg", 
    image_idproject: 45
  },

  { 
    imageid: 11, 
    image_imagepath: "images/Schule4.jpg", 
    image_idproject: 46
  },

  //Digitales Klassenbuch

  { 
    imageid: 12, 
    image_imagepath: "images/Digital_Klassenbuch.jpg", 
    image_idproject:28
  },

  { 
    imageid:13, 
    image_imagepath: "images/DK1.jpeg", 
    image_idproject: 35
  },

  { 
    imageid: 14, 
    image_imagepath: "images/DK2.jpg", 
    image_idproject: 36
  },

  { 
    imageid: 15, 
    image_imagepath: "images/DK3.jpg", 
    image_idproject: 37
  },

  { 
    imageid: 16, 
    image_imagepath: "images/DK4.jpg", 
    image_idproject: 38
  },

  //Vernissage
  { 
    imageid: 17, 
    image_imagepath: "images/Vernissage.jpeg", 
    image_idproject:47,
  },

  { 
    imageid:18, 
    image_imagepath: "images/V1.jpg", 
    image_idproject: 51,
  },

  { 
    imageid: 19, 
    image_imagepath: "images/V2.jpg", 
    image_idproject: 52,
  },

  { 
    imageid: 20, 
    image_imagepath: "images/V3.jpeg", 
    image_idproject:53,
  },

  { 
    imageid: 21, 
    image_imagepath: "images/V4.jpeg", 
    image_idproject: 54,
  },
  { 
    imageid: 22, 
    image_imagepath: "images/V5.jpeg", 
    image_idproject: 55,
  },


  
   */
  
]);
});
};