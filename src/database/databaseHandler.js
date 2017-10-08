const {
  messages,
} = require('./data');

const findMessage = (id) =>
  messages
    .filter(message => message.id == id)[0];

const findMessages = () => messages;

module.exports = {
  findMessage,
  findMessages,
};
