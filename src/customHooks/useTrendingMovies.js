import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector(store=>store.movies.trendingMovies)
  const getMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    !trendingMovies && getMoviesData();
  }, []);
};

export default useTrendingMovies;
