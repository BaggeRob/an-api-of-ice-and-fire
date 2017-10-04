
const restify = require('restify');
const postcards = require('./postcards/postcards');
const postcard = require('./postcards/postcard');

const server = restify.createServer({
  name: 'monolith-evolution',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/', function (req, res, next) {
  const discovery = {
    discovery: '/',
    ...postcards.discovery,
    ...postcard.discovery,
  };

  res.send(discovery);
  return next();
});

postcards.registerResourceFor(server);
postcard.registerResourceFor(server);

server.listen(5000, function () {
  console.log('%s listening at %s', server.name, server.url);
});
