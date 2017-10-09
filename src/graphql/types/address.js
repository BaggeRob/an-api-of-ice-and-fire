const {
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');
const linksType = require('./links');

const addressType = new GraphQLObjectType({
  name: 'Address',
  fields: () => ({
    _links: {
      type: linksType,
      resolve: address => address._links,
    },
    building: {
      type: GraphQLString,
      resolve: address => address.building,
    },
    street: {
      type: GraphQLString,
      resolve: address => address.street,
    },
    townCity: {
      type: GraphQLString,
      resolve: address => address.townCity,
    },
    county: {
      type: GraphQLString,
      resolve: address => address.county,
    },
    postcode: {
      type: GraphQLString,
      resolve: address => address.postcode,
    },
  }),
});

module.exports = addressType;