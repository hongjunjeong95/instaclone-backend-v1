import client from "../client";
import {
  CreateMovieInput,
  DeleteMovieInput,
  UpdateMovieInput,
} from "../types/gql.types";

export default {
  Mutation: {
    createMovie: (_: any, { title, year, genre }: CreateMovieInput) =>
      client.movie.create({
        data: {
          title,
          year,
          genre,
        },
      }),
    deleteMovie: (_: any, { id }: DeleteMovieInput) =>
      client.movie.delete({ where: { id } }),
    updateMovie: (_: any, { id, year }: UpdateMovieInput) =>
      client.movie.update({ where: { id }, data: { year } }),
  },
};
