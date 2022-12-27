const express=require('express');
const authRole = require('../Passport/RoleAllowed')


const { FetchEtudiant, FetchEtudiantById, UpdateEtudiant, DeleteEtudiant, UpdateEtudiantVisibility, FetchEtudiantPublic } = require('../Controllers/Etudiant/EtudiantController');
const passport = require('passport');

const router=express.Router()

router.get('/Etudiant',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") , FetchEtudiant)
router.put('/Etudiant/visiblitiy/:idEtudiant',  passport.authenticate('bearer', { session: false }), authRole("Etudiant") , UpdateEtudiantVisibility)
router.get('/Etudiant/public',  passport.authenticate('bearer', { session: false }), authRole("ADMIN", "Etudiant", "Enseignant", "ALumni") , FetchEtudiantPublic)
router.get('/Etudiant/:idEtudiant',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") , FetchEtudiantById)
router.put('/Etudiant/:idEtudiant',  passport.authenticate('bearer', { session: false }), authRole("ADMIN", "Etudiant") , UpdateEtudiant)
router.delete('/Etudiant/:idEtudiant' ,  passport.authenticate('bearer', { session: false }), authRole("ADMIN"), DeleteEtudiant)




module.exports=router