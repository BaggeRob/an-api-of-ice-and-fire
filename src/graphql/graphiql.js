const { graphiqlRestify } = require('graphql-server-restify');

const graphiql = {
  discovery: {
    graphiql: '/graphiql',
  },
  registerResourceFor: server => {
    server.get('/graphiql', graphiqlRestify({ endpointURL: '/query' }));
  }
};

module.exports = graphiql;