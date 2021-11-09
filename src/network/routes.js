const player = require('../components/player/network');
const team = require('../components/team/network');

const routes = (server) => {
  server.use('/api/player', player);
  server.use('/api/team', team);
};

module.exports = routes;
