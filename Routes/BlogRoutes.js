const express=require('express');
const authRole = require('../Passport/RoleAllowed')


const { FetchBlog, FetchBlogById, UpdateBlog, DeleteBlog, CreateBlog } = require('../Controllers/Blog/BlogController');
const passport = require('passport');

const router=express.Router()
router.post('/Blog',  passport.authenticate('bearer', { session: false }), authRole("ALumni") , CreateBlog)
router.get('/Blog',  passport.authenticate('bearer', { session: false }), authRole("ADMIN", "Etudiant", "Enseignant","ALumni") , FetchBlog)
router.get('/Blog/:idBlog',  passport.authenticate('bearer', { session: false }), authRole("ADMIN", "Etudiant", "Enseignant","ALumni") , FetchBlogById)
router.put('/Blog/:idBlog',  passport.authenticate('bearer', { session: false }), authRole("ALumni") , UpdateBlog)
router.delete('/Blog/:idBlog' ,  passport.authenticate('bearer', { session: false }), authRole("ALumni"), DeleteBlog)




module.exports=router
