exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('User').del()
      .then(function () {
        // Inserts seed entries
        return knex('User').insert([
          {
            userid: 1,
            forename: "Ben",
            surname: "Maier",
            email: "ben@maier.net",
  
            street: "Lindenstr.",
            city: "Bergheim",
            number: 56,
            postcode: 34566,
  
            user_schoolid: 5,
            function: "Lehrer",
            subject1: "Politik",
            subject2: "Geschichte",
            subject3: "Biologie",
  
            interests1: "Forschung",
            interests2: "Politik",
            interests3: "Bücher",
  
            profilpic: "images/benmaier.png",
            user_karma: 12
            
          
          },
          {
            userid: 2,
            forename: "Peter",
            surname: "Wolf",
            email: "peterwolf@berufskollegehrenfeld.de",
  
            street: "Steinstraße ",
            city: "Köln",
            number: 99,
            postcode:  50767,
  
            user_schoolid: 7,
            function: "Lehrer",
            subject1: "Informatik",
            subject2: "EDV-Kurs",
            subject3: "",
  
            interests1: "Technik",
            interests2: "IT",
            interests3: "Digitalisierung",
  
            profilpic: "images/peterwolf.jpeg",
            user_karma: 12
            
          
          },
          {
            userid: 3,
            forename: "Carina",
            surname: "Froitzheim",
            email: "c.froitzheim@web.de",
  
            street: "Trimbornstr",
            city: "Köln",
            number: 15,
            postcode:  52345,
  
            user_schoolid: 3,
            function: "Lehrer, SV-Beauftragte",
            subject1: "Mathematik",
            subject2: "Biologie",
            subject3: "",
  
            interests1: "Wissenvermittlung",
            interests2: "Lehren",
            interests3: "Soziales Engangement",
  
            profilpic: "images/carina.png",
            user_karma: 12
            
          
          },

          {
            userid: 4,
            forename: "Susanne",
            surname: "Fischer",
            email: "s.fischer@gesamtschule-porz.de",
  
            street: "Zum Schnepfenflug",
            city: "Hürtgenwald",
            number: 15,
            postcode:  52345,
  
            user_schoolid: 3,
            function: "Schulleiter",
            subject1: "Physik",
            subject2: "Biologie",
            subject3: "Erdkune",
  
            interests1: "Sport",
            interests2: "Wandern",
            interests3: "Theater",
  
            profilpic: "images/susanne.png",
            user_karma: 12
            
          
          },
          {
            userid: 5,
            forename: "Claudia",
            surname: "Rosenzweig",
            email: "c.rosenzweig@apostelgymnasium.de",
  
            street: "Biggestraße ",
            city: "Köln",
            number: 2,
            postcode: 50931,
  
            user_schoolid: 4,
            function: "Lehrer",
            subject1: "Philosophie",
            subject2: "Kunst",
            subject3: "Französisch",
  
            interests1: "Lesen",
            interests2: "Schwimmen",
            interests3: "Klassische Musik",
  
            profilpic: "images/Claudia.png",
            user_karma: 12
            
          
          },
          {
            userid: 6,
            forename: "Dirk",
            surname: "Spohr",
            email: "dirkspohr@berufskollegehrenfeld.de",
  
            street: "Römerstr",
            city: "Köln",
            number: 17,
            postcode: 50823,
  
            user_schoolid: 7,
            function: "Schulleiter",
            subject1: "Deutsch",
            subject2: "BWL",
            subject3: "Finanzwirtschaft",
  
            interests1: "Radfahren",
            interests2: "Reisen",
            interests3: "Klavier",
  
            profilpic: "images/dirk.png",
            user_karma: 12
            
          
          },
          {
            userid: 7,
            forename: "Renate",
            surname: "Saalfeld",
            email: "renatesaalfeld@berufskollegehrenfeld.de",
  
            street: "Chlodwigplatz",
            city: "Köln",
            number: 78,
            postcode: 50777,
  
            user_schoolid: 7,
            function: "Lehrer",
            subject1: "EDV-Kurs",
            subject2: "VWL",
            subject3: "Spanisch",
  
            interests1: "Ergonomie",
            interests2: "Gesundheit",
            interests3: "Tanzen",
  
            profilpic: "images/renate.jpeg",
            user_karma: 12    
          },
          {
            userid: 8,
            forename: "Richard",
            surname: "Reinartz",
            email: "r.reinartz@realschule-kerpen.de",
  
            street: "Theresia-von-Wüllenweber-Str",
            city: "Horrem",
            number: 28,
            postcode: 50169,
  
            user_schoolid: 6,
            function: "Lehrer",
            subject1: "Sport",
            subject2: "Deutsch",
            subject3: "Politik",
  
            interests1: "Badminton",
            interests2: "Eishockey",
            interests3: "Ski",
  
            profilpic: "images/richard.png",
            user_karma: 50    
          }
          
          
          
        ]);
      });
  };