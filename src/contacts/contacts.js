const { findContacts } = require('../database/databaseHandler');

const contacts = {
  discovery: {
    contacts: '/contacts',
  },
  registerResourceFor: server => {
    server.get('/contacts', (req, res, next) => {
      const contacts = findContacts();
      res.send(contacts);
      return next();
    });
  }
};

module.exports = contacts;
