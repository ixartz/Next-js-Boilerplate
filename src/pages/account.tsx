import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Account = () => {
  const router = useRouter();
  return (
    <section className="mx-auto max-w-screen-md">
      <div className="mt-12 flex flex-wrap items-center justify-center">
        <div className="mx-auto mb-20 w-full">
          <div className="mb-12 flex flex-row items-center justify-center lg:justify-center">
            <h1 className="mb-0 mr-4 text-3xl">My Account</h1>
          </div>
          <div className="m-5 flex flex-row justify-between">
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
          <div className="mx-5 flex flex-col text-center lg:text-center">
            <div className="my-5 flex w-full flex-row items-center">
              <div className="mx-3 flex w-2/3 flex-col items-center justify-center">
                <div className="flex w-full flex-row items-center justify-center">
                  <div className="mr-3 h-0.5 w-1/4 bg-gray-400"></div>
                  <span className="text-lg text-black">
                    Notification Preferences
                  </span>
                  <div className="ml-3 h-0.5 w-1/4 bg-gray-400"></div>
                </div>
                <ul className="mt-5 flex w-full flex-row items-center bg-white text-sm font-medium text-gray-900">
                  <li className="flex w-1/3 justify-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        value=""
                        className="h-10 w-10 rounded border-gray-300 bg-gray-100 accent-white focus:ring-teal-600"
                      />
                      <span className="ml-2 w-full text-lg font-medium text-black">
                        Email
                      </span>
                    </div>
                  </li>
                  <li className="flex w-1/3 justify-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        value=""
                        className="h-10 w-10 rounded border-gray-300 bg-gray-100 accent-white focus:ring-teal-600"
                      />
                      <span className="ml-2 w-full text-lg font-medium text-black">
                        Push
                      </span>
                    </div>
                  </li>
                  <li className="flex w-1/3 justify-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        value=""
                        className="h-10 w-10 rounded border-gray-300 bg-gray-100 accent-white focus:ring-teal-600"
                      />
                      <span className="ml-2 w-full text-lg font-medium text-black">
                        No Contact
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-3 w-1/3">
                <button className="border-5 h-12 rounded border border-teal-700 bg-gradient-to-t from-teal-600 to-teal-500 py-1 px-3 text-xl text-white">
                  Save Changes
                </button>
              </div>
            </div>
            <p className="text-md mt-2 mb-0 pt-1">
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
