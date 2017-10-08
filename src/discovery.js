const messages = require('./messages/messages');
const message = require('./messages/message');

const discovery = {
  registerResourceFor: server => {
    server.get('/', function (req, res, next) {
      const discovery = {
        discovery: '/',
        ...messages.discovery,
        ...message.discovery,
      };

      res.send(discovery);
      return next();
    });
  }
};

module.exports = discovery;