const {
  findMessageForReference,
  findMessages
} = require('../database/databaseHandler');

const messagesResolver = {
  resolveMessageForReference: reference => {
    return findMessageForReference(reference);
  },
  resolveMessages: findMessages,
};

module.exports = messagesResolver;