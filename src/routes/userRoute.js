const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.userIndex);
router.post('/', userController.userCreatePost);
router.get('/create', userController.userCreateGet);
router.post('/like', userController.userLikePost);
router.post('/dislike', userController.userDislikePost);
router.get('/likes', userController.userLikesGet);
router.post('/remove', userController.userLikesRemovePost);

module.exports = router;
