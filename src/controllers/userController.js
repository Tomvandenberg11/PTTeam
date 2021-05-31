/* eslint-disable object-shorthand */
const multer = require('multer');
const path = require('path');
const User = require('../models/user');

// Multer
const storage = multer.diskStorage({
  destination: 'public/uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage }).single('avatar');

// User Index
const userIndex = (req, res) => {
  User.find({ status: '?' })
    .then((result) => {
      console.log(result);
      if (result.length > 0) {
        const rand = Math.floor(Math.random() * result.length);
        const data = result[rand];
        res.render('userIndex', { data });
      } else {
        res.render('userIndexEmpty');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// User Create - GET
const userCreateGet = (req, res) => {
  res.render('userCreate');
};

// User Create - POST
const userCreatePost = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.send(err);
    } else {
      const user = new User({
        name: req.body.name,
        study: req.body.study,
        message: req.body.message,
        interests: req.body.interests,
        age: req.body.age,
        status: req.body.status,
        avatar: req.file.filename,
      });

      user
        .save()
        .then(() => {
          res.redirect('/users');
        })
        .catch(() => console.log('fout'));
    }
  });
};

// User Like - POST
const userLikePost = (req, res) => {
  const id = req.body.name.trim();

  User.findOneAndUpdate({ name: id }, { status: 'liked' })
    .then(() => {
      res.redirect('/users');
    })
    .catch((err) => console.log(err));
};

// User Dislike - POST
const userDislikePost = (req, res) => {
  const id = req.body.name.trim();

  User.findOneAndUpdate({ name: id }, { status: 'disliked' })
    .then(() => {
      res.redirect('/users');
    })
    .catch((err) => console.log(err));
};

// User Likes - GET
const userLikesGet = (req, res) => {
  User.find({ status: 'liked' })
    .then((users) => {
      res.render('userLikes', { users });
    })
    .catch((err) => {
      console.log(err);
    });
};

// User Likes Remove - POST
const userLikesRemovePost = (req, res) => {
  const id = req.body.name.trim();

  User.findOneAndUpdate({ name: id }, { status: '?' })
    .then(() => {
      res.redirect('/users/likes');
    })
    .catch((err) => console.log(err));
};

module.exports = {
  userIndex,
  userCreateGet,
  userCreatePost,
  userLikePost,
  userDislikePost,
  userLikesGet,
  userLikesRemovePost,
};
