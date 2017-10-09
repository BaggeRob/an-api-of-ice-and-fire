const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
const linksType = require('./links');

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
  }),
});

module.exports = contactType;