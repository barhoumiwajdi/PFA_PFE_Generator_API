const express=require('express');
const authRole = require('../Passport/RoleAllowed')


const passport = require('passport');
 
const { ConfirmationPFE, ConfirmationPFA } = require('../Controllers/Admin/Confirmation');

const router=express.Router()
router.post('/PostulerPFE',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") ,ConfirmationPFA)
router.post('/PostulerPFA',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") ,ConfirmationPFE)





module.exports=router