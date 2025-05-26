import { TMovie, TTrending } from "@/models/models";

export const getMovies = async (
  page: number,
  query?: string
): Promise<{ pages: number; results: TMovie[] }> => {
  const endpoint = query
    ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}`
    : `https://api.themoviedb.org/3/discover/movie?page=${page}&include_video=false&sort_by=popularity.desc`;

  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();
  return data;
};

export const getTrendingMovies = async (): Promise<{
  message: string;
  data: TTrending[];
}> => {
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";
  const res = await fetch(backendUrl + "/api/trending", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  return res.json();
};

export const trackSearch = async (movie: TMovie) => {
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";
  const endpoint = backendUrl + "/api/search";
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: movie.title,
      poster_url: movie.poster_path,
      movie_id: movie.id,
    }),
  });
  if (!res.ok) {
    throw new Error("Failed to track search");
  }
};
