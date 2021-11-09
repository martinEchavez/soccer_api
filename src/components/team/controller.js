const knex = require('knex');
const config = require('../../database/conection');
const db = knex(config);

const getTeams = async () => {
  let query = db
    .select('team.id', 'team.name', 'team.league', 'team.country')
    .from('team');
  return await query;
};

const getTeamById = async (id) => {
  return await db('team').where('id', '=', id);
};

const createTeam = async (player) => {
  const response = await db('team').insert(player);
  return response[0];
};

const updateTeam = async (id, team) => {
  return await db('team').where('id', '=', id).update(team);
};

const deleteTeam = async (id) => {
  return await db('team').where('id', '=', id).del();
};

module.exports = {
  getTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
};
