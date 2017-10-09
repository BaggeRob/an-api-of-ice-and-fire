const {
  GraphQLObjectType,
} = require('graphql');
const addressResolver = require('../../addresses/addressResolver');
const address = require('./address');

const contactEmbedded = new GraphQLObjectType({
  name: 'ContactEmbedded',
  fields: () => ({
    address: {
      type: address,
      resolve: contactLinks => {
        const addressReference = contactLinks.address.href;

        return addressResolver.resolveAddressForReference(addressReference);
      },
    }
  }),
});

module.exports = contactEmbedded;
