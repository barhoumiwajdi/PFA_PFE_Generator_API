const express=require('express');
const authRole = require('../Passport/RoleAllowed')


const { FetchPFE, FetchPFEById, UpdatePFE, DeletePFE, CreatePFE } = require('../Controllers/PFE/PFEController');
const passport = require('passport');

const router=express.Router()
router.post('/PFE',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") , CreatePFE)
router.get('/PFE',  passport.authenticate('bearer', { session: false }), authRole("ADMIN", "Etudiant", "Enseignant") , FetchPFE)
router.get('/PFE/:idPFE',  passport.authenticate('bearer', { session: false }), authRole("ADMIN", "Etudiant", "Enseignant") , FetchPFEById)
router.put('/PFE/:idPFE',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") , UpdatePFE)
router.delete('/PFE/:idPFE' ,  passport.authenticate('bearer', { session: false }), authRole("ADMIN"), DeletePFE)




module.exports=router