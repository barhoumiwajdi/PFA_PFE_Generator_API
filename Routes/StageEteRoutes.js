const express=require('express');
const authRole = require('../Passport/RoleAllowed')


const { FetchStageEte, FetchStageEteById, UpdateStageEte, DeleteStageEte, CreateStageEte } = require('../Controllers/StageEte/StageEteController');
const passport = require('passport');

const router=express.Router()
router.post('/StageEte',  passport.authenticate('bearer', { session: false }), authRole("Etudiant") , CreateStageEte)
router.get('/StageEte',  passport.authenticate('bearer', { session: false }), authRole("ADMIN", "Etudiant", "Enseignant") , FetchStageEte)
router.get('/StageEte/:idStageEte',  passport.authenticate('bearer', { session: false }), authRole("ADMIN", "Etudiant", "Enseignant") , FetchStageEteById)
router.put('/StageEte/:idStageEte',  passport.authenticate('bearer', { session: false }), authRole("Etudiant") , UpdateStageEte)
router.delete('/StageEte/:idStageEte' ,  passport.authenticate('bearer', { session: false }), authRole("Etudiant"), DeleteStageEte)




module.exports=router