const { User, validate, Loginvalidate } = require("../model/userModel");
const bcrypt = require("bcrypt");

module.exports = {
    usersignup: async (req, res) => {
      try {
        // console.log(req.body);
        const { error } = validate(req.body);
        if (error)
          return res.status(400).send({ message: error.details[0].message });

          //if user is already exit
        const user = await User.findOne({ email: req.body.email });
        if (user)
          return res
            .status(409)
            .send({ message: "User with given mailid Already exist" });
            //save newUser Details
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashpassword = await bcrypt.hash(req.body.password, salt);
  
        await User.create({ ...req.body, password: hashpassword });
  
        res.status(201).send({ message: "User Created Successfully" });
      } catch (error) {
        return res.status(500).send({ message: "Internal Server Error" });
      }
    },
    userlogin: async (req, res) => {
        try {
          //console.log(req.body);
          const { error } = Loginvalidate(req.body);
          if (error)
            return res.status(400).send({ message: error.details[0].message });
          const user = await User.findOne({ email: req.body.email });
          if (!user)
            return res.status(401).send({ message: "Invalid Email or Password" });
          const validpassword = await bcrypt.compare(
            req.body.password,
            user.password
          );
          if (!validpassword)
            return res.status(401).send({ message: "Invalid Email or Password" });
          //generate token
          const token = user.generateAuthToken();
          res.status(201).send({ token: token, message: "Loggin Successfully" });
        } catch (error) {
          return res.status(500).send({ message: "Internal Server Error" });
        }
      },
}