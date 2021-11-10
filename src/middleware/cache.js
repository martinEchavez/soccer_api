const getExpeditiousCache = require('express-expeditious');

const defaultOprions = {
  namespace: 'expresscache',
  defaultTtl: '1 minute',
  statusCodeExpires: {
    404: '5 minute',
    500: 0,
  },
};

const cacheInit = getExpeditiousCache(defaultOprions);

module.exports = {
  cacheInit,
};
