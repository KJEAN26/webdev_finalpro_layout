const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const database = require("./services/database");
const loginRouter = require ("./router/login");
// const directRouter = require("./router/indexRouter");
const { title } = require("process");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/static', express.static(path.join(__dirname, 'source')))
app.set('view engine', 'ejs');
// app.use(cookieParser('secret'));
database.connect();

<<<<<<< HEAD

=======
app.use("/home", directRouter);
>>>>>>> 426d9e1faabb914d7c04d6f11b8d69480e9de4ae
app.use("/",loginRouter);

const directRouter = require("./router/indexRouter");
app.use(directRouter);

app.listen(5000, console.log('Server running in port 5000'));
