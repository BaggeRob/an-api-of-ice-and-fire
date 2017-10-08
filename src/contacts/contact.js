const { findContact } = require('../database/databaseHandler');

const contact = {
  discovery: {
    contact: '/contacts/{id}',
  },
  registerResourceFor: server => {
    server.get('/contacts/:id', (req, res, next) => {
      const id = req.params.id;
      const contact = findContact(id);

      res.send(contact);
      next();
    });
  }
};

module.exports = contact;
