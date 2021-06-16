/* eslint-disable no-unused-vars */
const session = require('express-session');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const indexGet = (req, res) => {
  if (req.session.loggedIn) {
    res.render('index');
  } else {
    res.render('login', { status: '' });
  }
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
        req.session.loggedIn = true;
        req.session.name = result.name;

        res.redirect('/users');
      } else {
        res.render('login', { status: 'Fout wachtwoord of gebruikersnaam' });
      }
    } else {
      console.log(err);
    }
  });
};

const logoutGet = (req, res) => {
  req.session.destroy((err) => {
    console.log(err);
  });
  res.render('login', { status: '' });
};

module.exports = {
  indexGet,
  loginGet,
  loginPost,
  logoutGet,
};
