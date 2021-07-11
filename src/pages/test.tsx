import { Layout, Meta } from '@components/common';

const Test = () => (
  <Layout meta={<Meta title="Test" description="Lorem ipsum" />}>
    <div className="text-center">
      <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
        Pricing
      </h2>
      <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
        Take control of your team.
      </p>
      <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
        Start building for free, then add a site plan to go live. Account plans
        unlock additional features.
      </p>
    </div>
  </Layout>
);

export default Test;
