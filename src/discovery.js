const postcards = require('./postcards/postcards');
const postcard = require('./postcards/postcard');

const discovery = {
  registerResourceFor: server => {
    server.get('/', function (req, res, next) {
      const discovery = {
        discovery: '/',
        ...postcards.discovery,
        ...postcard.discovery,
      };

      res.send(discovery);
      return next();
    });
  }
};

module.exports = discovery;