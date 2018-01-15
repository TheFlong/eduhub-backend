exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ProjectHasTag').del()
    .then(function () {
      // Inserts seed entries
      return knex('ProjectHasTag').insert([
        //SLZ  keine Anführungszeichen
        {projecthastagid: 1, pht_idtag: 30, pht_idproject: 1},
        {projecthastagid: 2, pht_idtag: 51, pht_idproject: 1},
        {projecthastagid: 3, pht_idtag: 46, pht_idproject: 1},
        {projecthastagid: 4, pht_idtag: 47, pht_idproject: 1},
        {projecthastagid: 5, pht_idtag: 48, pht_idproject: 1},

        //Digitales Klassenbuch
        {projecthastagid: 6, pht_idtag: 41, pht_idproject: 20},
        {projecthastagid: 7, pht_idtag: 42, pht_idproject: 20},
        {projecthastagid: 8, pht_idtag: 43, pht_idproject: 20},
        {projecthastagid: 9, pht_idtag: 44, pht_idproject: 20},
        {projecthastagid: 10, pht_idtag: 45, pht_idproject: 20},

        // Digitale Bibliothek
        {projecthastagid: 11, pht_idtag: 30, pht_idproject: 36},
        {projecthastagid: 12, pht_idtag: 31, pht_idproject: 36},
        {projecthastagid: 13, pht_idtag: 32, pht_idproject: 36},
        {projecthastagid: 14, pht_idtag: 33, pht_idproject: 36},
        {projecthastagid: 15, pht_idtag: 45, pht_idproject: 36},

        // Digitale Kommunikation
        {projecthastagid: 16, pht_idtag: 32, pht_idproject: 45},
        {projecthastagid: 17, pht_idtag: 44, pht_idproject: 45},
        {projecthastagid: 18, pht_idtag: 45, pht_idproject: 45},
        {projecthastagid: 19, pht_idtag: 30, pht_idproject: 45},
        {projecthastagid: 20, pht_idtag: 51, pht_idproject: 45},

        
        //StartGreen@School
        {projecthastagid: 21, pht_idtag: 34, pht_idproject: 55},
        {projecthastagid: 22, pht_idtag: 35, pht_idproject: 55},
        {projecthastagid: 23, pht_idtag: 36, pht_idproject: 55},
        {projecthastagid: 24, pht_idtag: 37, pht_idproject: 55},
        {projecthastagid: 25, pht_idtag: 39, pht_idproject: 55},

        //Schule als Staat
        {projecthastagid: 26, pht_idtag: 28, pht_idproject: 65 },
        {projecthastagid: 27, pht_idtag: 29, pht_idproject: 65},
        {projecthastagid: 28, pht_idtag: 30, pht_idproject: 65},
        {projecthastagid: 29, pht_idtag: 54, pht_idproject: 65},
        {projecthastagid: 30, pht_idtag: 48, pht_idproject: 65},

        //Spendenprojekt
        {projecthastagid: 31, pht_idtag: 9, pht_idproject: 75 },
        {projecthastagid: 32, pht_idtag: 10, pht_idproject: 75},
        {projecthastagid: 33, pht_idtag: 11, pht_idproject: 75},
        {projecthastagid: 34, pht_idtag: 12, pht_idproject: 75},
        {projecthastagid: 35, pht_idtag: 13, pht_idproject: 75},
      
        //Sportwoche
        {projecthastagid: 36, pht_idtag: 22, pht_idproject: 85 },
        {projecthastagid: 37, pht_idtag: 23, pht_idproject: 85},
        {projecthastagid: 38, pht_idtag: 24, pht_idproject: 85},
        {projecthastagid: 39, pht_idtag: 25, pht_idproject: 85},
        {projecthastagid: 40, pht_idtag: 26, pht_idproject: 85},

/* 
       
        //Vernissage

        {projecthastagid: 41, pht_idtag: 18, pht_idproject: 98},
        {projecthastagid: 42, pht_idtag: 19, pht_idproject: 98},
        {projecthastagid: 43, pht_idtag: 20, pht_idproject: 98},
        {projecthastagid: 44, pht_idtag: 21, pht_idproject: 98},
        {projecthastagid: 45, pht_idtag: 52, pht_idproject: 98},




*/
      ]);
    });
};
