const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const database = require("./services/database");
const loginRouter = require ("./router/login");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/static', express.static('source'))
app.set('view engine', 'ejs');
database.connect();

app.use("/",loginRouter);

const directRouter = require("./router/indexRouter");
app.use(directRouter);

app.listen(5000, console.log('Server running in port 5000'));
