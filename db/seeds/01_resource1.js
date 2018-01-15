exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('Resource').insert([
        
        {resourceid: 1, resource_name: 'Ipad'},
        {resourceid: 2, resource_name: 'Tafel'},
        {resourceid: 3, resource_name: 'Stuhl'},
        {resourceid: 4, resource_name: 'Ladekabel'},
        {resourceid: 5, resource_name: 'Tür'},
        {resourceid: 6, resource_name: 'Räumlichkeiten'},
        {resourceid: 7, resource_name: 'PC-Arbeitsplätze'},
        {resourceid: 8, resource_name: 'Literatur'},
        {resourceid: 9, resource_name: 'Tische'},
        {resourceid: 10, resource_name: 'Medien'},
        {resourceid: 11, resource_name: 'Handys'},
        {resourceid: 12, resource_name: 'Software'},
        {resourceid: 13, resource_name: 'PC'},
        {resourceid: 14, resource_name: 'Internet'},
        {resourceid: 15, resource_name: 'Screens'},
        {resourceid: 16, resource_name: 'Tablet'},
        {resourceid: 17, resource_name: 'IT-Experten'},
        {resourceid: 18, resource_name: 'Klassenbuch'},
        {resourceid: 19, resource_name: 'Budget'},
        {resourceid: 20, resource_name: 'Laptop'},
        {resourceid: 21, resource_name: 'Literatur'},
        {resourceid: 22, resource_name: 'Turnhallen'},
        {resourceid: 23, resource_name: 'Bälle'},
        {resourceid: 24, resource_name: 'Trikots'},
        {resourceid: 25, resource_name: 'Pokal'},
        {resourceid: 26, resource_name: 'Netze'},
        {resourceid: 27, resource_name: 'Ölfarben'},              
        {resourceid: 28, resource_name: 'Leinwände'},
        {resourceid: 29, resource_name: 'Bilderrahmen'},
        {resourceid: 30, resource_name: 'Pinsel'},
        {resourceid: 32, resource_name: 'Farben'},
        {resourceid: 33, resource_name: 'Kostüme'},
        {resourceid: 34, resource_name: 'Requisite'},
        {resourceid: 35, resource_name: 'Eintrittskarten'},
        {resourceid: 36, resource_name: 'Wechselgeld'},
        {resourceid: 37, resource_name: 'Kasse'},
        {resourceid: 38, resource_name: 'Bibliothek'},
      ]);
    });
};