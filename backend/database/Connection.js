const { connect } = require('http2');
const mysql = require('mysql');

var Connection = mysql.createConnection({
    host : "localhost",
    user:"root",
    password : "SHA256123456789samar",
    database : "todoList",
    multipleStatements: true,



})
Connection.connect((err) =>{
if(err){
    console.log("connection failed")
}
else {
    console.log(" database connected successfully")
}

});
module.exports = Connection