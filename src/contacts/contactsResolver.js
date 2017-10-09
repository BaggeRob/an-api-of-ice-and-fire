const { findContactForReference } = require('../database/databaseHandler');

const contactsResolver = {
  resolveContactForReference: reference => {
    return findContactForReference(reference);
  },
};

module.exports = contactsResolver;