
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
          author: 1,
          imagepath: "/images/Chrysatheum.jpg"

          
        },
        {projectid: 2, 
          name: 'Selbstlernzentrum',
          text: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam", 
          karma: 25,
          projecttype: "newProject",
          author: 2,
          imagepath: "/images/Desert.jpg"
          
        },
        {projectid: 3, 
          name: 'Schnitzelwerkstatt',
          text: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam", 
          karma: 25,
          projecttype: "newProject",
          author: 2,
          imagepath: "/images/Hydrangeas.jpg"
          
        },
        {
          projectid: 4, 
          name: 'Freudenhaus',
          text: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam", 
          karma: 25,
          projecttype: "newProject",
          author: 2,
          imagepath: "/images/Jellyfish.jpg"
          
        },
        {
          projectid: 5, 
          name: 'Wiesenbesuch',
          text: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam", 
          karma: 25,
          projecttype: "newProject",
          author: 2,
          imagepath:"/images/Koala.jpg"
          
        },
        {
          projectid: 6, 
          name: 'Keine Schule heute',
          text: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam", 
          karma: 25,
          projecttype: "newProject",
          author: 2,
          imagepath: "/images/Lighthouse.jpg"
          
        },
        {
          projectid: 7, 
          name: 'Alex sein Projekt',
          text: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam", 
          karma: 25,
          projecttype: "newProject",
          author: 2,
          imagepath: "/images/Penguins.jpg"
          
        },
        {
          projectid: 8, 
          name: 'Alex sein Projekt 2',
          text: " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam", 
          karma: 25,
          projecttype: "newProject",
          author: 2,
          imagepath: "/images/Tulips.jpg"
          
        },

      ]);
    });
};
