import ActorListComponent from './actorListComponent';

const ActorList = ({ results }: any) => {
  return (
    <div>
      <div style={{ margin: '20px 0' }} className="actor-header">
        <h2 className="fontresize">Popular Actors</h2>
      </div>
      <ActorListComponent results={results} />
    </div>
  );
};

export default ActorList;
