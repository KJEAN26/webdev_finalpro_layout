const mongoose = require ('mongoose');

const connectToDb = () =>{
    mongoose.connect('mongodb://localhost:27017/final-db',{
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex:true
    })
    .then(()=>{
        console.log("Connected");
    })
    .catch((err)=> console.log(err));
}

module.exports={
    connect: connectToDb
}