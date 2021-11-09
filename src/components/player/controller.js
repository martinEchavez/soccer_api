const knex = require('knex');
const config = require('../../database/conection');
const db = knex(config);

const getPlayers = async () => {
  return await db('player');
};

const getPlayerById = async (id) => {
  return await db('player').where('id', '=', id);
};

const createPlayer = async (player) => {
  const response = await db('player').insert(player);
  return response[0];
};

const updatePlayer = async (id, player) => {
  return await db('player').where('id', '=', id).update(player);
};

const deletePlayer = async (id) => {
  return await db('player').where('id', '=', id).del();
};

module.exports = {
  getPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
};
