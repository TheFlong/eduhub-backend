exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ProjectHasResource').del()
    .then(function () {
      // Inserts seed entries
      return knex('ProjectHasResource').insert([
        //SLZ
        {projecthasresourceid: 1, phr_idresource: 6, phr_idproject: 1},
        {projecthasresourceid: 2, phr_idresource: 7, phr_idproject: 1},
        {projecthasresourceid: 3, phr_idresource: 8, phr_idproject: 1},
        {projecthasresourceid: 4, phr_idresource: 9, phr_idproject: 1},
        {projecthasresourceid: 5, phr_idresource: 10, phr_idproject: 1},
        
        // Digitales Klassenbuch
        {projecthasresourceid: 6, phr_idresource: 16, phr_idproject: 20 },
        {projecthasresourceid: 7, phr_idresource: 17, phr_idproject: 20},
        {projecthasresourceid: 8, phr_idresource: 18, phr_idproject:20 },
        {projecthasresourceid: 9, phr_idresource: 19, phr_idproject: 20},
        {projecthasresourceid: 10, phr_idresource: 20, phr_idproject:20},

        //Digitale Bibliothek
        {projecthasresourceid: 11, phr_idresource: 12, phr_idproject:36},
        {projecthasresourceid: 12, phr_idresource: 13, phr_idproject:36},
        {projecthasresourceid: 13, phr_idresource: 14, phr_idproject:36},
        {projecthasresourceid: 14, phr_idresource: 15, phr_idproject:36},
        {projecthasresourceid: 15, phr_idresource: 16, phr_idproject:36},
        {projecthasresourceid: 16, phr_idresource: 38, phr_idproject:36},
     
        // Digitale Kommunikation

        {projecthasresourceid: 17, phr_idresource: 11, phr_idproject: 45},
        {projecthasresourceid: 18, phr_idresource: 12, phr_idproject: 45},
        {projecthasresourceid: 19, phr_idresource: 13, phr_idproject: 45},
        {projecthasresourceid: 20, phr_idresource: 14, phr_idproject: 45},
        {projecthasresourceid: 21, phr_idresource: 15, phr_idproject: 45},
        
        //StartGreen@School 
        {projecthasresourceid: 37, phr_idresource: 1, phr_idproject: 55},
        {projecthasresourceid: 38, phr_idresource: 2, phr_idproject: 55},
        {projecthasresourceid: 39, phr_idresource: 7, phr_idproject: 55},
        {projecthasresourceid: 40, phr_idresource: 9, phr_idproject: 55},
        {projecthasresourceid: 41, phr_idresource: 14, phr_idproject:55},

        //Schule als Staat
        {projecthasresourceid: 22, phr_idresource: 6, phr_idproject: 65},
        {projecthasresourceid: 23, phr_idresource: 7, phr_idproject: 65},
        {projecthasresourceid: 24, phr_idresource: 8, phr_idproject: 65},
        {projecthasresourceid: 25, phr_idresource: 9, phr_idproject: 65},
        {projecthasresourceid: 26, phr_idresource: 20, phr_idproject:65},

        //Spendenprojekt
        {projecthasresourceid: 27, phr_idresource: 34, phr_idproject: 75},
        {projecthasresourceid: 28, phr_idresource: 35, phr_idproject: 75},
        {projecthasresourceid: 29, phr_idresource: 36, phr_idproject: 75},
        {projecthasresourceid: 30, phr_idresource: 37, phr_idproject: 75},
        {projecthasresourceid: 31, phr_idresource: 38, phr_idproject:75},
        
        //Sportwoche
        {projecthasresourceid: 32, phr_idresource: 22, phr_idproject: 85},
        {projecthasresourceid: 33, phr_idresource: 23, phr_idproject: 85},
        {projecthasresourceid: 34, phr_idresource: 24, phr_idproject: 85},
        {projecthasresourceid: 35, phr_idresource: 25, phr_idproject: 85},
        {projecthasresourceid: 36, phr_idresource: 26, phr_idproject:85},

/* 
        


        //Vernissage
        {projecthasresourceid: 37, phr_idresource: 27, phr_idproject: 98},
        {projecthasresourceid: 38, phr_idresource: 28, phr_idproject: 98},
        {projecthasresourceid: 39, phr_idresource: 29, phr_idproject: 98},
        {projecthasresourceid: 40, phr_idresource: 30, phr_idproject: 98},
        {projecthasresourceid: 41, phr_idresource: 31, phr_idproject: 98},
*/

      ]);
    });
};
