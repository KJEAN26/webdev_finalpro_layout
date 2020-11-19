const Login = require("../model/Login");
const Register = require("../model/Register")
const parseRequestBody = require("../utils/parseRequestBody");

const getLoginAccnt = async (req, res) => {
    try {
      const login = await Login.find();
      if (!login) {
        return res.status(400).json({
          error: "Error in getting the log in account!",
        });
      }
  
      res.render('login',{
        data:login
      });
    } catch (e) {
      res.status(400).json({
        error: e,
      });
    }
  };

const updateLoginAccntById = async (req, res) => {
    const updates = parseRequestBody(req.body);
    console.log(updates)
    try {
        const login = await Login.updateOne({
            _id: req.params.id
        }, {
            $set: updates
        });
        console.log(req.params.id)
        if (!login) return res.status(400).send("Error in updating Login account by id");
        res.redirect('/login_info')
    } catch (error) {
        res.status(500).send(error);
    }
}

const getRegisteredAccnt = async (req, res) => {
    try {
      const register = await Register.find();
      if (!register) {
        return res.status(400).json({
          error: "Error in getting the registered account!",
        });
      }
  
      res.render('register',{
        data:register
      });
    } catch (e) {   
      res.status(400).json({
        error: e,
      });
    }
  };
const getRegisteredAccntById = async (req, res) => {
    try {
        const registers = await Register.find({
            _id: req.params.id
        });

        if (!registers || registers.length === 0) {
            return res.status(400).json({
                error: "Registered Account not found!",
            });
        }

        res.status(200).json({
            registers: registers,
        });
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
};

const addAccnt = async (req, res) => {
    try {
        const register = {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            email: req.body.email,
            password: req.body.password,
        }
        const newRegister = new Register(register);
        const result = await newRegister.save();

        if (!result) {
            return res.status(400).json({
                error: "Error in adding new Account!",
            });
        }

        res.status(200).redirect('/');
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
};

module.exports = {
    getRegisteredAccnt,
    getRegisteredAccntById,
    addAccnt,
    getLoginAccnt,
    updateLoginAccntById,
};