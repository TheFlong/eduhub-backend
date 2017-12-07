
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Project').del()
    .then(function () {
      // Inserts seed entries
      return knex('Project').insert([
        { projectid: 1, 
          name: 'Bundesjugendspiele',
          text: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam", 
          karma: 25,
          projecttype: "newProject",
          author: 1

          
        },
        {projectid: 2, 
          name: 'Selbstlernzentrum',
          text: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam", 
          karma: 25,
          projecttype: "newProject",
          author: 2
          
        },
        
      ]);
    });
};
