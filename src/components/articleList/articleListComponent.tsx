import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ArticleListComponent = ({ results }: any) => {
  return (
    <div className="articles" style={{ margin: '2rem 0 0' }}>
      <Row xs={1} md={1} lg={2} className="g-4">
        {results.map((item: any, idx: number) => {
          return (
            <Col key={idx}>
              <a
                href={`article/${idx + 1}`}
                className="text-decoration-none text-primary d-flex flex-row "
              >
                <img
                  className="article-image"
                  src={item.image_path}
                  alt={`article_image_${idx + 1}`}
                />
                <Card className={'border-0'} style={{ width: '100%' }}>
                  <Card.Body style={{ padding: '0 10px' }}>
                    <Card.Title
                      className="article-title"
                      style={{ fontSize: '150%' }}
                    >
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-dark">{item.date}</Card.Text>
                  </Card.Body>
                </Card>
              </a>
              <hr />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ArticleListComponent;
