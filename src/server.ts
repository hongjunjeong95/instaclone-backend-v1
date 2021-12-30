require('dotenv').config();
import express from 'express';
import logger from 'morgan';
import { ApolloServer } from 'apollo-server-express';

import client from './client';
import { typeDefs, resolvers } from './schema';
import { getUser } from './users/users.utils';
import { IResolvers } from 'graphql-tools';

const PORT = process.env.PORT;

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: async ({ req }) => {
    return {
      loggedInUser: await getUser(req.headers.token as string),
      client,
    };
  },
});

// server
//   .listen(PORT)
//   .then(() =>
//     console.log(`🚀Server is running on http://localhost:${PORT} ✅`)
//   );
// );

const app = express();
app.use(logger('tiny'));
server.applyMiddleware({ app });
app.listen({ port: PORT }, () => {
  console.log(`🚀Server is running on http://localhost:${PORT} ✅`);
});
