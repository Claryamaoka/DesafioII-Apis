const mySqlConfig = require("../dao/mysql");
const { Connect } = require("../dao/mysql");

let conn = "";
class FeedbackDao{
    constructor(){
        conn = Connect();
    }

    readAllData(){
        conn.query('CALL sp_get_feedback', 
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

    insertData(body){
        conn.query('CALL sp_create_feedback(?)', body, 
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
        conn.query('CALL sp_update_feedback(?,?)', [body,code], 
        function (err, results, fields) {
            if (err) throw err;
                console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
        conn.end(function (err) { 
            if (err) throw err;
            else  console.log('Done.') 
        });
    }

    deleteData(code){
        conn.query('CALL sp_delete_feedback(?)', code, 
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

module.exports = new FeedbackDao();