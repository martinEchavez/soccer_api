const knex = require('knex');
const config = require('../../database/conection');
const db = knex(config);

const getPlayers = async ({ team, position, country }) => {
  let query = db
    .select(
      'player.id',
      'player.name',
      'player.age',
      'player.team_id',
      'player.squad_id',
      'player.position'
    )
    .from('player');
  if (team) {
    return await query
      .innerJoin('team', 'player.team_id', 'team.id')
      .where('team.name', '=', team);
  }
  if (position) {
    return await query.where('position', position);
  }
  if (country) {
    return await query
      .innerJoin('team', 'player.team_id', 'team.id')
      .where('team.country', '=', country);
  }
  return await query;
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
