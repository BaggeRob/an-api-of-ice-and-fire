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
      resolve: message => {
        const recipientReference = message._links.recipient.href;
        console.log(recipientReference);
        return contactsResolver.resolveContactForReference(recipientReference);
      },
    }
  }),
});

module.exports = messageEmbedded;
