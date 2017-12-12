
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('School').del()
    .then(function () {
      // Inserts seed entries
      return knex('School').insert([
        {
          id: 1, 
          name: 'Lise-Meitner-Gesamtschule',
          street: 'Stresemannstraße',
          number: 36,
          postcode: 51149,
          city: 'Köln',
          studentnumber : 900
        },
        {
          id: 2, 
          name: 'Kaiserin-Augusta-Schule',
          street: 'Georgsplatz',
          number: 10,
          postcode: 50676,
          city: 'Köln',
          studentnumber : 1050
        },
        {
          id: 3, 
          name: 'Deutzer Gymnasium',
          street: 'Schaurtestraße',
          number: 1,
          postcode: 50679,
          city: 'Köln',
          studentnumber : 576
        }
      ]);
    });
};
