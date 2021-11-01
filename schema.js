import { loadFilesSync, mergeTypeDefs, mergeResolvers } from "graphql-tools";
import path from "path";

const loadedTypes = loadFilesSync(path.join(__dirname, "**", "*.typeDefs.js"));
const loadedResolvers = loadFilesSync(
  path.join(__dirname, "**", "*.resolvers.js")
);
export const typeDefs = mergeTypeDefs(loadedTypes);
export const resolvers = mergeResolvers(loadedResolvers);
