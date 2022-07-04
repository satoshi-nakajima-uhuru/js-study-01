// CommonJs
// see also : https://www.fastify.io/docs/latest/Guides/Getting-Started/#your-first-server

const fastify = require('fastify')({
  logger: true
})

fastify.get('/', async (request, reply) => {
  reply.type('application/json').code(200)
  return { hello: 'TypeScript' }
})

fastify.listen(3000, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})
