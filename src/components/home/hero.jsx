"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Input from "../shared/Input";
import { useState } from "react";

export default function Hero() {
  const [openTripTypeModal, setOpenTripTypeModal] = useState(false);
  const [openSeatTypeModal, setOpenSeatTypeModal] = useState(false);
  return (
    <div className="container w-80 pb-12 lg:w-full px-4 lg:px-8">
      <div className="px-8 text-center lg:text-start lg:px-0">
        <h2 className="text-xl font-bold leading-9 lg:text-3xl">
          Where do you want to go?
        </h2>
      </div>
      <div className="flex justify-start mt-4">
        <div className="flex px-2 lg:px-0">
          <button
            className="hover:bg-fill  focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center"
            type="button"
            onClick={() => setOpenTripTypeModal(!openTripTypeModal)}
          >
            Return <img src="/dropdown.svg" className="w-2.5 h-2.5 ms-3" />
          </button>
          <div
            className={`z-10 ${openTripTypeModal ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:"
                >
                  One-way
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:"
                >
                  Return
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:"
                >
                  MultiCity
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex px-2">
          <button
            className="hover:bg-fill  focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            1 Adult <img src="/dropdown.svg" className="w-2.5 h-2.5 ms-3" />
          </button>
          <div
            id="dropdownDelay"
            className="z-10 hidden bg-white divide-y divide-gray-100 px-3 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDelayButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:"
                >
                  One-way
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:"
                >
                  Return
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:"
                >
                  MultiCity
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex px-2">
          <button
            className="hover:bg-fill  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Economy <img src="/dropdown.svg" className="w-2.5 h-2.5 ms-3" />
          </button>
          <div
            id="dropdownDelay"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDelayButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:"
                >
                  Premium Economy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:"
                >
                  First
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:"
                >
                  Mixed
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:flex space-between lg:py-4">
        <div className="w-full lg:w-1/3 mr-2">
          <Input placeholder="Origin" name="origin" value="" />
        </div>
        <div className="w-full lg:w-1/3 mr-2">
          <Input placeholder="To" name="to" value="" />
        </div>
        <div className="w-full lg:w-1/3 mr-2">
          <Input placeholder="Origin" name="origin" value="" />
        </div>
        <button className="bg-primary w-full py-4 px-2 rounded-lg leading-4 cursor-pointer text-sm flex items-center justify-center lg:w-16 lg:mr-2 lg:py-2">
          <MagnifyingGlassIcon className=" w-6" />
        </button>
      </div>
    </div>
  );
}
