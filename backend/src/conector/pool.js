const { Pool } = require('pg')


const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'desafiolatam',
    database: 'likeme',
    allowExitOnIdle: true
}); 

module.exports = pool;