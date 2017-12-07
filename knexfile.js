// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'edu-hub.mysql.database.azure.com',
      user:'Alex@edu-hub',
      password: 'Aherwix1',
      database: 'edu-hub',
      port: '3306',
    },
    pool: {
      min: 0
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds:{
      directory: __dirname + '/db/seeds',
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'edu-hub.mysql.database.azure.com',
      user:'Alex@edu-hub',
      password: 'Aherwix1',
      database: 'edu-hub',
      port: '3306',
    },
    pool: {
      min: 0
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds:{
      directory: __dirname + '/db/seeds',
    }
  }

};
