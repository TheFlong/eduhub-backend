
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('UserHasProject').del()
    .then(function () {
      // Inserts seed entries
      return knex('UserHasProject').insert([
        {userhasprojectid: 1, iduser:1 , idproject: 1,},
        {userhasprojectid: 2, iduser:2 , idproject: 1,},
        {userhasprojectid: 3, iduser:1 , idproject: 2,},
        
       

        
      ]);
    });
};
