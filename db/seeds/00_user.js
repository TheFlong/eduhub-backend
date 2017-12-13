
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('User').del()
    .then(function () {
      // Inserts seed entries
      return knex('User').insert([
        {
          userid: 1,
          forename: "Maria",
          surname: "Müller",
          email: "maria@mueller.net",

          street: "Sesamstrasse",
          city: "Köln",
          number: 24,
          postcode: 51067,

          schoolid: 1,
          function: "Lehrer",
          subject1: "Latein",
          subject2: "Englisch",
          subject3: "Mathe",

          interests1: "Sprachen",
          interests2: "Kinder",
          interests3: "Computer",

          profilpic: "images/1.jpg"
          
        
        },
        {
          userid: 2,
          forename: "Senta",
          surname: "Kramer",
          email: "senta@kramer.net",

          street: "Seidengasse",
          city: "Köln",
          number: 5,
          postcode: 51114,

          schoolid: 1,
          function: "Lehrer",
          subject1: "Erdkunde",
          subject2: "Sport",
          subject3: "Religion",

          interests1: "Gemeinschaft",
          interests2: "Vulkane",
          interests3: "Fechten",

          profilpic: "images/2.jpg"
          
        
        },
        {
          userid: 3,
          forename: "Stefan",
          surname: "Schmidt",
          email: "stefan@schmidt.net",

          street: "Volksgarten",
          city: "Köln",
          number: 351,
          postcode: 51167,

          schoolid: 1,
          function: "Lehrer",
          subject1: "Sport",
          subject2: "Mathe",
          subject3: "Informatik",

          interests1: "Schwimmen",
          interests2: "Computer",
          interests3: "Zahlen",

          profilpic: "images/3.jpg"
          
        
        },
        {
          userid: 4,
          forename: "Karen",
          surname: "Becker",
          email: "karen@becker.net",

          street: "Silbersee",
          city: "Köln",
          number: 1,
          postcode: 50678,

          schoolid: 2,
          function: "Vertrauenslehrer",
          subject1: "Deutsch",
          subject2: "Türkisch",
          subject3: "Gemeinschaftskunde",

          interests1: "Menschen",
          interests2: "Kinder",
          interests3: "Musik",

          profilpic: "images/4.jpg"
          
        
        },
        {
          userid: 5,
          forename: "Saskia",
          surname: "Gerdes",
          email: "saskia@gerdes.net",

          street: "Schwarzwaldstraße",
          city: "Köln",
          number: 17,
          postcode: 50737,

          schoolid: 2,
          function: "Oberstudienrat",
          subject1: "Mathe",
          subject2: "Biologie",
          subject3: "Ethik",

          interests1: "Ordnung",
          interests2: "Disziplin",
          interests3: "Technik",

          profilpic: "images/5.jpg"
          
        
        },
        {
          userid: 6,
          forename: "Walter",
          surname: "Wight",
          email: "walter@wight.net",

          street: "Schenkelgasse",
          city: "Köln",
          number: 736,
          postcode: 50933,

          schoolid: 2,
          function: "Lehrer",
          subject1: "Chemie",
          subject2: "Physik",
          subject3: "Mathe",

          interests1: "Technik",
          interests2: "Experimente",
          interests3: "Campen",

          profilpic: "images/6.jpg"
          
        
        },
        {
          userid: 7,
          forename: "Adam",
          surname: "Natalie",
          email: "adam@natalie.net",

          street: "Gemingenstraße",
          city: "Köln",
          number: 52,
          postcode: 50859,

          schoolid: 2,
          function: "Rektor",
          subject1: "Politik",
          subject2: "Wirtschaft",
          subject3: "Technik",

          interests1: "Geographie",
          interests2: "Kulturen",
          interests3: "aktuelles Weltgeschehen",

          profilpic: "images/7.jpg"
          
        
        },
        {
          userid: 8,
          forename: "Bernd",
          surname: "Schneider",
          email: "bernd@schneider.net",

          street: "Schillerstraße",
          city: "Köln",
          number: 2434,
          postcode: 51067,

          schoolid: 3,
          function: "Lehrer",
          subject1: "Latein",
          subject2: "Geschichte",
          subject3: "Kunst",

          interests1: "Kunstgallerien",
          interests2: "Reisen",
          interests3: "Veranstalungsorganisation",

          profilpic: "images/8.jpg"
          
        
        },
        {
          userid: 9,
          forename: "Kim",
          surname: "Zentung",
          email: "kim@zentung.net",

          street: "Parkstraße",
          city: "Köln",
          number: 12,
          postcode: 51067,

          schoolid: 3,
          function: "Lehrer",
          subject1: "Kunst",
          subject2: "Musik",
          subject3: "Deutsch",

          interests1: "Sprachen",
          interests2: "China",
          interests3: "Kultureller Austausch",

          profilpic: "images/9.jpg"
          
        
        },
        {
          userid: 10,
          forename: "Abba",
          surname: "Guambo",
          email: "abba@mguambo.net",

          street: "Sionplatz",
          city: "Köln",
          number: 21,
          postcode: 51567,

          schoolid: 3,
          function: "Rektor",
          subject1: "Englisch",
          subject2: "Geschichte",
          subject3: "Politik",

          interests1: "Frieden",
          interests2: "Macht",
          interests3: "Gerechtigkeit",

          profilpic: "images/10.jpg"
          
        
        },
        
      ]);
    });
};
