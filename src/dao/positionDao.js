const mySqlConfig = require("../dao/mysql");
const { Pool } = require("../dao/mysql");

let pool = "";
class PositionDao{
    constructor(){
        pool = Pool();
    }

    readAllData() {
        const promise = new Promise((resolve, reject) => {
            pool.getConnection(function(err, conn) {
                if (err) rej(err);
                console.log("Connection established.");
                conn.query('SELECT * FROM tb_positions',
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

    insertData(body){
        conn.query('CALL sp_create_position(?)', body, 
        function (err, results, fields) {
            if (err) throw err;
                console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
        conn.end(function (err) { 
            if (err) throw err;
            else  console.log('Done.') 
        });
    }

    updateData(body, code){
        conn.query('CALL sp_update_position(?,?)', [body,code], 
        function (err, results, fields) {
            if (err) throw err;
                console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
        conn.end(function (err) { 
            if (err) throw err;
            else  console.log('Done.') 
        });
    }

    deleteData(code) {
        const promise = new Promise((resolve, reject) => {
                pool.getConnection(function(err, conn) {
                    if (err) rej(err);
                    console.log("Connection established.");
            conn.query('CALL sp_delete_position(?)', [code],
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

module.exports = new PositionDao();