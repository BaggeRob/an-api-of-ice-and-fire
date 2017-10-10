const { graphql } = require('graphql');
const graphQLSchema = require('../graphql/schema');

const findMessageGraphQLQuery = messageId =>
  `{
      message(reference: "/messages/${messageId}") {
        _links
        message
        _embedded {
          recipient {
            ...recipientFields
          }
        }
      }
   }

  fragment recipientFields on Contact {
      _links
      firstName
      lastName
      occupation
      _embedded {
        address {
          ...addressFields
        }
      }
  }
  
  fragment addressFields on Address {
    _links
    building
    street
    townCity
    county
    postcode
  }
  `;

const message = {
  discovery: {
    message: '/messages/{id}',
  },
  registerResourceFor: server => {
    server.get('/messages/:id', async (req, res, next) => {
      const id = req.params.id;
      const messageResponse = await graphql(graphQLSchema, findMessageGraphQLQuery(id), 'message');
      const message = messageResponse.data.message;

      res.send(message);
      next();
    });
  }
};

module.exports = message;
