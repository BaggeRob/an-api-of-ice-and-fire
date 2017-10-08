const { findMessages } = require('../database/databaseHandler');

const messages = {
  discovery: {
    messages: '/messages',
  },
  registerResourceFor: server => {
    server.get('/messages', (req, res, next) => {
      const messages = findMessages();
      res.send(messages);
      return next();
    });
  }
};

module.exports = messages;
