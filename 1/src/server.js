import fastify from "fastify";

export default () => {
  const app = fastify();
  // BEGIN (write your solution here)
  app.get('/', async (req, rep) => {
    return 'Welcome to Fastify!';
  });
  // END
  return app;
};
