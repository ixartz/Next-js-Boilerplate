import ActorListComponent from './actorListComponent';

const ActorList = ({ results }: any) => {
  return (
    <div>
      <div className="actor-header">
        <h2 className="header-font-resize">Popular Actors</h2>
      </div>
      <ActorListComponent results={results} />
    </div>
  );
};

export default ActorList;
