export type CreateMovieInput = {
  title: string;
  year: number;
  genre?: string;
};

export type DeleteMovieInput = {
  id: number;
};

export type UpdateMovieInput = {
  id: number;
  year: number;
};

export type FindMovieByIdInput = {
  id: number;
};
