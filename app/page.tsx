const Home: React.FC = () => {
  return (
    <div className='py-24 px-6 text-center text-gray-800'>
      <h1 className='mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl'>
        NextJS Boilerplate <br />
        <span className='text-blue-600'>Geeks of Kolachi</span>
      </h1>
      <a
        href='https://geeksofkolachi.com'
        target='_blank'
        rel='noreferrer'
        className='btn'
      >
        Learn More
      </a>
    </div>
  );
};

export default Home;
