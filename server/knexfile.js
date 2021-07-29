module.exports = {

    development: {
        client: 'mysql2',
        version: '8.0',

        connection: {
            host: 'db',
            port : '3306',
            user: 'username',
            password: 'password',
            database: 'githubcrm',
        },

        migrations: {
            directory: "./db/migrations"
        },
    },

};
