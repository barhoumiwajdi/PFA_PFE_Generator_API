const Accounts = require('../../Models/Compte')
const nodemailer = require("nodemailer");
const bcrypt = require('bcryptjs');
 
exports.register = async (req, res) => {
  try {
    const Found = await Accounts.findOne({ email: req.body.email })
    if (Found !== null) {
      res.status(400).send({ message: 'E-mail déjà utilisé!' });
    }
    else {
      const salt = bcrypt.genSaltSync(10);
      req.body.passwordHashed = bcrypt.hashSync(req.body.password, salt);
      let transporter = nodemailer.createTransport({
      service :"Gmail",
        auth: {
          user: "wajdi.barhoumi26@gmail.com",
          pass: "pafxguooxmmuliov" ,
        },
      });
      await transporter.sendMail({
        from:"wajdi.barhoumi26@gmail.com",
        to: `${req.body.email}`,
        subject: "Inscription",
        html: `<h1>Thanks For Joining Us!</h1> 
        <p> Hello  ${req.body.firstName} ${req.body.lastName},you are now a member in our <br><br>
        E-learning platform ,we are proud to have you among <br><br>
        us ,thanks again for your trust!</p>
        You can now join the platform :<br><br>
        Your email: ${req.body.email}<br>
        Your password :${req.body.password}<br>
        Dont't hesitate to contact us if needed.<br>
        Sincerely .<br>
        By DEVILS TEAM<br>
        Manager of Academia .
        
        `
      })
      await Accounts.create(req.body)
      res.status(201).send({ message: 'Inscrit avec succés!' })
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "An error occured" });
  }

}
