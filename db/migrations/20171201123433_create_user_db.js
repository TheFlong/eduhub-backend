
exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('School', function(table){
          table.increments('schoolid').primary();
          table.timestamp('created_at').defaultTo(knex.fn.now());
          table.timestamp('updated_at').defaultTo(knex.fn.now());
          table.string('name');
          table.string('street');
          table.integer('number');
          table.integer('postcode');
          table.string('city');
          table.integer('studentnumber');
       })
      .createTable('User', function(table){
            table.increments('userid').primary();
            table.string('email');
            table.string('name');
            table.string('surname');
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
            table.integer('karma');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
         })
      .createTable('Project', function(table){
          table.increments('projectid').primary();
          table.string('name');
          table.string('text', 4000);
          table.integer('karma');
          table.string('projecttype');
          table.integer('author');
          table.string('activity');
          table.string('statement', 4000);
          table.string('imagepath');
          table.integer('writeRights');
          table.integer('Project_projectid').unsigned().references('projectid').inTable('Project');
          table.timestamp('created_at').defaultTo(knex.fn.now());
          table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
      .createTable('UserHasProject', function(table){
          table.increments('userhasprojectid').primary();
          table.integer('iduser').unsigned().references('userid').inTable('User').onDelete('CASCADE');
          table.integer('idproject').unsigned().references('projectid').inTable('Project').onDelete('CASCADE');
          table.string('userrole');
        })
      .createTable('Tag', function(table){
          table.increments('tagid').primary();
          table.string('name');
        })
      .createTable('ProjectHasTag', function(table){
          table.increments('projecthastagid').primary();
          table.integer('idtag').unsigned().references('tagid').inTable('Tag');
          table.integer('idproject').unsigned().references('projectid').inTable('Project');
        })
      .createTable('Resource', function(table) {
          table.increments('resourceid').primary();
          table.string('name');
        })
      .createTable('ProjectHasResource', function(table){
          table.increments('projecthasresourceid').primary();
          table.integer('idresource').unsigned().references('resourceid').inTable('Resource');
          table.integer('idproject').unsigned().references('projectid').inTable('Project');
        })
      .createTable('Image', function(table){
          table.increments('imageid').primary();
          table.string('name');
          table.string('imagepath', 500);
          table.boolean('deleted').notNullable().defaultTo(false);
          table.integer('idproject').unsigned().references('projectid').inTable('Project');
          table.timestamp('created_at').defaultTo(knex.fn.now());
          table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
      .createTable('Document', function(table){
          table.increments('documentid').primary();
          table.string('name');
          table.string('documentpath', 500);
          table.boolean('deleted').notNullable().defaultTo(false);
          table.integer('idproject').unsigned().references('projectid').inTable('Project');
          table.timestamp('created_at').defaultTo(knex.fn.now());
          table.timestamp('updated_at').defaultTo(knex.fn.now());
        })

  };

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('School').dropTable('User');
};
