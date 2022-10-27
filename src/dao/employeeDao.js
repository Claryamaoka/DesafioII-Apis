const mySqlConfig = require("../dao/mysql");
const { Pool } = require("../dao/mysql");

let pool = "";
class EmployeeDao {
    constructor() {
        pool = Pool();
    }

    readAllData() {
        const promise = new Promise((resolve, reject) => {
            pool.getConnection(function(err, conn) {
                if (err) rej(err);
                console.log("Connection established.");
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
                conn.release();
            });
        });
        return promise;
    }

    readData(code) {
        conn.query('SELECT * FROM tb_employees where name = ' + code,
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

    async insertData2(body) {
        pool.query('CALL sp_create_employee(?)', body,
            function (err, results, fields) {
                if (err) throw err;
                console.log('Inserted ' + results.affectedRows + ' row(s).');
            })
            pool.end(function (err) {
            if (err) throw err;
            else console.log('Done.')
        });
    }

    insertData(body) {
        const promise = new Promise((resolve, reject) => {
            pool.getConnection(function(err, conn) {
            if (err) rej(err);
            pool.query('CALL sp_create_employee(?,?,?,?,?,?,?)', [body.name,body.rg,body.cpf,body.genre,body.birthday,body.admission,body.resignation],
                function (err, results, fields) {
                    if (err) throw err;
                    console.log('Inserted ' + results.affectedRows + ' row(s).');
                    resolve(results);
                })
            conn.release();
            });
        });
        return promise;
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
    
    deleteData(code) {
        const promise = new Promise((resolve, reject) => {
                pool.getConnection(function(err, conn) {
                    if (err) rej(err);
                    console.log("Connection established.");
            conn.query('CALL sp_delete_employee(?)', [code],
                function (err, results, fields) {
                    if (err) throw err;
                    console.log('Inserted ' + results.affectedRows + ' row(s).');
                    resolve(results);
                })
            conn.release();
                });
            });
        return promise;
    }
}

module.exports = new EmployeeDao();
