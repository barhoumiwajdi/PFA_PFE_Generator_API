const express=require('express');
const passport = require('passport');
const {forgetpassword, resetPassword } = require('../Controllers/Auth/Forget_Reset_password');
const { login } = require('../Controllers/Auth/Login');
const { register } = require('../Controllers/Auth/Register');
const authRole = require('../Passport/RoleAllowed')
const router=express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/profile', 
  passport.authenticate('bearer', { session: false }),authRole("ADMIN", "Etudiant", "Enseignant", "ALumni"),
  function(req, res) {
    res.json(req.user);
  });
router.post('/forgetPassword',forgetpassword)
router.put('/resetPassword/:token',resetPassword)


module.exports=router