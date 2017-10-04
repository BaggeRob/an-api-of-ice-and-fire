const { findPostcard } = require('../database/databaseHandler');

const postcard = {
  discovery: {
    postcard: '/postcards/{id}',
  },
  registerResourceFor: server => {
    server.get('/postcards/:id', (req, res, next) => {
      const id = req.params.id;
      const postcard = findPostcard(id);

      res.send(postcard);
      next();
    });
  }
};

module.exports = postcard;
