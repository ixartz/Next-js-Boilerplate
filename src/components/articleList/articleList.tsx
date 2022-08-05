import ArticleListComponent from './articleListComponent';

const ArticleList = ({ results }: any) => {
  return (
    <div className="article-list">
      <div className="article-header">
        <h2 className="header-font-resize">
          Korean Movie, Drama & Entertainment News
        </h2>
      </div>
      <ArticleListComponent results={results} />
    </div>
  );
};

export default ArticleList;
