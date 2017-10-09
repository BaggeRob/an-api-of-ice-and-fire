const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
const linksType = require('./links');
const messageEmbedded = require('./messageEmbedded');

const messageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    _links: {
      type: linksType,
      resolve: message => message._links,
    },
    message: {
      type: GraphQLString,
      resolve: message => message.message,
    },
    _embedded: {
      type: messageEmbedded,
      resolve: message => message._links,
    }
  }),
});

module.exports = messageType;