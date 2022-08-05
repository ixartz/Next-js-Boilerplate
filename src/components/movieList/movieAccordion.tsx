import { useState } from 'react';
import Card from 'react-bootstrap/Card';

const MovieAccordion = ({ info }: any) => {
  const [openCard, setOpenCard] = useState(0);

  const setOpenCardWidth = (idx: number) => {
    if (idx === openCard) {
      return '64%';
    }
    return '4%';
  };

  return (
    <>
      <div className="accordion bg-dark">
        <div className="accordion-inner">
          {Array.from({ length: 10 }).map((_, idx) => {
            return (
              <div
                key={idx}
                className="movie-nav-card overflow-hidden shadow-lg"
                style={{
                  width: setOpenCardWidth(idx),
                }}
                onClick={() => {
                  setOpenCard(idx);
                }}
              >
                <Card className="d-flex rounded-0 bg-dark movie-accordion-card flex-row border-0 text-white">
                  <h4
                    className="movie-card-corner-title"
                    style={{
                      position: openCard === idx ? 'relative' : 'absolute',
                      left: openCard !== idx ? '' : '0px',
                      display: openCard === idx ? 'none' : '',
                    }}
                  >
                    {idx + 1}
                  </h4>
                  <img
                    alt={`accordion_image_${idx + 1}`}
                    className="accordion-num-img"
                    src={`http://localhost:3000/images/${idx + 1}.png`}
                    style={{
                      // position: "absolute",
                      height: '29%',
                      width: '29%',
                      display: openCard !== idx ? 'none' : '',
                    }}
                  />
                  <h3
                    className="accordion-card-title"
                    style={{
                      display: openCard === idx ? '' : 'none',
                    }}
                  >
                    {info[idx].title}
                  </h3>
                  <Card.Img
                    className="movie-card-image rounded-0"
                    src={'http://localhost:3000/images/movie_placeholder.jpg'}
                  />
                </Card>
                <div
                  className="accordion-score-block bg-dark"
                  style={{
                    display: openCard === idx ? '' : 'none',
                  }}
                >
                  <h4 className="accordion-score">{info[idx].vote_average}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mobile-accordion">
        <div className="accordion-inner">
          {Array.from({ length: 10 }).map((_, idx) => {
            return (
              <div
                key={idx}
                className="movie-nav-card overflow-hidden shadow-lg"
                style={{
                  width: setOpenCardWidth(idx),
                }}
                onClick={() => {
                  setOpenCard(idx);
                }}
              >
                <Card className="d-flex rounded-0 bg-dark movie-accordion-card flex-row border-0 text-white">
                  <h4 className="movie-card-corner-title">{idx + 1}</h4>
                  <h3
                    className="accordion-card-title"
                    style={{
                      display: openCard === idx ? '' : 'none',
                    }}
                  >
                    {info[idx].title}
                  </h3>
                  <Card.Img
                    className="movie-card-image rounded-0"
                    src={'http://localhost:3000/images/movie_placeholder.jpg'}
                  />
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MovieAccordion;
