const express=require('express');
const passport = require('passport');
const authRole = require('../Passport/RoleAllowed')


const { FetchEnseignant, FetchEnseignantById, UpdateEnseignant, DeleteEnseignant } = require('../Controllers/Enseignant/EnseignantController');

const router=express.Router()


router.get('/Enseignant',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") , FetchEnseignant)
router.get('/Enseignant/:idEnseignant' ,  passport.authenticate('bearer', { session: false }), authRole("ADMIN", "Enseignant"), FetchEnseignantById)
router.put('/Enseignant/:idEnseignant',  passport.authenticate('bearer', { session: false }), authRole("ADMIN", "Enseignant") , UpdateEnseignant)
router.delete('/Enseignant/:idEnseignant' ,  passport.authenticate('bearer', { session: false }), authRole("ADMIN"), DeleteEnseignant)




module.exports=router