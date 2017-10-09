const {
  GraphQLObjectType,
} = require('graphql');
const contactsResolver = require('../../contacts/contactsResolver');
const contact = require('./contact');

const messageEmbedded = new GraphQLObjectType({
  name: 'MessageEmbedded',
  fields: () => ({
    recipient: {
      type: contact,
      resolve: messageLinks => {
        const recipientReference = messageLinks.recipient.href;

        return contactsResolver.resolveContactForReference(recipientReference);
      },
    }
  }),
});

module.exports = messageEmbedded;
