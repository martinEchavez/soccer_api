const player = require('../components/player/network');
const team = require('../components/team/network');
const auth = require('../components/authentication/network');

const routes = (server) => {
  server.use('/api/player', player);
  server.use('/api/team', team);
  server.use('/api/auth', auth);
};

module.exports = routes;
