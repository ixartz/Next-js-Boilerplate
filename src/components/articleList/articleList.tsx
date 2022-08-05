import ArticleListComponent from './articleListComponent';

const ArticleList = ({ results }: any) => {
  return (
    <div className="article-list">
      <div style={{ margin: '40px 0 20px' }}>
        <h2 className="fontresize">Korean Movie, Drama & Entertainment News</h2>
      </div>
      <ArticleListComponent results={results} />
    </div>
  );
};

export default ArticleList;
