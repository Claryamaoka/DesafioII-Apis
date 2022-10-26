const mySqlConfig = require("../dao/mysql");
const { Connect } = require("../dao/mysql");

let conn = "";
class EmployeeDao{
    constructor(){
        conn = Connect();
    }

    async readAllData(){
        conn.query('CALL sp_get_employee', 
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Selected ' + results.length + ' row(s).');
            for (i = 0; i < results.length; i++) {
                console.log('Row: ' + JSON.stringify(results[i]));
            }
            console.log('Done.');
        })
        conn.end(
        function (err) { 
            if (err) throw err;
            else  console.log('Closing connection.') 
        });
    }

    async readData(code){
        conn.query('SELECT * FROM employee where id = ' + code, 
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Selected ' + results.length + ' row(s).');
            for (let i = 0; i <= results.length; i++) {
                console.log('Row: ' + JSON.stringify(results[i]));
            }
            console.log('Done.');
        })
        conn.end(
        function (err) { 
            if (err) throw err;
            else  console.log('Closing connection.') 
        });
    }

    async insertData(body){
        conn.query('CALL sp_create_employee(?)', body, 
        function (err, results, fields) {
            if (err) throw err;
                console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
        conn.end(function (err) { 
            if (err) throw err;
            else  console.log('Done.') 
        });
    }

    async updateData(body, code){
        conn.query('CALL sp_update_employee(?,?)', [body,code], 
        function (err, results, fields) {
            if (err) throw err;
                console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
        conn.end(function (err) { 
            if (err) throw err;
            else  console.log('Done.') 
        });
    }

    async deleteData(code){
        conn.query('CALL sp_delete_employee(?)', code, 
        function (err, results, fields) {
            if (err) throw err;
                console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
        conn.end(function (err) { 
            if (err) throw err;
            else  console.log('Done.') 
        });
    }
}

module.exports = new EmployeeDao();