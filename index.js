const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const database = require("./services/database");
const loginRouter = require ("./router/login");
<<<<<<< HEAD
// const directRouter = require("./router/directRouter");
=======
>>>>>>> 5181c619c466e8c17ac27acc54f99083a5fe3358
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/static', express.static('source'))
app.set('view engine', 'ejs');
database.connect();

app.use("/",loginRouter);

<<<<<<< HEAD

const directRoutes = require('./router/directRouter');
app.use(directRoutes);

app.listen(5000, console.log('Server running in port 5000'));
=======
const directRouter = require("./router/indexRouter");
app.use(directRouter);

app.listen(5000, console.log('Server running in port 5000'));
>>>>>>> 5181c619c466e8c17ac27acc54f99083a5fe3358
