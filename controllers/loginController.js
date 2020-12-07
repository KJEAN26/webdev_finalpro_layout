const Register = require("../model/userModel")
const jwt = require("jsonwebtoken");

//this controller is equavalent to this router router.get('/', getLoginAccnt);

const getLoginAccnt = async (req, res) => {
  try {
    const login = await Register.find();
    if (!login) {
      return res.status(400).json({
        error: "Error in getting the log in account!",
      });
    }

    res.render('pages/login', {
      data: login,
      title: "Login",
      message: undefined
    });
  } catch (e) {
    res.status(400).json({
      error: e,
    });
  }
};

//login 
const userDoLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const logInUser = await Register.findOne({ email: email });
    if (!logInUser) return res.render('pages/login', { title: "login", message: "EMAIL DOESN'T MATCH", })
    console.log(logInUser);
    if (logInUser.password != password) return res.render('pages/login', { title: "login", message: "PASSWORD DOESN'T MATCH", })
    console.log(logInUser)
    const access_token = jwt.sign({
      lastName: logInUser.lastName,
      firstName: logInUser.firstName,
      email: logInUser.email,
      password: logInUser.password,
      accountType : logInUser.accountType
    }, process.env.ACCESS_TOKEN);
    res.cookie('jwt', access_token, {
      httpOnly: true
    })
    res.redirect('/home')
  } catch (error) {
    res.status(400).json({
      error: error,
    });
    console.log(error);
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
    res.render('pages/register', {
      data: register, title: "Register"
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
    console.log(result);

    res.status(200).render('pages/login', {
      title: "login"
    });
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
  userDoLogin,
};