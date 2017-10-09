const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const messagesResolver = require('../messages/messagesResolver');
const message = require('./types/message');

const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    message: {
      type: message,
      args: {
        reference: { type: GraphQLString },
      },
      resolve: async (parentValue, args) =>{
        return messagesResolver.resolveMessageForReference(args.reference);
      },
    },
  },
});

const schema = new GraphQLSchema({ query: rootQuery });

module.exports = schema;