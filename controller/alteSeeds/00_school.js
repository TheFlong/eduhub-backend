
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('School').del()
    .then(function () {
      // Inserts seed entries
      return knex('School').insert([
        {
          schoolid: 1, 
          school_name: 'Lise-Meitner-Gesamtschule',
          school_street: 'Stresemannstraße',
          school_number: 36,
          school_postcode: 51149,
          school_city: 'Köln',
          school_studentnumber : 900
        },
        {
          schoolid: 2, 
          school_name: 'Kaiserin-Augusta-Schule',
          school_street: 'Georgsplatz',
          school_number: 10,
          school_postcode: 50676,
          school_city: 'Köln',
          school_studentnumber : 1050
        },
        {
          schoolid: 3, 
          school_name: 'Deutzer Gymnasium',
          school_street: 'Schaurtestraße',
          school_number: 1,
          school_postcode: 50679,
          school_city: 'Köln',
          school_studentnumber : 576
        }
      ]);
    });
};
