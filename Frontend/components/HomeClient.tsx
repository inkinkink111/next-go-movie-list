"use client";

import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import Search from "./Search";
import MovieList from "./MovieList";
import { getMovies } from "@/lib/action";
import { TMovie } from "@/models/models";
import { trackSearch } from "@/lib/action";
import TrendingList from "./TrendingList";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonLoader from "./ui/SkeletonLoader";

// For Skeleton
const tempArr = ["temp1", "temp2", "temp3", "temp4"];

const HomeClient = () => {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getMovies(page, debouncedSearchTerm);
        if (page === 1) {
          setMovies(data.results);
        } else {
          setMovies((prevMovies) => [...prevMovies, ...data.results]);
        }

        // Simple Track search
        if (searchTerm.trim() && data.results.length > 0) {
          trackSearch(data.results[0]);
        }
      } catch (err: unknown) {
        setErr("Failed to fetch movies");
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [debouncedSearchTerm]);

  const handleFetchMore = async () => {
    setPage((prevPage) => prevPage + 1);
    const data = await getMovies(page + 1, "");
    if (data.results.length > 0) {
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    }
  };

  const onSetSearchTerm = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setPage(1);
  };

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={onSetSearchTerm} />
      <TrendingList />
      <section className="all-movies">
        <h2>All Movies</h2>
        {err ? (
          <p className="text-red-500">{err}</p>
        ) : (
          <InfiniteScroll
            dataLength={movies.length}
            next={handleFetchMore}
            hasMore={true}
            loader={
              loading ? (
                <p>Loading...</p>
              ) : (
                <ul className="mt-[20px]">
                  {tempArr.map((item, index) => (
                    <SkeletonLoader key={`${item}-${index}`} />
                  ))}
                </ul>
              )
            }
          >
            <MovieList movieList={movies} loading={loading} />
          </InfiniteScroll>
        )}
      </section>
    </>
  );
};

export default HomeClient;
