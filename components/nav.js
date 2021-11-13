import React from "react";
import Images from "./images";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <nav className="relative">
            <div className="flex justify-between items-center">
              <Link className="text-lg font-medium" href="#">
                <img
                  className="h-7"
                  src="zeus-assets/logo/logo-zeus-red.svg"
                  alt=""
                  width="auto"
                />
              </Link>
              <div className="lg:hidden">
                <button className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded">
                  <svg
                    className="block h-4 w-4"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
              <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:w-auto lg:space-x-12">
                <li>
                  <Link className="text-sm font-medium" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-sm font-medium" href="/stories">
                    Stories
                  </Link>
                </li>
                <li>
                  <Link className="text-sm font-medium" href="#">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link className="text-sm font-medium" href="#">
                    About
                  </Link>
                </li>
              </ul>
              <div className="hidden lg:block">
                <Link
                  className="inline-block mr-2 py-3 px-8 text-sm leading-normal rounded border font-medium"
                  href="#"
                >
                  Log in
                </Link>
                <Link
                  className="inline-block py-3 px-8 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200"
                  href="#"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <Link
                className="mr-auto text-2xl font-medium leading-none"
                href="#"
              >
                <img
                  className="h-7"
                  src="zeus-assets/logo/logo-zeus-red.svg"
                  alt=""
                  width="auto"
                />
              </Link>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                    href="#"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Company
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                    href="#"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <Link
                  className="block mb-2 py-3 text-sm text-center leading-normal rounded border font-medium"
                  href="#"
                >
                  Log in
                </Link>
                <Link
                  className="block py-3 text-sm text-center text-white leading-normal rounded bg-red-400 hover:bg-red-300 font-medium transition duration-200"
                  href="#"
                >
                  Sign Up
                </Link>
              </div>
              <p className="mt-6 mb-4 text-sm text-center text-gray-500">
                <span>© 2021 All rights reserved.</span>
              </p>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
