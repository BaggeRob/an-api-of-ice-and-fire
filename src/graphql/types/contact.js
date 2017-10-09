const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
const linksType = require('./links');
const contactEmbedded = require('./contactEmbedded');

const contactType = new GraphQLObjectType({
  name: 'Contact',
  fields: () => ({
    _links: {
      type: linksType,
      resolve: contact => contact._links,
    },
    firstName: {
      type: GraphQLString,
      resolve: contact => contact.firstName,
    },
    lastName: {
      type: GraphQLString,
      resolve: contact => contact.lastName,
    },
    occupation: {
      type: GraphQLString,
      resolve: contact => contact.occupation,
    },
    _embedded: {
      type: contactEmbedded,
      resolve: contact => contact._links,
    }
  }),
});

module.exports = contactType;