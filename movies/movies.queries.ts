import client from "../client";
import { FindMovieByIdInput } from "../types/gql.types";
export default {
  Query: {
    movies: () => client.movie.findMany(),
    movie: (_: any, { id }: FindMovieByIdInput) =>
      client.movie.findUnique({ where: { id } }),
  },
};
