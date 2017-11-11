require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const massive = require("massive");
const session = require("express-session");
const authController = require('./controllers/auth_controller');

const app = module.exports = express();

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
});

const strategy = require("./strategy.js");

passport.use(strategy);

passport.serializeUser((user, done) => {
  const {familyName, givenName} = user.name;
  var random = Math.floor(Math.random() * 10);
  done(null, {
    authId: user.identities[0].user_id,
    firstName: givenName ? givenName : '',
    lastName: familyName ? familyName: '',
    email: user.emails[0].value,
    picture: `https://robohash.org/${random}`
  });
})

passport.deserializeUser((profile, done) => {
  var random = Math.floor(Math.random() * 10);
  const db = app.get('db');
  db.find_user(profile)
  .then(user => {
    if (user[0]) {
      return done(null, user[0]);
    }
    else {
      db.create_user(profile)
      .then(user => done(null, user[0]))
    }
  })
  done(null, profile);
})

//endPoints
app.get('/api/auth/login', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3025/api/auth/setUser',
  failureRedirect: 'http://localhost:3005/api/auth/login'
}))

app.get('/api/auth/setUser', authController.setUser);
app.get('/api/auth/authenticated', authController.authenticated);
//logut should be a post
app.get('/api/auth/logout', authController.logout);




const port = 3025;
app.listen(port, function() {
  console.log("listening on port", port);
})
