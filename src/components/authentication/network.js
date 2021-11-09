const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { encryptPassword, comparePassword } = require('../../helpers');
const { createUser, getUserByUsername } = require('./controller');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    let { username, password } = req.body;
    if (typeof username === 'undefined' || typeof password === 'undefined') {
      return res.status(400).send({
        message: 'user or password is required.',
      });
    }
    password = await encryptPassword(password);
    const user = {
      username,
      password,
    };

    const response = await createUser(user);
    if (response === 0) {
      return res.status(401).send({
        auth: false,
      });
    }
    const token = await jwt.sign({ username }, process.env.JWT_SECRET_KEY, {
      expiresIn: '2h',
    });
    res.status(200).send({
      auth: true,
      token,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

router.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  const user = await getUserByUsername(username);
  if (user.length === 0) {
    return res.status(400).send({
      message: 'incorrect username or password',
    });
  }
  const validatePassword = await comparePassword(password, user[0].password);

  if (!validatePassword) {
    return res.status(401).send({
      auth: false,
      token: null,
    });
  }

  const token = jwt.sign(
    { username: user.username },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: '2h',
    }
  );

  res.status(200).send({
    auth: true,
    token,
  });
});

module.exports = router;
