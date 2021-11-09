require('dotenv').config();

module.exports = {
  client: process.env.CLIENT_DB,
  connection: {
    filename: process.env.FILENAME,
  },
  useNullAsDefault: true,
};
