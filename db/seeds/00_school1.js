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
            school_name: 'Gesamtschule Porz',
            school_street: 'Stresemannstraße',
            school_number: 36,
            school_postcode: 51149,
            school_city: 'Köln',
            school_studentnumber : 600
          },
          {
            schoolid: 4, 
            school_name: 'Apostelgymnasium',
            school_street: 'Biggestraße',
            school_number: 2,
            school_postcode: 50931,
            school_city: 'Köln',
            school_studentnumber : 1050
          },
          {
            schoolid: 5, 
            school_name: 'Gymnasium Lindenthal',
            school_street: '	Nikolausstr',
            school_number: 55,
            school_postcode: 50937,
            school_city: 'Köln',
            school_studentnumber : 1050
          },
          {
            schoolid: 6, 
            school_name: 'Realschule Kerpen',
            school_street: 'Bruchhöhe',
            school_number: 27,
            school_postcode: 50170,
            school_city: 'Kerpen-Sindorf',
            school_studentnumber : 1050
          },
          {
            schoolid: 7, 
            school_name: 'Berufskolleg Ehrenfeld',
            school_street: 'Weinsbergstraße',
            school_number: 72,
            school_postcode: 50823,
            school_city: 'Köln',
            school_studentnumber : 1200
          },
          
          {
            schoolid: 8, 
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
  