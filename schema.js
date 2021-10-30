import {
  loadFilesSync,
  mergeTypeDefs,
  mergeResolvers,
  makeExecutableSchema,
} from "graphql-tools";
import path from "path";
// import { loadFilesSync } from "@graphql-tools/load-files";
// import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
// import { makeExecutableSchema } from "apollo-server-express";

const loadedTypes = loadFilesSync(path.join(__dirname, "**", "*.typeDefs.js"));
const loadedResolvers = loadFilesSync(
  path.join(__dirname, "**", "*.{queries,mutations}.js")
);

const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

// @ts-ignore
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
