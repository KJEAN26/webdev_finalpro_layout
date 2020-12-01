const mongoose = require ('mongoose');

const connectToDb = () =>{
    mongoose.connect('mongodb://localhost:27017/recipe',{
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify: false,
    })
    .then(()=>{
        console.log("Connected");
    })
    .catch((err)=> console.log(err));
}

module.exports={
    connect: connectToDb
}