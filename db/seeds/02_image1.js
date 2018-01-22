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

// DIGITALES KLASSENBUCH

{ 
  imageid: 6, 
  src: 'http://backend-edu.azurewebsites.net/images/DK1.jpeg',
  thumbnail: 'http://backend-edu.azurewebsites.net/images/DK1.jpeg',
  image_idproject: 32
},
{ 
  imageid: 7, 
  src: 'http://backend-edu.azurewebsites.net/images/DK2.jpg',
  thumbnail: 'http://backend-edu.azurewebsites.net/images/DK2.jpg',
  image_idproject: 33
},
{ 
  imageid: 8, 
  src: 'http://backend-edu.azurewebsites.net/images/DK3.jpg',
  thumbnail: 'http://backend-edu.azurewebsites.net/images/DK3.jpg',
  image_idproject: 34
},
{ 
  imageid: 9, 
  src: 'http://backend-edu.azurewebsites.net/images/DK4.jpg',
  thumbnail: 'http://backend-edu.azurewebsites.net/images/DK4.jpg',
  image_idproject: 35
},

// Digitale Bibliothek
{ 
  imageid: 10, 
  src: 'http://backend-edu.azurewebsites.net/images/bib2.jpg',
  thumbnail: 'http://backend-edu.azurewebsites.net/images/bib2.jpg',
  image_idproject: 40
},
{ 
  imageid: 11, 
  src: 'http://backend-edu.azurewebsites.net/images/bib3.jpg',
  thumbnail: 'http://backend-edu.azurewebsites.net/images/bib3.jpg',
  image_idproject: 41
},

{ 
  imageid: 12, 
  src: 'http://backend-edu.azurewebsites.net/images/bib4.jpg',
  thumbnail: 'http://backend-edu.azurewebsites.net/images/bib4.jpg',
  image_idproject: 42
},
{ 
  imageid: 13, 
  src: 'http://backend-edu.azurewebsites.net/images/bib5.jpg',
  thumbnail: 'http://backend-edu.azurewebsites.net/images/bib5.jpg',
  image_idproject: 43
},
{ 
  imageid: 14, 
  src: 'http://backend-edu.azurewebsites.net/images/bib6.jpeg',
  thumbnail: 'http://backend-edu.azurewebsites.net/images/bib6.jpeg',
  image_idproject: 44
},
// Digitale Kommunikation

{ 
imageid: 15, 
src: 'http://backend-edu.azurewebsites.net/images/dkom2.jpg',
thumbnail: 'http://backend-edu.azurewebsites.net/images/dkom2.jpg',
image_idproject: 51
},
{ 
imageid: 16, 
src: 'http://backend-edu.azurewebsites.net/images/dkom3.jpeg',
thumbnail: 'http://backend-edu.azurewebsites.net/images/dkom3.jpeg',
image_idproject: 52
},
{ 
imageid: 17, 
src: 'http://backend-edu.azurewebsites.net/images/dkom4.jpeg',
thumbnail: 'http://backend-edu.azurewebsites.net/images/dkom4.jpeg',
image_idproject: 53
},
{ 
imageid: 18, 
src: 'http://backend-edu.azurewebsites.net/images/dkom5.jpeg',
thumbnail: 'http://backend-edu.azurewebsites.net/images/dkom5.jpeg',
image_idproject: 54
},

        
        //StartGreen@School
        { 
          imageid: 19, 
          src: 'http://backend-edu.azurewebsites.net/images/green1.png',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/green1.png',
          image_idproject: 61
        },
        { 
          imageid: 20, 
          src: 'http://backend-edu.azurewebsites.net/images/green2.jpg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/green2.jpg',
          image_idproject: 62
        },
        { 
          imageid: 21, 
          src: 'http://backend-edu.azurewebsites.net/images/green3.jpeg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/green3.jpeg',
          image_idproject: 63
        },
        { 
          imageid: 22, 
          src: 'http://backend-edu.azurewebsites.net/images/green4.jpeg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/green4.jpeg',
          image_idproject: 64
        },

        
        //Schule als Staat
        { 
          imageid: 23, 
          src: 'http://backend-edu.azurewebsites.net/images/Schule2.jpg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/Schule2.jpg',
          image_idproject: 71
        },
        { 
          imageid: 24, 
          src: 'http://backend-edu.azurewebsites.net/images/Schule3.jpg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/Schule3.jpg',
          image_idproject: 72
        },
        { 
          imageid: 25, 
          src: 'http://backend-edu.azurewebsites.net/images/Schule4.jpg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/Schule4.jpg',
          image_idproject: 73
        },
        { 
          imageid: 26, 
          src: 'http://backend-edu.azurewebsites.net/images/Schule5.jpg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/Schule5.jpg',
          image_idproject: 74
        },
        //Spendenprojekt
        { 
          imageid: 27, 
          src: 'http://backend-edu.azurewebsites.net/images/spende1.jpeg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/spende1.jpeg',
          image_idproject: 80
        },
        { 
          imageid: 28, 
          src: 'http://backend-edu.azurewebsites.net/images/spende2.jpg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/spende2.jpg',
          image_idproject: 81
        },
        { 
          imageid: 29, 
          src: 'http://backend-edu.azurewebsites.net/images/spende3.jpg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/spende3.jpg',
          image_idproject: 82
        },
        { 
          imageid: 30, 
          src: 'http://backend-edu.azurewebsites.net/images/spende5.jpeg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/spende5.jpeg',
          image_idproject: 83
        },
        { 
          imageid: 31, 
          src: 'http://backend-edu.azurewebsites.net/images/spende6.png',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/spende6.png',
          image_idproject: 84
        },

        //Sportwoche
        { 
          imageid: 32, 
          src: 'http://backend-edu.azurewebsites.net/images/sport2.png',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/sport2.png',
          image_idproject: 93
        },
        { 
          imageid: 33, 
          src: 'http://backend-edu.azurewebsites.net/images/sport3.png',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/sport3.png',
          image_idproject: 94
        },
        { 
          imageid: 34, 
          src: 'http://backend-edu.azurewebsites.net/images/sport4.jpeg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/sport4.jpeg',
          image_idproject: 95
        },
        { 
          imageid: 35, 
          src: 'http://backend-edu.azurewebsites.net/images/sport5.jpeg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/sport5.jpeg',
          image_idproject: 96
        },
        { 
          imageid: 36, 
          src: 'http://backend-edu.azurewebsites.net/images/sport6.jpeg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/sport6.jpeg',
          image_idproject: 97
        },

        /*

        //Vernissage

        { 
          imageid: 37, 
          src: 'http://backend-edu.azurewebsites.net/images/V1.jpg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/V1.jpg',
          image_idproject: 112
        },
        { 
          imageid: 38, 
          src: 'http://backend-edu.azurewebsites.net/images/V2.jpeg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/V2.jpeg',
          image_idproject: 113
        },
        { 
          imageid: 39, 
          src: 'http://backend-edu.azurewebsites.net/images/V3.jpeg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/V3.jpeg',
          image_idproject: 114
        },
        { 
          imageid: 40, 
          src: 'http://backend-edu.azurewebsites.net/images/V4.jpeg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/V4.jpeg',
          image_idproject: 115
        },
        { 
          imageid: 41, 
          src: 'http://backend-edu.azurewebsites.net/images/V5.jpeg',
          thumbnail: 'http://backend-edu.azurewebsites.net/images/V5.jpeg',
          image_idproject: 116
        },

        */

]);
});
};