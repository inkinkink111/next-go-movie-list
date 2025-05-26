import { getTrendingMovies } from "@/lib/action";
import { TTrending } from "@/models/models";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const TrendingList = () => {
  const [trending, setTrending] = useState<TTrending[]>([]);

  useEffect(() => {
    const getTrending = async () => {
      const res = await getTrendingMovies();
      setTrending(res.data);
    };

    getTrending();
  }, []);

  return (
    <>
      <section className="trending">
        <h2>Trending Movies</h2>
        {trending.length > 0 ? (
          <ul>
            {trending.map((movie, index) => (
              <li key={movie.id + movie.movie_id}>
                <p>{index + 1}</p>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_url}`}
                  alt={movie.title}
                  width={500}
                  height={250}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="min-h-[270px]"></div>
        )}
      </section>
    </>
  );
};

export default TrendingList;
