const restify = require('restify');
const Logger = require('bunyan');

const discovery = require('./discovery');
const message = require('./messages/message');
const messages = require('./messages/messages');
const contact = require('./contacts/contact');
const contacts = require('./contacts/contacts');
const addresses = require('./addresses/addresses');
const address = require('./addresses/address');
const graphiql = require('./graphql/graphiql');
const graphql = require('./graphql/graphqlQuery');

const log = new Logger.createLogger({
  name: 'api-evolution',
  serializers: {
    req: Logger.stdSerializers.req
  }
});

const server = restify.createServer({
  name: 'api-evolution',
  version: '1.0.0',
  log,
});

server.pre((request, response, next) => {
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
addresses.registerResourceFor(server);
address.registerResourceFor(server);
graphql.registerResourceFor(server);
graphiql.registerResourceFor(server);

const port = process.argv[2] || 5000;

server.listen(port, () => {
  console.log('%s listening at %s', server.name, server.url);
});
