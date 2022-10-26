const mysql = require('mysql');

var config =
{
    host: 'localhost',
    port:'3306',
    user: 'root', 
    password: '',
    database: 'lpiv_desafio_n1b2'
};

function Connect() {
    const conn = new mysql.createConnection(config);

    conn.connect(
        function (err) {
            if (err) {
                console.log("!!! Cannot connect !!! Error:");
                //throw err;
            }
            else {
                console.log("Connection established.");
                //queryDatabase();
            }
        });
    return conn;
    }

    module.exports = { Connect }

}
