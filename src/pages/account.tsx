import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Account = () => {
  const router = useRouter();
  return (
    <section className="mx-auto max-w-screen-md">
      <div className="mt-12 flex flex-wrap items-center justify-center">
        <div className="mx-auto mb-20 w-full">
          <div className="mb-14 flex flex-row items-center justify-center lg:justify-center">
            <h1 className="mb-0 mr-4 text-3xl">My Account</h1>
          </div>
          <div className="mx-5 my-10 flex flex-row justify-between">
            <div className="mx-3 w-2/3 border-2 border-gray-400 bg-gradient-to-r from-blue-400 to-white">
              <div className="h-6 w-full bg-gradient-to-b from-gray-600 to-transparent"></div>
              <div className="h-full w-2 -translate-y-6 bg-teal-400"></div>
            </div>
            <form className="mx-3 w-1/3">
              <div className="mb-6">
                <label className="text-md mb-2 block font-medium text-black">
                  First Name
                </label>
                <input
                  type="text"
                  className="block w-full rounded-lg border bg-gray-400 p-2.5 text-sm text-black focus:border-gray-300"
                />
              </div>
              <div className="mb-6">
                <label className="text-md mb-2 block font-medium text-black">
                  Last Name
                </label>
                <input
                  type="text"
                  className="block w-full rounded-lg border bg-gray-400 p-2.5 text-sm text-black focus:border-gray-300"
                />
              </div>
              <div className="mb-6">
                <label className="text-md mb-2 block font-medium text-black">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full rounded-lg border bg-gray-400 p-2.5 text-sm text-black focus:border-gray-300"
                  required
                />
              </div>
            </form>
          </div>
          <div className="text-center lg:text-center">
            <button className="border-5 translate-x-20 rounded border border-teal-700 bg-gradient-to-t from-teal-600 to-teal-500 py-1 px-7 text-lg text-white">
              Save Changes
            </button>
            <p className="mt-2 mb-0 pt-1 text-sm">
              <span>Need help? </span>
              <a
                href="#"
                className="text-teal-500 no-underline transition duration-150 hover:text-teal-600 focus:text-teal-600 active:text-teal-600"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>

        <footer className="w-full border-t border-gray-300 text-center text-xs">
          <div className="relative my-10 flex w-full overflow-hidden">
            <div className="absolute mx-20 my-10 text-center text-lg text-white">
              <p>JOIN US APPTAPBOOM-</p>
              <p>TextTextText</p>
            </div>
            <img
              src={`${router.basePath}/assets/images/footer.png`}
              className="w-full object-cover"
            />
          </div>
          <div className="items-center">
            <Link
              href="/"
              className="text-grey-800 mx-3 border-none text-sm hover:text-pink-600 focus:text-pink-600 active:text-pink-600"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-grey-800 mx-3 border-none text-sm hover:text-pink-600 focus:text-pink-600 active:text-pink-600"
            >
              About us
            </Link>
            <Link
              href="/"
              className="text-grey-800 mx-3 border-none text-sm hover:text-pink-600 focus:text-pink-600 active:text-pink-600"
            >
              Feedback
            </Link>
            <Link
              href="/"
              className="text-grey-800 mx-3 border-none text-xs hover:text-pink-600 focus:text-pink-600 active:text-pink-600"
            >
              Download App
            </Link>
            <Link
              href="/"
              className="text-grey-800 mx-3 border-none text-sm hover:text-pink-600 focus:text-pink-600 active:text-pink-600"
            >
              Join us
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Account;
