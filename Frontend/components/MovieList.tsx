import React from "react";
import MovieCard from "./ui/MovieCard";
import SkeletonLoader from "./ui/SkeletonLoader";
import { TMovie } from "@/models/models";

// For Skeleton
const tempArr = [1, 2, 3, 4, 5, 6, 7, 8];

const MovieList = ({
  movieList,
  loading,
}: {
  movieList: TMovie[] | null;
  loading: boolean;
}) => {
  return (
    <>
      <ul>
        {loading &&
          tempArr.map((item, index) => (
            <SkeletonLoader key={`${item}-${index}`} />
          ))}
        {!loading &&
          movieList?.map((movie, index) => (
            <MovieCard key={`${movie.id}-${index}`} movie={movie} />
          ))}
      </ul>
    </>
  );
};

export default MovieList;
