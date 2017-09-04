const data = require('./data.json');

const postcards = server => {
  server.get('postcards', function (req, res, next) {
    res.send(data);
    return next();
  });
};

module.exports = postcards;