export default function (server) {

  server.route({
    path: '/api/lsbeat_kibana/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

};
