import contentJSON from 'src/constants/content.json';

const About: React.FC = () => {
  const content = contentJSON.about;
  return <div>{content.title}</div>;
};

export default About;
