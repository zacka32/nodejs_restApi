var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'meeting_room'
});

conn.connect((err)=> {
    if(err) throw err;
    console.log('mysql Terkoneksi')
});

module.exports = conn;