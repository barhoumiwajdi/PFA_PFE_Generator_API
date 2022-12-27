const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const User = require('../models/Compte');
const jwt = require('jsonwebtoken');



//let secret = process.env.SECRET_KEY;
passport.use(new BearerStrategy(
  (token, done) => {
    const decoded = jwt.verify(token, "secret")
    //console.log(decoded)
    User.findById(decoded.userId, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user);
    });
  }
));