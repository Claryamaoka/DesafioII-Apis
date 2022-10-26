const mySqlConfig = require("../dao/mysql");

let conn = "";
class EmployeeDao {
    constructor() {
        conn = mySqlConfig.Connect();
    }

    connect() {

    }

readAllData() {
        conn.connect();
        console.log(conn);
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
    }

    readData(code) {
        conn.query('SELECT * FROM inventory where id = ' + code,
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
                else console.log('Closing connection.')
            });
    }

    insertData(body) {
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

    updateData(body, code) {
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