const { findContactForReference, findContacts } = require('../database/databaseHandler');

const contactsResolver = {
  resolveContactForReference: reference => {
    return findContactForReference(reference);
  },
  resolveContacts: findContacts,
};

module.exports = contactsResolver;