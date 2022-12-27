
const Accounts = require('../../Models/Compte')
const nodemailer = require("nodemailer");
const bcrypt = require('bcryptjs');
const Token = require('../../Models/Token')
const randomString = require('randomstring')


exports.forgetpassword = async (req, res) => {
    try {
      const user = await Accounts.findOne({ email: req.body.email })
      console.log(user);
      if (user) {
        const resetToken = randomString.generate(20);
        const reset = {
          userId: user._id,
          token: resetToken
        }
        await Token.create(reset)
        const link = `${process.env.protocol}resetPassword/${resetToken}`
  
        let transporter = nodemailer.createTransport({
          host: process.env.host,
          port: process.env.port,
          secure: false,
          auth: {
            user: process.env.email,
            pass: process.env.password,
          },
        });
  
        await transporter.sendMail({
          from: `${process.env.email}`,
          to: `${req.body.email}`,
          subject: "Reset your password",
  
          html: `<h1>reset your password </h1> 
        <p> Bonjour  ${req.body.firsName} ${req.body.lastName},this's the link to reset your password! </p> <br>
         <a href="${link}">reset link</a>
        `
        })
        res.status(200).send({ message: 'link sent successfully' })
  
      } else {
        res.status(400).send({ message: `user not found!` })
      }
  
    } catch (error) {
      res.status(500).send({ message: error.message || "An error occured" });
    }
  }
  
  /**
   * 
   * 
   */
  exports.resetPassword = async (req, res) => {
    try {
      const token = await Token.findOne({ token: req.params.token })
      console.log(token.userId);
      if (token) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        await Compte.findByIdAndUpdate(token.userId, { password: req.body.password, passwordHashed: hash }, { new: true })
        res.status(200).send({ message: 'password updated' })
      } else {
        res.status(400).send({ message: 'token invalid' })
      }
    } catch (error) {
      res.status(500).send({ message: error.message || "An error occured" });
    }
  }