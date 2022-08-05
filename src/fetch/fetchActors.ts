const fetchActors = async () => {
  //   const res = await fetch(
  //     "https://api.themoviedb.org/3/person/popular?api_key=e56faf842b85121eeb2db5009c9050da&language=en-US&page=1"
  //   );

  const res = await fetch('http://localhost:3000/actors.json');
  const data = await res.json();
  return data;
};

export default fetchActors;
