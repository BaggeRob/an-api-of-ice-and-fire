const { findPostcards } = require('../database/databaseHandler');

const postcards = server => {
  server.get('/postcards', (req, res, next) => {
    const postcards = findPostcards();
    res.send(postcards);
    return next();
  });
};

module.exports = postcards;
