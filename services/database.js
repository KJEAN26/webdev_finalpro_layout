const mongoose = require ('mongoose');

const connectToDb = () =>{
    mongoose.connect('mongodb://kylaJean:kylaJean@cluster0-shard-00-00.chbed.mongodb.net:27017,cluster0-shard-00-01.chbed.mongodb.net:27017,cluster0-shard-00-02.chbed.mongodb.net:27017/recipeApp?ssl=true&replicaSet=atlas-vg88k1-shard-0&authSource=admin&retryWrites=true&w=majority',{
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