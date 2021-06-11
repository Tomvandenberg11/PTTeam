const bcrypt = require('bcryptjs');
const User = require('../models/user');

const indexGet = (req, res) => {
  res.render('index');
};

const loginGet = (req, res) => {
  res.render('login', { status: '' });
};

const loginPost = (req, res) => {
  User.findOne({ name: req.body.name }, (err, result) => {
    if (result) {
      const submittedPass = req.body.password;
      const storedPass = result.wachtwoord;

      const verified = bcrypt.compareSync(submittedPass, storedPass);

      if (verified) {
        res.redirect('/users');
      } else {
        res.render('login', { status: 'Foute wachtwoord of gebruikersnaam' });
      }
    } else {
      console.log(err);
    }
  });
};

module.exports = {
  indexGet,
  loginGet,
  loginPost,
};
