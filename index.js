const express = require('express'); //a variável express possui toda a biblioteca do pacote instalado
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const rootpath = require('rootpath');

const routes = require("./src/config/routes");


const app = express();

app.use(morgan('dev')); //adiciona o morgan ao projeto para manter record dos logs de execução
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json()); //tipo de dados q vamos receber = json
app.use(cors());

app.use(routes);

//ligar o servidor
app.listen(21262,() => {  //roda na porta indicada a função em arrow function
    console.log('Express started at http://localhost:21262')
});

