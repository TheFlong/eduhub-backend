
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('UserHasProject').del()
    .then(function () {
      // Inserts seed entries
      return knex('UserHasProject').insert([
        /* {userhasprojectid: 1, iduser: 1 , idproject: 1, userrole: "author"},
        {userhasprojectid: 2, iduser: 1 , idproject: 6, userrole: "author"},
        {userhasprojectid: 3, iduser: 1 , idproject: 7, userrole: "author"},
        {userhasprojectid: 4, iduser: 1 , idproject: 8, userrole: "author"},
        {userhasprojectid: 5, iduser: 5 , idproject: 2, userrole: "author"},
        {userhasprojectid: 6, iduser: 7 , idproject: 3, userrole: "author"},
        {userhasprojectid: 7, iduser: 8 , idproject: 4, userrole: "author"},
        {userhasprojectid: 8, iduser: 10 , idproject: 5, userrole: "author"}, */
        {userhasprojectid: 9, iduser: 2 , idproject: 1, userrole: "member"},
        {userhasprojectid: 10, iduser: 3 , idproject: 1, userrole: "member"},
        {userhasprojectid: 11, iduser: 4 , idproject: 1, userrole: "member"},
        {userhasprojectid: 12, iduser: 2 , idproject: 2, userrole: "member"},
        {userhasprojectid: 13, iduser: 3 , idproject: 2, userrole: "member"},
        {userhasprojectid: 14, iduser: 2 , idproject: 3, userrole: "member"},
        {userhasprojectid: 15, iduser: 2 , idproject: 4, userrole: "member"},
        {userhasprojectid: 16, iduser: 3 , idproject: 4, userrole: "member"},
        {userhasprojectid: 17, iduser: 4 , idproject: 4, userrole: "member"},
        {userhasprojectid: 18, iduser: 5 , idproject: 4, userrole: "member"},
        {userhasprojectid: 19, iduser: 2 , idproject: 5, userrole: "member"},
        {userhasprojectid: 20, iduser: 3 , idproject: 5, userrole: "member"},
        {userhasprojectid: 21, iduser: 4 , idproject: 5, userrole: "member"},
        {userhasprojectid: 22, iduser: 5 , idproject: 5, userrole: "member"},
        {userhasprojectid: 23, iduser: 6 , idproject: 5, userrole: "member"},
        {userhasprojectid: 24, iduser: 2 , idproject: 6, userrole: "member"},
        {userhasprojectid: 25, iduser: 3 , idproject: 6, userrole: "member"},
        {userhasprojectid: 26, iduser: 4 , idproject: 6, userrole: "member"},
        {userhasprojectid: 27, iduser: 5 , idproject: 6, userrole: "member"},
        {userhasprojectid: 28, iduser: 6 , idproject: 6, userrole: "member"},
        {userhasprojectid: 29, iduser: 7 , idproject: 6, userrole: "member"},
        {userhasprojectid: 30, iduser: 2 , idproject: 7, userrole: "member"},
        {userhasprojectid: 31, iduser: 3 , idproject: 7, userrole: "member"},
        {userhasprojectid: 32, iduser: 4 , idproject: 7, userrole: "member"},
        {userhasprojectid: 33, iduser: 5 , idproject: 7, userrole: "member"},
        {userhasprojectid: 34, iduser: 6 , idproject: 7, userrole: "member"},
        {userhasprojectid: 35, iduser: 7 , idproject: 7, userrole: "member"},
        {userhasprojectid: 36, iduser: 8 , idproject: 7, userrole: "member"},
        {userhasprojectid: 37, iduser: 8 , idproject: 1, userrole: "favorite"},
        {userhasprojectid: 38, iduser: 9 , idproject: 1, userrole: "favorite"},
        {userhasprojectid: 39, iduser: 10 , idproject: 1, userrole: "favorite"},
        {userhasprojectid: 40, iduser: 1 , idproject: 2, userrole: "favorite"},
        {userhasprojectid: 41, iduser: 1 , idproject: 3, userrole: "favorite"},
        {userhasprojectid: 42, iduser: 4 , idproject: 3, userrole: "favorite"},
        {userhasprojectid: 43, iduser: 8 , idproject: 3, userrole: "favorite"},
        {userhasprojectid: 44, iduser: 9 , idproject: 3, userrole: "favorite"},
        {userhasprojectid: 45, iduser: 6 , idproject: 4, userrole: "favorite"},
        {userhasprojectid: 46, iduser: 7 , idproject: 4, userrole: "favorite"},
        {userhasprojectid: 47, iduser: 8 , idproject: 5, userrole: "favorite"},
        {userhasprojectid: 48, iduser: 9 , idproject: 5, userrole: "favorite"},
        {userhasprojectid: 49, iduser: 10 , idproject: 6, userrole: "favorite"},
        {userhasprojectid: 50, iduser: 10 , idproject: 7, userrole: "favorite"},
        {userhasprojectid: 51, iduser: 5 , idproject: 8, userrole: "favorite"},
       /*  {userhasprojectid: 52, iduser: 1 , idproject: 9, userrole: "author"},
        {userhasprojectid: 53, iduser: 1 , idproject: 10, userrole: "author"}, */




        

       

        
      ]);
    });
};
