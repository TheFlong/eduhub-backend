
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Document').del()
    .then(function () {
      // Inserts seed entries
      return knex('Document').insert([

        //SLZ
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
        // DIGITALES KLASSENBUCH
        {
          documentid: 4,
          document_idproject: 30,
          document_name: "Benutzerhandbuch",
          document_documentpath: "documents/Anleitung_Digitales_Klassenbuch.pdf"
        },
        {
          documentid: 5,
          document_idproject: 31,
          document_name: "Information",
          document_documentpath: "documents/Digitales_Klassenbuch_Schulung.pdf"
        },

        // Digitale Bibliothek

        {
          documentid: 6,
          document_idproject: 39,
          document_name: "ToDo-List",
          document_documentpath: "documents/Tasks_To_Do_List.pdf"
        },

        // Digitale Kommunikation -KEINE DOCS
        //StartGreen@School
        {
          documentid: 7,
          document_idproject: 60,
          document_name: "Projektthemen",
          document_documentpath: "documents/Unterrichtsthemen.pdf"
        },


        //Schule als Staat
        {
          documentid: 8,
          document_idproject: 67,
          document_name: "1. Unterrichtseinheit",
          document_documentpath: "documents/UE_1.pdf"
        },
        {
          documentid: 9,
          document_idproject: 68,
          document_name: "2. Unterrichtseinheit",
          document_documentpath: "documents/UE_2 .pdf"
        },
        {
          documentid: 10,
          document_idproject: 69,
          document_name: "Phase 1",
          document_documentpath: "documents/Phase1.2.pdf"
        },
        {
          documentid: 11,
          document_idproject: 70,
          document_name: "Phase 2",
          document_documentpath: "documents/UE_9.pdf"
        },


        //Spendenprojekt keine DOCS
       
        
        //Sportwoche
        {
          documentid: 12,
          document_idproject: 88,
          document_name: "Infoblatt",
          document_documentpath: "documents/Infoblatt.pdf"
        },
        {
          documentid: 13,
          document_idproject: 90,
          document_name: "Wochenplan",
          document_documentpath: "documents/Wochenplan.pdf"
        },

        // Vernissage keine DOS

      ]);
    });
};
