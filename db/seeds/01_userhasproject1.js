exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('UserHasProject').del()
      .then(function () {
        // Inserts seed entries
        return knex('UserHasProject').insert([
          {userhasprojectid: 1, uhp_iduser: 3 , uhp_idproject: 1, uhp_userrole: "author"},
          {userhasprojectid: 2, uhp_iduser: 4 , uhp_idproject: 1, uhp_userrole: "member"},
          {userhasprojectid: 3, uhp_iduser: 4 , uhp_idproject: 2, uhp_userrole: "author"},
          {userhasprojectid: 4, uhp_iduser: 3 , uhp_idproject: 3, uhp_userrole: "author"},
          {userhasprojectid: 5, uhp_iduser: 4 , uhp_idproject: 3, uhp_userrole: "member"},
          {userhasprojectid: 6, uhp_iduser: 4 , uhp_idproject: 4, uhp_userrole: "author"},
          {userhasprojectid: 7, uhp_iduser: 4 , uhp_idproject: 5, uhp_userrole: "author"},
          {userhasprojectid: 8, uhp_iduser: 3 , uhp_idproject: 6, uhp_userrole: "author"},
          {userhasprojectid: 9, uhp_iduser: 4 , uhp_idproject: 6, uhp_userrole: "member"},
          {userhasprojectid: 10, uhp_iduser: 4 , uhp_idproject: 7, uhp_userrole: "author"},
          {userhasprojectid: 11, uhp_iduser: 3 , uhp_idproject: 8, uhp_userrole: "author"},
          {userhasprojectid: 12, uhp_iduser: 3 , uhp_idproject: 9, uhp_userrole: "author"},
          {userhasprojectid: 13, uhp_iduser: 3 , uhp_idproject: 10, uhp_userrole: "author"},
          {userhasprojectid: 14, uhp_iduser: 4 , uhp_idproject: 11, uhp_userrole: "author"},
          {userhasprojectid: 15, uhp_iduser: 3 , uhp_idproject: 12, uhp_userrole: "author"},
          {userhasprojectid: 16, uhp_iduser: 3 , uhp_idproject: 13, uhp_userrole: "author"},
          {userhasprojectid: 17, uhp_iduser: 3 , uhp_idproject: 14, uhp_userrole: "author"},
          {userhasprojectid: 19, uhp_iduser: 3 , uhp_idproject: 15, uhp_userrole: "author"},
          {userhasprojectid: 20, uhp_iduser: 3 , uhp_idproject: 16, uhp_userrole: "author"},
          {userhasprojectid: 21, uhp_iduser: 3 , uhp_idproject: 17, uhp_userrole: "author"},
          {userhasprojectid: 22, uhp_iduser: 3 , uhp_idproject: 18, uhp_userrole: "author"},
          {userhasprojectid: 23, uhp_iduser: 3 , uhp_idproject: 19, uhp_userrole: "author"},
          {userhasprojectid: 24, uhp_iduser: 1 , uhp_idproject: 20, uhp_userrole: "author"},
          {userhasprojectid: 25, uhp_iduser: 2 , uhp_idproject: 21, uhp_userrole: "author"},
          {userhasprojectid: 26, uhp_iduser: 3 , uhp_idproject: 22, uhp_userrole: "author"},
          {userhasprojectid: 27, uhp_iduser: 4 , uhp_idproject: 23, uhp_userrole: "author"},
          {userhasprojectid: 28, uhp_iduser: 5 , uhp_idproject: 24, uhp_userrole: "author"},
          {userhasprojectid: 29, uhp_iduser: 6 , uhp_idproject: 25, uhp_userrole: "author"},
          {userhasprojectid: 30, uhp_iduser: 7 , uhp_idproject: 26, uhp_userrole: "author"},
        








         /*  {userhasprojectid: 5, uhp_iduser: 4 , uhp_idproject: 3, uhp_userrole: "member"},
          
          
          {userhasprojectid: 9, uhp_iduser: 2 , uhp_idproject: 1, uhp_userrole: "member"},
         
          {userhasprojectid: 53, uhp_iduser: 1 , uhp_idproject: 10, uhp_userrole: "author"}, 

          //SLZ
          {userhasprojectid: 52, uhp_iduser: 14 , uhp_idproject: 12, uhp_userrole: "member"},
          {userhasprojectid: 53, uhp_iduser: 14 , uhp_idproject: 13, uhp_userrole: "member"},
          {userhasprojectid: 54, uhp_iduser: 14 , uhp_idproject: 14, uhp_userrole: "member"},
          {userhasprojectid: 55, uhp_iduser: 14 , uhp_idproject: 15, uhp_userrole: "member"},
          {userhasprojectid: 56, uhp_iduser: 14 , uhp_idproject: 17, uhp_userrole: "member"},
          
          // Digitales Klassenbuch
          {userhasprojectid: 57, uhp_iduser: 16 , uhp_idproject: 28, uhp_userrole: "member"},
          {userhasprojectid: 58, uhp_iduser: 17 , uhp_idproject: 28, uhp_userrole: "member"},
          {userhasprojectid: 59, uhp_iduser: 16 , uhp_idproject: 29, uhp_userrole: "member"},
          {userhasprojectid: 60, uhp_iduser: 17 , uhp_idproject: 29, uhp_userrole: "member"},
          
          // Schule als Statt
           */

         
  
          
        ]);
      });
  };