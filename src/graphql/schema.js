const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const messagesResolver = require('../messages/messagesResolver');
const message = require('./types/message');

const contactsResolver = require('../contacts/contactsResolver');
const contact = require('./types/contact');

const addressResolver = require('../addresses/addressResolver');
const address = require('./types/address');

const rootQuery = new GraphQLObjectType({
  name: 'Types',
  fields: {
    message: {
      type: message,
      args: {
        reference: { type: GraphQLString },
      },
      resolve: async (parentValue, args) => {
        return messagesResolver.resolveMessageForReference(args.reference);
      },
    },
    messages: {
      type: new GraphQLList(message),
      resolve: async (parentValue, args) =>
        messagesResolver.resolveMessages(),
    },
    contact: {
      type: contact,
      args: {
        reference: { type: GraphQLString },
      },
      resolve: async (parentValue, args) =>
        contactsResolver.resolveContactForReference(args.reference),
    },
    contacts: {
      type: new GraphQLList(contact),
      resolve: async (parentValue, args) =>
        contactsResolver.resolveContacts(),
    },
    address: {
      type: address,
      args: {
        reference: { type: GraphQLString },
      },
      resolve: async (parentValue, args) =>
        addressResolver.resolveAddressForReference(args.reference),
    },
    addresses: {
      type: new GraphQLList(address),
      resolve: async (parentValue, args) =>
        addressResolver.resolveAddresses(),
    }
  },
});

const schema = new GraphQLSchema({ query: rootQuery });

module.exports = schema;