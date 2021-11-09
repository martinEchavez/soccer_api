const knex = require('knex');
const config = require('../../database/conection');
const db = knex(config);

const createUser = async (user) => {
  const response = await db('user').insert(user);
  return response[0];
};

const getUserByUsername = async (username) => {
  return await db('user').where('username', '=', username);
};

module.exports = {
  createUser,
  getUserByUsername,
};
