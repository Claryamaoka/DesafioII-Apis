const mysql = require('mysql');

var config =
{
    host: 'findshop.mysql.database.azure.com',
    user: 'findshop_sa',
    password: '???',
    database: 'quickstartdb',
    ssl: true
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        //throw err;
    }
    else
    {
       console.log("Connection established.");
           //queryDatabase();
    }
});

function Connect(){
    return new mysql.createConnection(config);
}

