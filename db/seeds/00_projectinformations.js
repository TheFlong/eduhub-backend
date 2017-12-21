
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('ProjektInformation').del()
      .then(function () {
        // Inserts seed entries
        return knex('ProjektInformation').insert([
         
          {ProjectInformationid: 1 },
          {ProjectInformationid: 2 },
          {ProjectInformationid: 3 },
          {ProjectInformationid: 4 }

          
        ]);
      });
  };
  