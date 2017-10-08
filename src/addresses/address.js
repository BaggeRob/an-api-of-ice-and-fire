const { findAddress } = require('../database/databaseHandler');

const address = {
  discovery: {
    address: '/addresses/{id}',
  },
  registerResourceFor: server => {
    server.get('/addresses/:id', (req, res, next) => {
      const id = req.params.id;
      const address = findAddress(id);

      res.send(address);
      next();
    });
  }
};

module.exports = address;
