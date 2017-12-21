exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('ProjectHasTag').del()
      .then(function () {
        // Inserts seed entries
        return knex('ProjectHasTag').insert([
          //SLZ
          {projecthastagid: 1, pht_idtag: '30', pht_idproject: '1'},
          {projecthastagid: 2, pht_idtag: '51', pht_idproject: '1'},
          {projecthastagid: 3, pht_idtag: '46', pht_idproject: '1'},
          {projecthastagid: 4, pht_idtag: '47', pht_idproject: '1'},
          {projecthastagid: 5, pht_idtag: '48', pht_idproject: '1'},
  /* 
          //Digitales Klassenbuch
          {projecthastagid: 19, pht_idtag: '41', pht_idproject: '28'},
          {projecthastagid: 20, pht_idtag: '42', pht_idproject: '28'},
          {projecthastagid: 21, pht_idtag: '43', pht_idproject: '28'},
          {projecthastagid: 22, pht_idtag: '44', pht_idproject: '28'},
          {projecthastagid: 23, pht_idtag: '45', pht_idproject: '28'},

          //Schule als Staat

          {projecthastagid: 24, pht_idtag: '28', pht_idproject: '39'},
          {projecthastagid: 25, pht_idtag: '29', pht_idproject: '39'},
          {projecthastagid: 26, pht_idtag: '30', pht_idproject: '39'},
          {projecthastagid: 27, pht_idtag: '54', pht_idproject: '39'},
          {projecthastagid: 28, pht_idtag: '48', pht_idproject: '39'},

          //Vernissage

          {projecthastagid: 29, pht_idtag: '18', pht_idproject: '47'},
          {projecthastagid: 30, pht_idtag: '19', pht_idproject: '47'},
          {projecthastagid: 31, pht_idtag: '20', pht_idproject: '47'},
          {projecthastagid: 32, pht_idtag: '21', pht_idproject: '47'},
          {projecthastagid: 33, pht_idtag: '52', pht_idproject: '47'},




 */
        ]);
      });
  };
  