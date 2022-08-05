import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ActorListComponent = ({ results }: any) => {
  const chooseTitle = (
    title: string,
    name: string,
    idx: number,
    length: number
  ) => {
    if (title) {
      if (length > idx + 1) {
        return `${title}, `;
      }
      return title;
    }
    if (length > idx + 1) {
      return `${name}, `;
    }
    return name;
  };

  return (
    <div className="actor-list">
      <Row xs={2} lg={5} className="g-4">
        {results.map((item: any, idx: number) => {
          return (
            <Col key={idx}>
              <Card
                key={idx}
                className="shadow-sm"
                style={{ margin: '0.5rem 0 0' }}
              >
                <Card.Img
                  className="img-responsive"
                  variant="top"
                  src="http://localhost:3000/images/actor_pic.jpg"
                />
                <Card.Body>
                  <h1 className="text-truncate titleresize ">{item.name}</h1>
                  <h5
                    className="text-truncate"
                    style={{
                      fontSize: '15px',
                    }}
                  >
                    {item.known_for.map((content: any, innerIdx: number) => {
                      return chooseTitle(
                        content.title,
                        content.name,
                        innerIdx,
                        item.known_for.length
                      );
                    })}
                  </h5>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ActorListComponent;
