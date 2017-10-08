const { findMessage } = require('../database/databaseHandler');

const message = {
  discovery: {
    message: '/messages/{id}',
  },
  registerResourceFor: server => {
    server.get('/messages/:id', (req, res, next) => {
      const id = req.params.id;
      const message = findMessage(id);

      res.send(message);
      next();
    });
  }
};

module.exports = message;
