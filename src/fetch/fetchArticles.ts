const fetchArticles = async () => {
  const res = await fetch('http://localhost:3000/articles.json');
  const data = await res.json();

  return data;
};

export default fetchArticles;
