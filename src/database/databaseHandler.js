const {
  messages,
  contacts,
} = require('./data');

const findMessage = (id) =>
  messages
    .filter(message => message.id == id)[0];

const findMessages = () => messages;

const findContacts = () => contacts;

const findContact = id => contacts
  .filter(contact => contact.id == id)[0];

module.exports = {
  findMessage,
  findMessages,
  findContacts,
  findContact,
};
