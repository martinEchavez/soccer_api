const knex = require('knex');
const config = require('../../database/conection');
const db = knex(config);

const getUsers = async () => {
  return await db('user');
};

const createUser = async (user) => {
  const response = await db('user').insert(user);
  return response[0];
};

const getUserByUsername = async (username) => {
  return await db('user').where('username', '=', username);
};

const deleteUser = async (id) => {
  return await db('user').where('id', '=', id).del();
};

module.exports = {
  getUsers,
  createUser,
  getUserByUsername,
  deleteUser,
};
