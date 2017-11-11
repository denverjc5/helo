module.exports = {
  logout: (req, res, next ) => {
    req.logOut();
    return res.redirect('https://denverjc5.auth0.com/v2/logout')
  },
  setUser: (req, res, next ) => {
    if (req.user) {
      return res.send(req.user);
    }
    else {
      return res.status(401).send('Ligin required');
    }
  },
  authenticated: (req, res, next) => {
    if (req.session.passport.user) {
      return res.send(req.session.user)
    }
    else {
      return res.status(403).send();
    }
  }
}
