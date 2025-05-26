import { TMovie } from "@/models/models";
import Image from "next/image";
import React from "react";

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}: {
  movie: TMovie;
}) => {
  return (
    <div className="movie-card">
      <Image
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
        width={500}
        height={500}
      />
      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <Image src="/star.svg" alt="Star" width={20} height={20} />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          {/* <span>&#183;</span> */}
          <span className="mb-1"> | </span>
          <p className="lang">{original_language.toUpperCase()}</p>
          {/* <span>&#183;</span> */}
          <span className="mb-1"> | </span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
