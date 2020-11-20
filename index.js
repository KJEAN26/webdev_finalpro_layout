const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
<<<<<<< HEAD
const database = require("./services/database");
const loginRouter = require ("./router/login");
const directRouter = require("./router/directRouter");
=======
const directRouter = require('./router/directRoute')
>>>>>>> ca7268b20ee60cf247f250367f6d7ed92e6c1606
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/static', express.static(path.join(__dirname, 'source')))
app.set('view engine', 'ejs');


database.connect();

<<<<<<< HEAD
app.use("/home", directRouter);
app.use("/",loginRouter);
=======
app.use(loginRouter);
app.use(directRouter);


>>>>>>> ca7268b20ee60cf247f250367f6d7ed92e6c1606
app.listen(5000, console.log('Server running in port 5000'));
