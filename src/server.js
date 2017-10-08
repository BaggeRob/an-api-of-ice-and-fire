const restify = require('restify');
const Logger = require('bunyan');
const discovery = require('./discovery');
const message = require('./messages/message');
const messages = require('./messages/messages');
const contact = require('./contacts/contact');
const contacts = require('./contacts/contacts');

const log = new Logger.createLogger({
  name: 'api-evolution',
  serializers: {
    req: Logger.stdSerializers.req
  }
});

const server = restify.createServer({
  name: 'monolith-evolution',
  version: '1.0.0',
  log: log
});

server.pre(function (request, response, next) {
  request.log.info({ req: request }, 'REQUEST');
  next();
});

// setup server
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// register resources
discovery.registerResourceFor(server);
messages.registerResourceFor(server);
message.registerResourceFor(server);
contacts.registerResourceFor(server);
contact.registerResourceFor(server);

server.listen(5000, function () {
  console.log('%s listening at %s', server.name, server.url);
});
