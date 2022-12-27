const express=require('express');
const authRole = require('../Passport/RoleAllowed')


const { FetchEvent, FetchEventById, UpdateEvent, DeleteEvent, CreateEvent } = require('../Controllers/Event/EventController');
const passport = require('passport');

const router=express.Router()

router.get('/Event',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") , FetchEvent)
router.post('/Event',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") , CreateEvent)
router.get('/Event/:idEvent',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") , FetchEventById)
router.put('/Event/:idEvent',  passport.authenticate('bearer', { session: false }), authRole("ADMIN") , UpdateEvent)
router.delete('/Event/:idEvent' ,  passport.authenticate('bearer', { session: false }), authRole("ADMIN"), DeleteEvent)




module.exports=router