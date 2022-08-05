import ActorListComponent from './actorListComponent';

const ActorList = ({ results }: any) => {
  return (
    <div>
      <div className="actor-header header shadow-sm">
        <h2 className="fontresize">Popular Actors</h2>
      </div>
      <ActorListComponent results={results} />
    </div>
  );
};

export default ActorList;
