const express=require('express');
const authRole = require('../Passport/RoleAllowed')


const { FetchSaison, FetchSaisonById, UpdateSaison, DeleteSaison, CreateSaison } = require('../Controllers/SaisonUnv/SaisonUnvController');
const passport = require('passport');

const router=express.Router()

router.get('/Saison',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") , FetchSaison)
router.post('/Saison',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") , CreateSaison)
router.get('/Saison/:idSaison',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") , FetchSaisonById)
router.put('/Saison/:idSaison',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") , UpdateSaison)
router.delete('/Saison/:idSaison' ,  passport.authenticate('bearer', { session: false }), authRole("ADMIN"), DeleteSaison)




module.exports=router