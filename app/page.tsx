import contentJSON from 'src/constants/content.json';

const Home: React.FC = () => {
  const content = contentJSON.home;
  return <div>{content.title}</div>;
};

export default Home;
