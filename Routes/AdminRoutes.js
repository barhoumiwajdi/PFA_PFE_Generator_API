const express=require('express');
const passport = require('passport');
const { FetchAdmin, FetchAdminById, UpdateAdmin, DeleteAdmin } = require('../Controllers/Admin/AdminController');
const authRole = require('../Passport/RoleAllowed')

const router=express.Router()


router.get('/Admins' ,  passport.authenticate('bearer', { session: false }), authRole("ADMIN"),FetchAdmin )
router.get('/Admins/:idadmin' ,  passport.authenticate('bearer', { session: false }) ,authRole("ADMIN"),FetchAdminById)
router.put('/Admins/:idadmin' ,  passport.authenticate('bearer', { session: false })  ,authRole("ADMIN"), UpdateAdmin)
router.delete('/Admins/:idadmin'  ,  passport.authenticate('bearer', { session: false }),authRole("ADMIN"), DeleteAdmin)




module.exports=router