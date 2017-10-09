const { findAddressForReference, findAddresses } = require('../database/databaseHandler');

const addressResolver = {
  resolveAddressForReference: reference =>
    findAddressForReference(reference),

  resolveAddresses: findAddresses,
};

module.exports = addressResolver;