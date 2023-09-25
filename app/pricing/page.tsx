import contentJSON from 'src/constants/content.json';

const Pricing: React.FC = () => {
  const content = contentJSON.pricing;
  return <div>{content.title}</div>;
};

export default Pricing;
