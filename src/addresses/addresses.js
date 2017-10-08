const { findAddresses } = require('../database/databaseHandler');

const addresses = {
  discovery: {
    addresses: '/addresses',
  },
  registerResourceFor: server => {
    server.get('/addresses', (req, res, next) => {
      const addresses = findAddresses();
      res.send(addresses);
      return next();
    });
  }
};

module.exports = addresses;
