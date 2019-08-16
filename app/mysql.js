const mysql = require("mysql");

// //run on docker

// const connection = mysql.createConnection({
//   host: process.env.DATABASE_HOST,
//   port: process.env.MYSQL_PORT,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE
// });

// connection.connect(err => {
//   if (err) console.log(err);
//   else {
//     console.log("succuss connect to database: ", process.env.MYSQL_DATABASE);
//   }
// });

// // run without docker
// const connection = mysql.createConnection({
//   host: db,
//   user: root,
//   database: keyboard_practice
// });

// connection.connect(err => {
//   if (err) console.log("fail to connect: ", err);
//   else {
//     console.log("succuss connect to database: ", keyboard_practice);
//   }
// });

module.exports = connection;
