const fetchMovies = async () => {
  //   const res = await fetch(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=e56faf842b85121eeb2db5009c9050da&language=en-US&page=1"
  //   );
  const res = await fetch('http://localhost:3000/movies.json');

  const data = await res.json();

  return data;
};

export default fetchMovies;
