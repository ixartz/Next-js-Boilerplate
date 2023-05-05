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
        className='mr-2 inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
      >
        Learn More
      </a>
    </div>
  );
};

export default Home;
