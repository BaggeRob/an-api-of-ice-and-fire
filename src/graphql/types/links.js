const { GraphQLScalarType } = require('graphql');

module.exports = new GraphQLScalarType({
  name: 'Links',
  serialize(value) {
    return value;
  },
});
