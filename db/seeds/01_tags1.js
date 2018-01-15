exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Tag').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tag').insert([
        {tagid: 1, tag_name: 'Schule'},
        {tagid: 2, tag_name: 'Stern'},
        {tagid: 3, tag_name: 'Keks'},
        {tagid: 4, tag_name: 'Welt'},
        {tagid: 5, tag_name: 'Ente'},
        {tagid: 6, tag_name: 'Kanu'},
        {tagid: 7, tag_name: 'Kevin'},
        {tagid: 8, tag_name: 'Git'}, 
        {tagid: 9, tag_name: 'Spenden'},
        {tagid: 10, tag_name: 'Partnerschule'},
        {tagid: 11, tag_name: 'Unterstützung'},
        {tagid: 12, tag_name: 'helfen'},
        {tagid: 13, tag_name: 'Aktion'},
        {tagid: 14, tag_name: 'Sozial'},
        {tagid: 15, tag_name: 'Schauspiel'},
        {tagid: 16, tag_name: 'Theater'},
        {tagid: 17, tag_name: 'Aufführungen'},
        {tagid: 18, tag_name: 'Veranstaltungen'},
        {tagid: 19, tag_name: 'Vernissage'},
        {tagid: 20, tag_name: 'Kunstaustellung'},
        {tagid: 21, tag_name: 'Kreativität'},
        {tagid: 22, tag_name: 'Sportwoche'},
        {tagid: 23, tag_name: 'Spiele'},
        {tagid: 24, tag_name: 'Wettkämpfe'},
        {tagid: 25, tag_name: 'Wandern'},
        {tagid: 26, tag_name: 'Radfahren'},
        {tagid: 27, tag_name: 'Schwimmen'},

        {tagid: 28, tag_name: 'Staat'},
        {tagid: 29, tag_name: 'Demokratie,'},
        {tagid: 30, tag_name: 'Schule'},
        {tagid: 31, tag_name: 'bibliothek'},
        {tagid: 32, tag_name: 'Digital'},

        {tagid: 33, tag_name: 'digitale Bibliothek'},
        {tagid: 34, tag_name: 'Öko'},
        {tagid: 35, tag_name: 'Umwelt'},
        {tagid: 36, tag_name: 'Energie sparen'},
        {tagid: 37, tag_name: 'Strom'},
        
        {tagid: 39, tag_name: 'Wasser'},
        {tagid: 40, tag_name: 'Energie'},
        {tagid: 41, tag_name: 'Klassenbuch'},
        {tagid: 42, tag_name: 'Digitales Klassenbuch'},
        {tagid: 43, tag_name: 'Forschungsprojekt'},
        
        {tagid: 44, tag_name: 'Kommunikation'},
        {tagid: 45, tag_name: 'Digitalisierung'},
        {tagid: 46, tag_name: 'SLZ'},
        {tagid: 47, tag_name: 'Selbstlernzentrum'},
        {tagid: 48, tag_name: 'Lernen'},
        
        {tagid: 49, tag_name: 'Fotos'},
        {tagid: 50, tag_name: 'Entschuldigungen'},
        {tagid: 51, tag_name: 'Information'},
        {tagid: 52, tag_name: 'Kunst'},
        {tagid: 53, tag_name: 'Medien'},
        {tagid: 54, tag_name: 'Politik'},
        
        
        
      ]);
    });
};
