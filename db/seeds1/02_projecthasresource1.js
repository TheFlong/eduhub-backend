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
          /* 
          // Digitales Klassenbuch
          {projecthasresourceid: 15, phr_idresource: 16, phr_idproject: 28},
          {projecthasresourceid: 16, phr_idresource: 17, phr_idproject: 28},
          {projecthasresourceid: 17, phr_idresource: 18, phr_idproject: 28},
          {projecthasresourceid: 18, phr_idresource: 19, phr_idproject: 28},
          {projecthasresourceid: 19, phr_idresource: 20, phr_idproject:28},

          //Schule als Staat
          {projecthasresourceid: 20, phr_idresource: 6, phr_idproject: 39},
          {projecthasresourceid: 21, phr_idresource: 7, phr_idproject: 39},
          {projecthasresourceid: 22, phr_idresource: 8, phr_idproject: 39},
          {projecthasresourceid: 23, phr_idresource: 9, phr_idproject: 39},
          {projecthasresourceid: 24, phr_idresource: 20, phr_idproject:39},


          //Vernissage
          {projecthasresourceid: 25, phr_idresource: 27, phr_idproject: 47},
          {projecthasresourceid: 26, phr_idresource: 28, phr_idproject: 47},
          {projecthasresourceid: 27, phr_idresource: 29, phr_idproject: 47},
          {projecthasresourceid: 28, phr_idresource: 30, phr_idproject: 47},
          {projecthasresourceid: 29, phr_idresource: 31, phr_idproject:47},
 */

        ]);
      });
  };
  