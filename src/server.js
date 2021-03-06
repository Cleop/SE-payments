const Hapi = require('hapi');
const Vision = require('vision');
const Inert = require('inert');
const routes = require('./routes');

const server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 8000,
});

server.register([Vision, Inert], err => {
  if (err) throw err;

  server.views({
    engines: {
      hbs: require('handlebars')
    },
    relativeTo: __dirname,
    layoutPath: '../views/layout',
    layout: 'default',
    path: '../views'
  });

  server.route(routes);
});

module.exports = server;
