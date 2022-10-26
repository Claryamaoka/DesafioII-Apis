const mySqlConfig = require("../dao/mysql");
const { Connect } = require("../dao/mysql");

let conn = "";
class EmployeeDao {
    constructor() {
        conn = Connect();
    }

    connect() {

    }

    readAllData2() {
        conn.query('SELECT * FROM tb_employees',
            function (err, results, fields) {
                if (err) throw err;
                else console.log('Selected ' + results.length + ' row(s).');
                for (let i = 0; i <= results.length; i++) {
                    console.log('Row: ' + JSON.stringify(results[i]));
                    return JSON.stringify(results[i]);
                }
                console.log('Done.');
            })
        conn.end(
            function (err) {
                if (err) throw err;
                else console.log('Closing connection.')
            });
    }

    readAllData() {
        const promise = new Promise((resolve, reject) => {
            conn.query('SELECT * FROM tb_employees',
                function (err, results, fields) {
                    if (err) throw err;
                    else console.log('Selected ' + results.length + ' row(s).');
                    let response = []
                    for (let i = 0; i < results.length; i++) {
                        console.log('Row: ' + JSON.stringify(results[i]));
                        response.push(JSON.stringify(results[i]));
                    }
                    console.log('Done.');
                    resolve(response);
                })
            conn.end(
                function (err) {
                    //if (err) throw err;
                    if(err) reject(err);
                    else console.log('Closing connection.');
                });
        });
        return promise;
    }

    async readData(code) {
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
                else console.log('Closing connection.')
            });
    }

    async insertData(body) {
        conn.query('CALL sp_create_employee(?)', body,
            function (err, results, fields) {
                if (err) throw err;
                console.log('Inserted ' + results.affectedRows + ' row(s).');
            })
        conn.end(function (err) {
            if (err) throw err;
            else console.log('Done.')
        });
    }

    async updateData(body, code) {
        conn.query('CALL sp_update_employee(?,?)', [body, code],
            function (err, results, fields) {
                if (err) throw err;
                console.log('Inserted ' + results.affectedRows + ' row(s).');
            })
        conn.end(function (err) {
            if (err) throw err;
            else console.log('Done.')
        });
    }

    async deleteData(code) {
        conn.query('CALL sp_delete_employee(?)', code,
            function (err, results, fields) {
                if (err) throw err;
                console.log('Inserted ' + results.affectedRows + ' row(s).');
            })
        conn.end(function (err) {
            if (err) throw err;
            else console.log('Done.')
        });
    }
}

module.exports = new EmployeeDao();
