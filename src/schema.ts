import { IResolvers } from "apollo-server-express";
import { loadFilesSync, mergeTypeDefs, mergeResolvers } from "graphql-tools";
import path from "path";

const loadedTypes = loadFilesSync(path.join(__dirname, "**", "*.typeDefs.ts"));
const loadedResolvers = loadFilesSync(
  path.join(__dirname, "**", "*.resolvers.ts")
);
export const typeDefs = mergeTypeDefs(loadedTypes);
export const resolvers = mergeResolvers(loadedResolvers) as
  | IResolvers<any, any>
  | IResolvers<any, any>[]
  | undefined;
