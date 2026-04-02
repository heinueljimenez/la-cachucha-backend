const path = require('path');

module.exports = ({ env }) => {
  const connection = env('DATABASE_URL') 
    ? {
        client: 'postgres',
        connection: {
          connectionString: env('DATABASE_URL'),
          ssl: env.bool('DATABASE_SSL', false), // Render lo maneja internamente
        },
      }
    : {
        client: 'sqlite',
        connection: {
          filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
        },
        useNullAsDefault: true,
      };

  return {
    connection
  };
};