
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('UserHasProject').del()
    .then(function () {
      // Inserts seed entries
      return knex('UserHasProject').insert([
        {userhasprojectid: 1, uhp_iduser: 1 , uhp_idproject: 1, uhp_userrole: "author"},
        {userhasprojectid: 2, uhp_iduser: 1 , uhp_idproject: 6, uhp_userrole: "author"},
        {userhasprojectid: 3, uhp_iduser: 1 , uhp_idproject: 7, uhp_userrole: "author"},
        {userhasprojectid: 4, uhp_iduser: 1 , uhp_idproject: 8, uhp_userrole: "author"},
        {userhasprojectid: 5, uhp_iduser: 5 , uhp_idproject: 2, uhp_userrole: "author"},
        {userhasprojectid: 6, uhp_iduser: 7 , uhp_idproject: 3, uhp_userrole: "author"},
        {userhasprojectid: 7, uhp_iduser: 8 , uhp_idproject: 4, uhp_userrole: "author"},
        {userhasprojectid: 8, uhp_iduser: 10 , uhp_idproject: 5, uhp_userrole: "author"},
        {userhasprojectid: 9, uhp_iduser: 2 , uhp_idproject: 1, uhp_userrole: "member"},
        {userhasprojectid: 10, uhp_iduser: 3 , uhp_idproject: 1, uhp_userrole: "member"},
        {userhasprojectid: 11, uhp_iduser: 4 , uhp_idproject: 1, uhp_userrole: "member"},
        {userhasprojectid: 12, uhp_iduser: 2 , uhp_idproject: 2, uhp_userrole: "member"},
        {userhasprojectid: 13, uhp_iduser: 3 , uhp_idproject: 2, uhp_userrole: "member"},
        {userhasprojectid: 14, uhp_iduser: 2 , uhp_idproject: 3, uhp_userrole: "member"},
        {userhasprojectid: 15, uhp_iduser: 2 , uhp_idproject: 4, uhp_userrole: "member"},
        {userhasprojectid: 16, uhp_iduser: 3 , uhp_idproject: 4, uhp_userrole: "member"},
        {userhasprojectid: 17, uhp_iduser: 4 , uhp_idproject: 4, uhp_userrole: "member"},
        {userhasprojectid: 18, uhp_iduser: 5 , uhp_idproject: 4, uhp_userrole: "member"},
        {userhasprojectid: 19, uhp_iduser: 2 , uhp_idproject: 5, uhp_userrole: "member"},
        {userhasprojectid: 20, uhp_iduser: 3 , uhp_idproject: 5, uhp_userrole: "member"},
        {userhasprojectid: 21, uhp_iduser: 4 , uhp_idproject: 5, uhp_userrole: "member"},
        {userhasprojectid: 22, uhp_iduser: 5 , uhp_idproject: 5, uhp_userrole: "member"},
        {userhasprojectid: 23, uhp_iduser: 6 , uhp_idproject: 5, uhp_userrole: "member"},
        {userhasprojectid: 24, uhp_iduser: 2 , uhp_idproject: 6, uhp_userrole: "member"},
        {userhasprojectid: 25, uhp_iduser: 3 , uhp_idproject: 6, uhp_userrole: "member"},
        {userhasprojectid: 26, uhp_iduser: 4 , uhp_idproject: 6, uhp_userrole: "member"},
        {userhasprojectid: 27, uhp_iduser: 5 , uhp_idproject: 6, uhp_userrole: "member"},
        {userhasprojectid: 28, uhp_iduser: 6 , uhp_idproject: 6, uhp_userrole: "member"},
        {userhasprojectid: 29, uhp_iduser: 7 , uhp_idproject: 6, uhp_userrole: "member"},
        {userhasprojectid: 30, uhp_iduser: 2 , uhp_idproject: 7, uhp_userrole: "member"},
        {userhasprojectid: 31, uhp_iduser: 3 , uhp_idproject: 7, uhp_userrole: "member"},
        {userhasprojectid: 32, uhp_iduser: 4 , uhp_idproject: 7, uhp_userrole: "member"},
        {userhasprojectid: 33, uhp_iduser: 5 , uhp_idproject: 7, uhp_userrole: "member"},
        {userhasprojectid: 34, uhp_iduser: 6 , uhp_idproject: 7, uhp_userrole: "member"},
        {userhasprojectid: 35, uhp_iduser: 7 , uhp_idproject: 7, uhp_userrole: "member"},
        {userhasprojectid: 36, uhp_iduser: 8 , uhp_idproject: 7, uhp_userrole: "member"},
        {userhasprojectid: 37, uhp_iduser: 8 , uhp_idproject: 1, uhp_userrole: "favorite"},
        {userhasprojectid: 38, uhp_iduser: 9 , uhp_idproject: 1, uhp_userrole: "favorite"},
        {userhasprojectid: 39, uhp_iduser: 10 , uhp_idproject: 1, uhp_userrole: "favorite"},
        {userhasprojectid: 40, uhp_iduser: 1 , uhp_idproject: 2, uhp_userrole: "favorite"},
        {userhasprojectid: 41, uhp_iduser: 1 , uhp_idproject: 3, uhp_userrole: "favorite"},
        {userhasprojectid: 42, uhp_iduser: 4 , uhp_idproject: 3, uhp_userrole: "favorite"},
        {userhasprojectid: 43, uhp_iduser: 8 , uhp_idproject: 3, uhp_userrole: "favorite"},
        {userhasprojectid: 44, uhp_iduser: 9 , uhp_idproject: 3, uhp_userrole: "favorite"},
        {userhasprojectid: 45, uhp_iduser: 6 , uhp_idproject: 4, uhp_userrole: "favorite"},
        {userhasprojectid: 46, uhp_iduser: 7 , uhp_idproject: 4, uhp_userrole: "favorite"},
        {userhasprojectid: 47, uhp_iduser: 8 , uhp_idproject: 5, uhp_userrole: "favorite"},
        {userhasprojectid: 48, uhp_iduser: 9 , uhp_idproject: 5, uhp_userrole: "favorite"},
        {userhasprojectid: 49, uhp_iduser: 10 , uhp_idproject: 6, uhp_userrole: "favorite"},
        {userhasprojectid: 50, uhp_iduser: 10 , uhp_idproject: 7, uhp_userrole: "favorite"},
        {userhasprojectid: 51, uhp_iduser: 5 , uhp_idproject: 8, uhp_userrole: "favorite"},
       /*  {userhasprojectid: 52, uhp_iduser: 1 , uhp_idproject: 9, uhp_userrole: "author"},
        {userhasprojectid: 53, uhp_iduser: 1 , uhp_idproject: 10, uhp_userrole: "author"}, */




        

       

        
      ]);
    });
};
