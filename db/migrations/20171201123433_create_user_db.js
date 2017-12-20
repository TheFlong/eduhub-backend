
      exports.up = function(knex, Promise) {
          return knex.schema
          .createTable('ProjektInformation',function(table){
            table.increments('ProjectInformationid').primary();
            table.boolean('lehrundlernProjekt').defaultTo(false);
            table.boolean('managementProjekt').defaultTo(false);
            table.boolean('unterstuetzendesProjekt').defaultTo(false);
            table.boolean('SuchenVerarbeitenundAufbewahren').defaultTo(false);
            table.boolean('KommunizierenundKooperieren').defaultTo(false);
            table.boolean('ProduzierenundPräsentieren').defaultTo(false);
            table.boolean('Schützenundsicheragieren').defaultTo(false);
            table.boolean('ProblemelösenundHandeln').defaultTo(false);
            table.boolean('AnalysierenundReflektieren').defaultTo(false);
            table.boolean('KitaVorschule').defaultTo(false);
            table.boolean('Grundschule').defaultTo(false);
            table.boolean('Sekundarstufe1').defaultTo(false);
            table.boolean('Sekundarstufe2').defaultTo(false);
            table.boolean('HoehereHandelschule').defaultTo(false);
            table.boolean('Handelschule').defaultTo(false);
            table.boolean('Sprachen').defaultTo(false);
            table.boolean('KulturelleBildung').defaultTo(false);
            table.boolean('GeschichteGesellschaft').defaultTo(false);
            table.boolean('Naturwissenschaften').defaultTo(false);
            table.boolean('InformatiktechnischeBildung').defaultTo(false);
            table.boolean('Mathematik').defaultTo(false);
            table.boolean('Deutsch').defaultTo(false);
            table.boolean('Englisch').defaultTo(false);
            table.boolean('Physik').defaultTo(false);
            table.boolean('Chemie').defaultTo(false);
            table.boolean('Erdkunde').defaultTo(false);
            table.boolean('Sport').defaultTo(false);
            table.boolean('Kunst').defaultTo(false);
            table.boolean('Französisch').defaultTo(false);
            table.boolean('Spanisch').defaultTo(false);
            table.boolean('Italienisch').defaultTo(false);
            table.boolean('Bwl').defaultTo(false);
            table.boolean('Vwl').defaultTo(false);
            table.boolean('Informatik').defaultTo(false);
            table.boolean('Pädagogik').defaultTo(false);
            table.boolean('Politik').defaultTo(false);
            table.boolean('KeinInternet').defaultTo(false);
            table.boolean('PCLaptop').defaultTo(false);
            table.boolean('TabletSmartphone').defaultTo(false);
            table.boolean('HardwareBasteln').defaultTo(false);
            table.boolean('VideosFilme').defaultTo(false);
            table.boolean('Unterrichstreihe').defaultTo(false);
            table.boolean('Stunde').defaultTo(false);
            table.boolean('Doppelstunde').defaultTo(false);
            table.boolean('Flexibel').defaultTo(false);
            
            
            table.boolean('Klasse').defaultTo(false);
            table.boolean('Schule').defaultTo(false);
            table.boolean('Fachlich').defaultTo(false);
            table.boolean('Lehrer').defaultTo(false);
            table.boolean('Elternvertretung').defaultTo(false);
            table.boolean('Zeitmanagementbesserplanen').defaultTo(false);
            table.boolean('BudgetFinanzierung').defaultTo(false);
            table.boolean('BildungWissenvermittlung').defaultTo(false);
            table.boolean('Unterrichtneugestalten').defaultTo(false);
            table.boolean('Verwaltungverbessern').defaultTo(false);
            table.boolean('Konfliktmanagement').defaultTo(false);
            table.boolean('SonstigestrategischeZiele').defaultTo(false);
            table.boolean('Tage').defaultTo(false);
            table.boolean('Wochen').defaultTo(false);
            table.boolean('Monate').defaultTo(false);

            
            table.boolean('StadtGemeinde').defaultTo(false);
            table.boolean('Personal').defaultTo(false);
            table.boolean('Schueler').defaultTo(false);
            table.boolean('Bildung').defaultTo(false);
            table.boolean('SchulischeAusstatung').defaultTo(false);
            table.boolean('ITtechnischerSupport').defaultTo(false);
            table.boolean('VerpflegunginderSchule').defaultTo(false);
            table.boolean('Finanzierung').defaultTo(false);
            table.boolean('SozialesEngagement').defaultTo(false);
      })

      .createTable('School', function(table){
          table.increments('schoolid').primary();
          table.timestamp('school_created_at').defaultTo(knex.fn.now());
          table.timestamp('school_updated_at').defaultTo(knex.fn.now());
          table.string('school_name');
          table.string('school_street');
          table.integer('school_number');
          table.integer('school_postcode');
          table.string('school_city');
          table.integer('school_studentnumber');
       })
      .createTable('User', function(table){
            table.increments('userid').primary();
            table.string('email');
            table.string('forename');
            table.string('surname');
            table.string('user_description',1000).defaultTo("Hier könnte etwas über dich stehen.")
          //Adresse
            table.string('street');
            table.string('city');
            table.integer('number');
            table.integer('postcode');
            //Funktion und Fächer in der Schule
            table.integer('schoolid')
            table.string('function');
            table.string('subject1');
            table.string('subject2');
            table.string('subject3');
            table.string('interests1');
            table.string('interests2');
            table.string('interests3');
            table.string('profilpic');
            table.integer('user_karma');
            table.timestamp('user_created_at').defaultTo(knex.fn.now());
            table.timestamp('user_updated_at').defaultTo(knex.fn.now());
         })
      .createTable('Project', function(table){
          table.increments('projectid').primary();
          table.string('project_name');
          table.string('project_text', 4000);
          table.integer('project_karma').defaultTo(0);
          table.string('project_projecttype');
          table.integer('project_author');
          table.string('project_activity');
          table.string('project_statement', 4000);
          table.string('project_imagepath');
          table.integer('project_writeRights').defaultTo(0);
          table.integer('project_membercount').defaultTo(1);
          table.integer('project_favcount').defaultTo(0);
          table.string('project_termin');
          table.string('project_change', 4000);
          table.integer('Project_projectid').unsigned().references('projectid').inTable('Project').onDelete('CASCADE');
          table.integer('project_informationid').unsigned().references('ProjectInformationid').inTable('ProjektInformation').onDelete('CASCADE');
          table.timestamp('project_created_at').defaultTo(knex.fn.now());
          table.timestamp('project_updated_at').defaultTo(knex.fn.now());
        })
      .createTable('UserHasProject', function(table){
          table.increments('userhasprojectid').primary();
          table.integer('uhp_iduser').unsigned().references('userid').inTable('User').onDelete('CASCADE');
          table.integer('uhp_idproject').unsigned().references('projectid').inTable('Project').onDelete('CASCADE');
          table.string('uhp_userrole');
        })
      .createTable('Tag', function(table){
          table.increments('tagid').primary();
          table.string('tag_name');
        })
      .createTable('ProjectHasTag', function(table){
          table.increments('projecthastagid').primary();
          table.integer('pht_idtag').unsigned().references('tagid').inTable('Tag').onDelete('CASCADE');
          table.integer('pht_idproject').unsigned().references('projectid').inTable('Project').onDelete('CASCADE');
        })
      .createTable('Resource', function(table) {
          table.increments('resourceid').primary();
          table.string('resource_name');
        })
      .createTable('ProjectHasResource', function(table){
          table.increments('projecthasresourceid').primary();
          table.integer('phr_idresource').unsigned().references('resourceid').inTable('Resource').onDelete('CASCADE');
          table.integer('phr_idproject').unsigned().references('projectid').inTable('Project').onDelete('CASCADE');
        })
      .createTable('Image', function(table){
          table.increments('imageid').primary();
          table.string('image_name');
          table.string('src', 500);
          table.string('thumbnail',500);
          table.integer('thumbnailWidth').defaultTo(320);
          table.integer('thumbnailHeight').defaultTo(212);          
          table.boolean('image_deleted').notNullable().defaultTo(false);
          table.integer('image_idproject').unsigned().references('projectid').inTable('Project').onDelete('CASCADE');
          
        })
      .createTable('Document', function(table){
          table.increments('documentid').primary();
          table.string('document_name');
          table.string('document_documentpath', 500);
          table.boolean('document_deleted').notNullable().defaultTo(false);
          table.integer('document_idproject').unsigned().references('projectid').inTable('Project').onDelete('CASCADE');
         
        })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('School').dropTable('User');
};
