export type TMovie = {
  id: number;
  original_language: string;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date?: string;
};

export type TTrending = {
  id: number;
  movie_id: number;
  title: string;
  search_count: number;
  poster_url: string;
};
