import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const SignUp = () => {
  const router = useRouter();
  return (
    <section className="mx-auto max-w-screen-md">
      <div className="flex flex-wrap items-center lg:justify-between ">
        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <img
            src={`${router.basePath}/assets/images/auth.png`}
            className="w-full"
          />
        </div>
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 mx-auto">
          <div className="my-2 flex w-7 justify-end">
            <Link href="/">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </Link>
          </div>
          <form>
            <div className="mb-14 flex flex-row items-center justify-center lg:justify-center">
              <h1 className="mb-0 mr-4 text-lg">Sign Up</h1>
            </div>
            <div className="mb-6">
              <label className="text-md mb-2 block font-medium text-black">
                Email *
              </label>
              <input
                type="email"
                className="block w-full rounded-lg border bg-gray-400 p-2.5 text-sm text-black focus:border-gray-300"
                required
              />
            </div>
            <div className="mb-6">
              <label className="text-md mb-2 block font-medium text-black">
                Password *
              </label>
              <input
                type="password"
                id="password"
                className="block w-full rounded-lg border bg-gray-400 p-2.5 text-sm text-black focus:border-gray-300"
                required
              />
            </div>
            <div className="mb-6">
              <label className="text-md mb-2 block font-medium text-black">
                Confirm password *
              </label>
              <input
                type="password"
                id="password"
                className="block w-full rounded-lg border bg-gray-400 p-2.5 text-sm text-black focus:border-gray-300"
                required
              />
            </div>
            <div className="text-center lg:text-center">
              <button className="border-5 rounded border border-teal-700 bg-gradient-to-t from-teal-600 to-teal-500 py-1 px-7 text-lg text-white">
                Sign up
              </button>
              <p className="mt-20 mb-3 text-sm">Or sign up with</p>
              <div className="flex items-center justify-center">
                <img
                  src={`${router.basePath}/assets/images/facebook.png`}
                  className="w-50 m-7"
                />
                <img
                  src={`${router.basePath}/assets/images/twitter.png`}
                  className="w-50 m-7"
                />
                <img
                  src={`${router.basePath}/assets/images/google.png`}
                  className="w-50 m-7"
                />
              </div>
              <p className="mt-2 mb-0 pt-1 text-sm">
                <span>Need help? </span>
                <a
                  href="#!"
                  className="text-teal-500 no-underline transition duration-150 hover:text-teal-600 focus:text-teal-600 active:text-teal-600"
                >
                  Contact us
                </a>
              </p>
            </div>
          </form>
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

export default SignUp;
