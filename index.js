const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const directRouter = require('./router/directRoute')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/static', express.static(path.join(__dirname, 'source')))
app.set('view engine', 'ejs');

const database = require("./services/database");
const loginRouter = require ("./router/login");
database.connect();

app.use(loginRouter);
app.use(directRouter);


app.listen(5000, console.log('Server running in port 5000'));
