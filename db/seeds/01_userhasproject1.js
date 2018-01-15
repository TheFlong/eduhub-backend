exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('UserHasProject').del()
    .then(function () {
      // Inserts seed entries
      return knex('UserHasProject').insert([

        //SLZ
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
        
      
        // Digitales Klassenbuch
        {userhasprojectid: 24, uhp_iduser: 2 , uhp_idproject: 20, uhp_userrole: "author"},
        {userhasprojectid: 25, uhp_iduser: 7 , uhp_idproject: 20, uhp_userrole: "member"},
        {userhasprojectid: 26, uhp_iduser: 6 , uhp_idproject: 20, uhp_userrole: "member"},
        {userhasprojectid: 27, uhp_iduser: 7,  uhp_idproject: 21, uhp_userrole: "author"},
        {userhasprojectid: 28, uhp_iduser: 6,  uhp_idproject: 22, uhp_userrole: "author"},
        {userhasprojectid: 29, uhp_iduser: 2 , uhp_idproject: 23, uhp_userrole: "author"},
        {userhasprojectid: 30, uhp_iduser: 6 , uhp_idproject: 23, uhp_userrole: "member"},
        {userhasprojectid: 31, uhp_iduser: 7 , uhp_idproject: 23, uhp_userrole: "member"},
        {userhasprojectid: 32, uhp_iduser: 6,  uhp_idproject: 24, uhp_userrole: "author"},
        {userhasprojectid: 33, uhp_iduser: 7,  uhp_idproject: 25, uhp_userrole: "author"},
        {userhasprojectid: 34, uhp_iduser: 2 , uhp_idproject: 26, uhp_userrole: "author"},
        {userhasprojectid: 35, uhp_iduser: 6 , uhp_idproject: 27, uhp_userrole: "author"},
        {userhasprojectid: 36, uhp_iduser: 7 , uhp_idproject: 28, uhp_userrole: "author"},
        {userhasprojectid: 37, uhp_iduser: 2 , uhp_idproject: 29, uhp_userrole: "author"},
        {userhasprojectid: 38, uhp_iduser: 7,  uhp_idproject: 30, uhp_userrole: "author"},
        {userhasprojectid: 39, uhp_iduser: 7,  uhp_idproject: 31, uhp_userrole: "author"},
        {userhasprojectid: 40, uhp_iduser: 2,  uhp_idproject: 32, uhp_userrole: "author"},
        {userhasprojectid: 41, uhp_iduser: 2,  uhp_idproject: 33, uhp_userrole: "author"},
        {userhasprojectid: 42, uhp_iduser: 2,  uhp_idproject: 34, uhp_userrole: "author"},
        {userhasprojectid: 43, uhp_iduser: 2,  uhp_idproject: 35, uhp_userrole: "author"},
        
        
        // Digitale Bibliothek
        {userhasprojectid: 44, uhp_iduser: 1, uhp_idproject: 36, uhp_userrole: "author"},
        {userhasprojectid: 45, uhp_iduser: 1, uhp_idproject: 37, uhp_userrole: "author"},
        {userhasprojectid: 46, uhp_iduser: 1, uhp_idproject: 38, uhp_userrole: "author"},
        {userhasprojectid: 47, uhp_iduser: 1, uhp_idproject: 39, uhp_userrole: "author"},
        {userhasprojectid: 48, uhp_iduser: 1, uhp_idproject: 40, uhp_userrole: "author"},
        {userhasprojectid: 49, uhp_iduser: 1, uhp_idproject: 41, uhp_userrole: "author"},
        {userhasprojectid: 50, uhp_iduser: 1, uhp_idproject: 42, uhp_userrole: "author"},
        {userhasprojectid: 51, uhp_iduser: 1, uhp_idproject: 43, uhp_userrole: "author"},
        {userhasprojectid: 52, uhp_iduser: 1, uhp_idproject: 44, uhp_userrole: "author"},
       
        // Digitale Kommunikation
        {userhasprojectid: 53, uhp_iduser: 2, uhp_idproject: 45, uhp_userrole: "author"},
        {userhasprojectid: 54, uhp_iduser: 2, uhp_idproject: 46, uhp_userrole: "author"},
        {userhasprojectid: 55, uhp_iduser: 2, uhp_idproject: 47, uhp_userrole: "author"},
        {userhasprojectid: 56, uhp_iduser: 2, uhp_idproject: 48, uhp_userrole: "author"},
        {userhasprojectid: 57, uhp_iduser: 2, uhp_idproject: 49, uhp_userrole: "author"},
        {userhasprojectid: 58, uhp_iduser: 2, uhp_idproject: 50, uhp_userrole: "author"},
        {userhasprojectid: 59, uhp_iduser: 2, uhp_idproject: 51, uhp_userrole: "author"},
        {userhasprojectid: 60, uhp_iduser: 2, uhp_idproject: 52, uhp_userrole: "author"},
        {userhasprojectid: 61, uhp_iduser: 2, uhp_idproject: 53, uhp_userrole: "author"},
        {userhasprojectid: 62, uhp_iduser: 2, uhp_idproject: 54, uhp_userrole: "author"},

        
        //StartGreen@School

        {userhasprojectid: 63, uhp_iduser: 1, uhp_idproject: 55, uhp_userrole: "author"},
        {userhasprojectid: 64, uhp_iduser: 1, uhp_idproject: 56, uhp_userrole: "author"},
        {userhasprojectid: 65, uhp_iduser: 1, uhp_idproject: 57, uhp_userrole: "author"},
        {userhasprojectid: 66, uhp_iduser: 1, uhp_idproject: 58, uhp_userrole: "author"},
        {userhasprojectid: 67, uhp_iduser: 1, uhp_idproject: 59, uhp_userrole: "author"},
        {userhasprojectid: 68, uhp_iduser: 1, uhp_idproject: 60, uhp_userrole: "author"},
        {userhasprojectid: 69, uhp_iduser: 1, uhp_idproject: 61, uhp_userrole: "author"},
        {userhasprojectid: 70, uhp_iduser: 1, uhp_idproject: 62, uhp_userrole: "author"},
        {userhasprojectid: 71, uhp_iduser: 1, uhp_idproject: 63, uhp_userrole: "author"},
        {userhasprojectid: 72, uhp_iduser: 1, uhp_idproject: 64, uhp_userrole: "author"},

        //Schule als Staat
        {userhasprojectid: 73, uhp_iduser: 1, uhp_idproject: 65, uhp_userrole: "author"},
        {userhasprojectid: 74, uhp_iduser: 1, uhp_idproject: 66, uhp_userrole: "author"},
        {userhasprojectid: 75, uhp_iduser: 1, uhp_idproject: 67, uhp_userrole: "author"},
        {userhasprojectid: 76, uhp_iduser: 1, uhp_idproject: 68, uhp_userrole: "author"},
        {userhasprojectid: 77, uhp_iduser: 1, uhp_idproject: 69, uhp_userrole: "author"},
        {userhasprojectid: 78, uhp_iduser: 1, uhp_idproject: 70, uhp_userrole: "author"},
        {userhasprojectid: 79, uhp_iduser: 1, uhp_idproject: 71, uhp_userrole: "author"},
        {userhasprojectid: 80, uhp_iduser: 1, uhp_idproject: 72, uhp_userrole: "author"},
        {userhasprojectid: 81, uhp_iduser: 1, uhp_idproject: 73, uhp_userrole: "author"},
        {userhasprojectid: 82, uhp_iduser: 1, uhp_idproject: 74, uhp_userrole: "author"},

        //Spendenprojekt
        {userhasprojectid: 83, uhp_iduser: 5, uhp_idproject: 75, uhp_userrole: "author"},
        {userhasprojectid: 84, uhp_iduser: 5, uhp_idproject: 76, uhp_userrole: "author"},
        {userhasprojectid: 85, uhp_iduser: 5, uhp_idproject: 77, uhp_userrole: "author"},
        {userhasprojectid: 86, uhp_iduser: 5, uhp_idproject: 78, uhp_userrole: "author"},
        {userhasprojectid: 87, uhp_iduser: 5, uhp_idproject: 79, uhp_userrole: "author"},
        {userhasprojectid: 88, uhp_iduser: 5, uhp_idproject: 80, uhp_userrole: "author"},
        {userhasprojectid: 89, uhp_iduser: 5, uhp_idproject: 81, uhp_userrole: "author"},
        {userhasprojectid: 90, uhp_iduser: 5, uhp_idproject: 82, uhp_userrole: "author"},
        {userhasprojectid: 91, uhp_iduser: 5, uhp_idproject: 83, uhp_userrole: "author"},
        {userhasprojectid: 92, uhp_iduser: 5, uhp_idproject: 84, uhp_userrole: "author"},

        //Sportwoche
        {userhasprojectid: 93, uhp_iduser: 8, uhp_idproject: 85, uhp_userrole: "author"},
        {userhasprojectid: 94, uhp_iduser: 8, uhp_idproject: 86, uhp_userrole: "author"},
        {userhasprojectid: 95, uhp_iduser: 8, uhp_idproject: 87, uhp_userrole: "author"},
        {userhasprojectid: 96, uhp_iduser: 8, uhp_idproject: 88, uhp_userrole: "author"},
        {userhasprojectid: 97, uhp_iduser: 8, uhp_idproject: 89, uhp_userrole: "author"},
        {userhasprojectid: 98, uhp_iduser: 8, uhp_idproject: 90, uhp_userrole: "author"},
        {userhasprojectid: 99, uhp_iduser: 8, uhp_idproject: 91, uhp_userrole: "author"},
        {userhasprojectid: 100, uhp_iduser: 8, uhp_idproject:92, uhp_userrole: "author"},
        {userhasprojectid: 101, uhp_iduser: 8, uhp_idproject: 93, uhp_userrole: "author"},
        {userhasprojectid: 102, uhp_iduser: 8, uhp_idproject: 94, uhp_userrole: "author"},
        {userhasprojectid: 103, uhp_iduser: 8, uhp_idproject: 95, uhp_userrole: "author"},
        {userhasprojectid: 104, uhp_iduser: 8, uhp_idproject: 96, uhp_userrole: "author"},
        {userhasprojectid: 105, uhp_iduser: 8, uhp_idproject: 97, uhp_userrole: "author"},

        /* Vernissage
         {userhasprojectid: 106, uhp_iduser: 5, uhp_idproject: 98, uhp_userrole: "author"},
        {userhasprojectid: 107, uhp_iduser: 5, uhp_idproject: 99, uhp_userrole: "author"},
        {userhasprojectid: 108, uhp_iduser: 5, uhp_idproject: 100, uhp_userrole: "author"},
        {userhasprojectid: 109, uhp_iduser: 5, uhp_idproject: 101 uhp_userrole: "author"},
        {userhasprojectid: 110, uhp_iduser: 5, uhp_idproject: 102, uhp_userrole: "author"},
        {userhasprojectid: 111, uhp_iduser: 5, uhp_idproject: 103, uhp_userrole: "author"},
        {userhasprojectid: 112, uhp_iduser: 5, uhp_idproject: 104, uhp_userrole: "author"},
        {userhasprojectid: 113, uhp_iduser: 5, uhp_idproject: 105, uhp_userrole: "author"},
        {userhasprojectid: 114, uhp_iduser: 5, uhp_idproject: 106, uhp_userrole: "author"},
        {userhasprojectid: 115, uhp_iduser: 5, uhp_idproject: 107, uhp_userrole: "author"},
        {userhasprojectid: 116, uhp_iduser: 5, uhp_idproject: 108, uhp_userrole: "author"},
        {userhasprojectid: 117, uhp_iduser: 5, uhp_idproject: 109, uhp_userrole: "author"},
        {userhasprojectid: 118, uhp_iduser: 5, uhp_idproject: 110, uhp_userrole: "author"},
        {userhasprojectid: 119, uhp_iduser: 5, uhp_idproject: 111, uhp_userrole: "author"},
        {userhasprojectid: 120, uhp_iduser: 5, uhp_idproject: 112, uhp_userrole: "author"},
        {userhasprojectid: 121, uhp_iduser: 5, uhp_idproject: 113, uhp_userrole: "author"},
        {userhasprojectid: 122, uhp_iduser: 5, uhp_idproject: 114, uhp_userrole: "author"},
        {userhasprojectid: 123, uhp_iduser: 5, uhp_idproject: 115, uhp_userrole: "author"},
        {userhasprojectid: 124, uhp_iduser: 5, uhp_idproject: 116, uhp_userrole: "author"},
        */
        
      ]);
    });
};