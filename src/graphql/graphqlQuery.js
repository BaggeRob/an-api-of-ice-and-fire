const { graphqlRestify } = require('graphql-server-restify');
const schema = require('./schema') ;


const graphQLQuery = {
  discovery: {
    message: '/query',
  },
  registerResourceFor: server => {
    server.get('/query', graphqlRestify({
      schema,
    }));

    server.post('/query', graphqlRestify({
      schema,
    }));
  }
};

module.exports = graphQLQuery;