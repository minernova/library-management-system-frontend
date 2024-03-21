import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 h-screen py-auto bg-[url('/hero.jpg')] bg-no-repeat bg-cover ">
        <div className="grid max-w-screen-xl h-screen px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto  place-self-center lg:col-span-7 ">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white ">
              Transforming libraries, <br />
              with
              <span className="text-purple-400">Technology</span>
            </h1>
            <p className="max-w-2xl mb-6 font-normal text-white lg:mb-8 md:text-lg lg:text-xl">
              A journey towards creating smarter and more efficient libraries
              for the <span className="text-purple-400">future.</span>
            </p>

            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <span
                className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-white hover:bg-purple-400 focus:z-10 focus:ring-4 focus:ring-gray-200"
              >
                <Link to={'/books'}>Search Books</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
