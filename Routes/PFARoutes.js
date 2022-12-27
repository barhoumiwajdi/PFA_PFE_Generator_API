const express=require('express');
const authRole = require('../Passport/RoleAllowed')


const { FetchPFA, FetchPFAById, UpdatePFA, DeletePFA, CreatePFA } = require('../Controllers/PFA/PFAController');
const passport = require('passport');

const router=express.Router()
router.post('/PFA',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") , CreatePFA)
router.get('/PFA',  passport.authenticate('bearer', { session: false }), authRole("ADMIN", "Etudiant", "Enseignant") , FetchPFA)
router.get('/PFA/:idPFA',  passport.authenticate('bearer', { session: false }), authRole("ADMIN", "Etudiant", "Enseignant") , FetchPFAById)
router.put('/PFA/:idPFA',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") , UpdatePFA)
router.delete('/PFA/:idPFA' ,  passport.authenticate('bearer', { session: false }), authRole("ADMIN"), DeletePFA)




module.exports=router