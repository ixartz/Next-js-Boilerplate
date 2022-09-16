import { useEffect, useState } from 'react';

// Function to load data here

function randomInt() {
  const int = Math.floor(Math.random() * 1000) + 1;

  return int;
}

const User = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [randomNumberFollowers, setRandomNumberFollowers] = useState(0);

  useEffect(() => {
    setRandomNumber(randomInt());
    setRandomNumberFollowers(randomInt());
  }, []);

  return (
    <div className="background-color: rgb(255 255 255)">
      <header>
        <div className="relative">
          <div className="relative">
            <img
              className="h-13 z-0 w-full"
              src="/assets/images/background.png"
            />
          </div>
          <div className="h-50 absolute left-12 bottom-0 z-10 w-40 rounded-full p-1 ring-2 ring-gray-700 dark:ring-gray-800 ">
            <img src="/assets/images/Tyk-icon-logo.png" />
          </div>
        </div>
      </header>

      <div className="p-4">
        {/* Monica to build below top nav here */}
        <h2 className="indent- ml-10 p-4 text-2xl font-bold">
          Bill Gates
          <div className="font-normal  text-slate-500">
            @billgates
            <button
              type="button"
              className="dark:focus:ring-[#1da1f2]/55 float-right mr-2 mb-2 inline-flex items-center rounded-lg bg-[#1da1f2] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#1da1f2]/90 focus:outline-none focus:ring-4 focus:ring-[#1da1f2]/50"
            >
              <svg
                className="mr-2 -ml-1 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
                ></path>
              </svg>
              Follow a Tykling
            </button>
          </div>
        </h2>

        <div>
          <p className="mb-3 ml-12 indent-2 font-light">
            Here is a description of Tyklings hard at work
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <p className="mb-3 ml-12 indent-2 font-light">
            {' '}
            <strong id="following" className="font-semibold">
              {randomNumberFollowers}
            </strong>{' '}
            Following
          </p>
          <p className="mb-3 ml-5 font-light">
            <strong id="followers" className="font-semibold">
              {randomNumber}
            </strong>{' '}
            Followers
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
