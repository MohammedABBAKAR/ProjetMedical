import mysql from 'mysql2/promise';



const dbConnection = await mysql.createConnection({
   host: process.env.DB_HOST,
   database: process.env.DB_NAME,
   user: process.env.DB_USER,
   password: '',
   namedPlaceholders: true,
});

export default dbConnection;