
const Register = require("../model/userModel")
const parseRequestBody = require("../utils/parseRequestBody");
const bycrypt = require("bcrypt");


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
      message: undefined
    });
  } catch (e) {
    res.status(400).json({
      error: e,
    });
  }
};
// const getLoginAccntById = async (req, res) => {
//     try {
//         const logins = await Login.find({
//             _id: req.params.id
//         });

//         if (!logins || logins.length === 0) {
//             return res.status(400).json({
//                 error: "Log in Account not found!",
//             });
//         }

//         res.status(200).json({
//             logins: logins,
//         });
//     } catch (e) {
//         return res.status(400).json({
//             error: e,
//         });
//     }
// };




//login 
const userDoLogin = async (req, res) => {
  // console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  try {
    const logInUser = await Register.findOne({ email: email });
    if (!logInUser) return res.render('pages/login',{message:"EMAIL DOESN'T MATCH"})
    console.log(logInUser);
    if (logInUser.password != password) return res.render('pages/login',{message:"PASSWORD DOESN'T MATCH"})
    // res.send(`Welcome ${logInUser.firstName}!`);
    res.render('pages/home')
  } catch (error) {
    res.status(400).json({
      error: error,
    });
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
    // res.render('register', {

    res.render('pages/register', {
      data: register
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

    res.status(200).render('pages/home');
  } catch (e) {
    res.status(400).json({
      error: e,
    });
  }
};


// const login=(req,res)=>{
//   loginSchema.findOne({ email: req.body.email },
//     (error, user) => {
//       if (error) return res.status(500).send(error);
//       //check if the email match
//       if (user == null) return res.status(500).json({
//         error: true,
//         fieldname: "email", message: "Email doesn't match"
//       });
//       //check if the password match
//       if (!bycrypt.compareSync(req.body.password, user.password)) return res.status(500).json({
//         error: true,
//         fieldname: "password", message: "Password doesn't match"
//       });

//       //generate token
//       const accessToken = jwtwebtoken.sign({ user }, accessTokenSecret, { expiresIn: "12h" });

//       res.cookie("access_token", accessToken, { maxAge: 60000 * 60 * 12, httpOnly: true });

//       return res.json({ "user_data": user, "access_token": accessToken });
//     });
// }

module.exports = {
  getRegisteredAccnt,
  getRegisteredAccntById,
  addAccnt,
  getLoginAccnt,
  userDoLogin
  // login,
};