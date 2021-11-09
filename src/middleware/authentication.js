const jwt = require('jsonwebtoken');
require('dotenv').config();

const authentication = async (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).send({ auth: false, message: 'No Token Provided' });
  }

  // decode the token
  const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);

  // save the token on request object to using on routes
  req.userId = decoded.id;

  // continue with the next function
  next();
};

module.exports = {
  authentication,
};
