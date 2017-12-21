
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('Document').del()
      .then(function () {
        // Inserts seed entries
        return knex('Document').insert([
          {
            documentid: 1,
            document_idproject: 8,
            document_name: "Infomaterial_SLZ",
            document_documentpath: "documents/Infomaterial_SLZ.pdf"
          },
          {
            documentid: 2,
            document_idproject: 13,
            document_name: "Mustervorlage_Nutzerordnung_EDV",
            document_documentpath: "documents/Mustervorlage_Nutzerordnung_EDV.pdf"
          },
          {
            documentid: 3,
            document_idproject: 14,
            document_name: "SLZ_Oeffnungszeiten_Aug_2017",
            document_documentpath: "documents/SLZ_Oeffnungszeiten_Aug_2017.pdf"
          },


        ]);
      });
  };
  