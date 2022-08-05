import type { GetServerSideProps } from 'next';

import ActorList from '../components/actorList/actorList';
import ArticleList from '../components/articleList/articleList';
import Header from '../components/header';
import MovieAccordion from '../components/movieList/movieAccordion';
import fetchActors from '../fetch/fetchActors';
import fetchArticles from '../fetch/fetchArticles';
import fetchMovies from '../fetch/fetchMovies';

const Index = (props: any) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="accordion-wrapper">
        <div className="accordion-container">
          <MovieAccordion info={props.movies.results} />
        </div>
      </div>
      <div className="container">
        <ActorList results={props.actors.results} />
        <ArticleList results={props.articles.results} />
      </div>
      <footer style={{ backgroundColor: '#F2F2F2', padding: '1rem 0' }}>
        <p className="d-flex justify-content-center">Footer </p>
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const actorData = await fetchActors();
  const articleData = await fetchArticles();
  const movieData = await fetchMovies();

  return {
    props: { actors: actorData, articles: articleData, movies: movieData },
  };
};

export default Index;
