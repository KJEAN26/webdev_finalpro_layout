const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegisterSchema = Schema({
    firstName : {type: String, required:true},
    lastName: {type: String, required: true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    accountType :{ type:String,required:true}
})

const Register = mongoose.model("Register", RegisterSchema);

module.exports = Register;