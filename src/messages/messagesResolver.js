const { findMessageForReference } = require('../database/databaseHandler');

const messagesResolver = {
  resolveMessageForReference: reference => {
    return findMessageForReference(reference);
  },
};

module.exports = messagesResolver;