
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('User').del()
    .then(function () {
      // Inserts seed entries
      return knex('User').insert([
        {
          userid: 1,
          name: "Maria",
          surname: "Müller",
          email: "s688527@mvrht.net",
          street: "Sesamstrasse",
          city: "Köln",
          number: 24,
          postcode: 51067,
          function: "Lehrer",
          subject1: "Latein",
          subject2: "Englisch",
          subject3: "Mathe"
          
        
        },
        {
          userid: 2,
          name: "Elvis",
          surname: "Presley",
          email: "s256349@mvrht.net",
          street: "Kingsroad",
          city: "Memphis",
          number: 1,
          postcode: 10000,
          function: "Lehrer",
          subject1: "Musik",
          subject2: "Sport",
          subject3: "Gemeinschatskunde",
          
        }
      ]);
    });
};
