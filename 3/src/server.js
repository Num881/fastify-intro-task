import _ from "lodash";
import fastify from "fastify";
import getUsers from "./utils.js";

export default () => {
  const app = fastify();

  const users = getUsers();

  // BEGIN (write your solution here)
  app.get ('/user', async (req) => {
    const {page = 1, per = 5} = req.query;

    const currentPage = Number(page);
    const perPage = Number(per);

    let startIndex = (currentPage - 1) * perPage;
    let endIndex = startIndex + perPage;

    return users.slice(startIndex, endIndex);
  })
  // END

  return app;
};
