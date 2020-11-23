const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const database = require("./services/database");
const loginRouter = require ("./router/login");
const directRouter = require("./router/directRouter");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/static', express.static(path.join(__dirname, 'source')))
app.set('view engine', 'ejs');
// app.use(cookieParser('secret'));


<<<<<<< HEAD
const User = require('./model/userModel');
//test
app.get('/getUsers',(req, res)=>{
    User.find({}, (error, result)=>{
        if(error) return res.send(error);
        res.json(result);
    });
})
=======
database.connect();
>>>>>>> 4d20f0443388ece7644e4febcb465e0595c0b1bb

app.use("/home", directRouter);
app.use("/",loginRouter);
app.listen(5000, console.log('Server running in port 5000'));
