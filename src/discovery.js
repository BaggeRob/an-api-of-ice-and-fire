const messages = require('./messages/messages');
const message = require('./messages/message');
const contacts = require('./contacts/contacts');
const contact = require('./contacts/contact');
const addresses = require('./addresses/addresses');
const address = require('./addresses/address');

const discovery = {
  registerResourceFor: server => {
    server.get('/', function (req, res, next) {
      const discovery = {
        discovery: '/',
        ...messages.discovery,
        ...message.discovery,
        ...contacts.discovery,
        ...contact.discovery,
        ...addresses.discovery,
        ...address.discovery,
      };

      res.send(discovery);
      return next();
    });
  }
};

module.exports = discovery;