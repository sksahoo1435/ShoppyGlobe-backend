const express = require('express');
const userRouter = express.Router();
const { registerUser, loginUser } = require('../controller/userController');

// POST /register - Register a new user
userRouter.post('/register', registerUser);

// POST /login - Login user and return a JWT
userRouter.post('/login', loginUser);

module.exports = userRouter;
