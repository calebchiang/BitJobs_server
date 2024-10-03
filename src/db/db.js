const { Pool } = require('pg');
require('dotenv').config({ path: '../../.env' });

const {
    RDS_HOSTNAME,
    RDS_PORT,
    RDS_DB_NAME,
    RDS_USERNAME,
    RDS_PASSWORD
} = process.env;


const pool = new Pool({
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DB_NAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    ssl: {
      rejectUnauthorized: false, 
    },
  });

module.exports = { pool };
