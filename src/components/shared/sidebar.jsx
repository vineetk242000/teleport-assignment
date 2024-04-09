import Link from "next/link";

const Sidebar = ({ open, setOpen }) => {
  return (
    <div
      className={`${open ? "flex" : "hidden"} lg:flex min-h-screen flex-col flex-auto flex-shrink-0 bg-white text-gray-800`}
    >
      <div
        className={`${open ? "md:w-2/12" : "lg:w-[5%]"} px-2 fixed flex flex-col top-0 left-0 w-full  bg-white h-full border-r-default border-r-fill pt-16 z-10`}
      >
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="border-b-default border-b-fill ml-2 py-2 md:ml-0 lg:ml-2">
              <Link
                href="/"
                className="relative flex items-center  h-11 focus:outline-none hover:bg-fill text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6 md:pr-2 lg:pr-4 rounded-md"
              >
                <img
                  className="inline-flex justify-center items-center w-5 h-5 ml-2"
                  src="/user.svg"
                />
                <span className="ml-4 text-sm tracking-wide truncate">Sign In</span>
              </Link>
            </li>
            <div className="border-b-default border-b-fill">
              <li className="ml-2 py-1 md:ml-0 lg:ml-2">
                <Link
                  href="/"
                  className="relative flex items-center  h-11 bg-fill focus:outline-none hover:bg-fill text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6 md:pr-2 lg:pr-4 rounded-md"
                >
                  <img
                    className="inline-flex justify-center items-center w-5 h-5 ml-2"
                    src="/flight.svg"
                  />
                  <span className="ml-4 text-sm tracking-wide truncate">Flights</span>
                </Link>
              </li>
              <li className=" ml-2 py-1 md:ml-0 lg:ml-2">
                <Link
                  href="/"
                  className="relative flex items-center  h-11  focus:outline-none hover:bg-fill text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6 md:pr-2 lg:pr-4 rounded-md"
                >
                  <img
                    className="inline-flex justify-center items-center w-5 h-5 ml-2"
                    src="/stay.svg"
                  />
                  <span className="ml-4 text-sm tracking-wide truncate">Stays</span>
                </Link>
              </li>
              <li className=" ml-2 py-1 md:ml-0 lg:ml-2">
                <Link
                  href="/"
                  className="relative flex items-center  h-11  focus:outline-none hover:bg-fill text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6 md:pr-2 lg:pr-4 rounded-md"
                >
                  <img
                    className="inline-flex justify-center items-center w-5 h-5 ml-2"
                    src="/car.svg"
                  />
                  <span className="ml-4 text-sm tracking-wide truncate">Car Rental</span>
                </Link>
              </li>
              <li className="ml-2 py-1 md:ml-0 lg:ml-2">
                <Link
                  href="/"
                  className="relative flex items-center  h-11  focus:outline-none hover:bg-fill text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6 md:pr-2 lg:pr-4 rounded-md"
                >
                  <img
                    className="inline-flex justify-center items-center w-5 h-5 ml-2"
                    src="/vacation.svg"
                  />
                  <span className="ml-4 text-sm tracking-wide truncate">
                    Flight+Hotel
                  </span>
                </Link>
              </li>
            </div>
            <div className="border-b-default border-b-fill">
              <li className=" ml-2 py-1 md:ml-0 lg:ml-2">
                <Link
                  href="/"
                  className="relative flex items-center  h-11  focus:outline-none hover:bg-fill text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6 md:pr-2 lg:pr-4 rounded-md"
                >
                  <img
                    className="inline-flex justify-center items-center w-5 h-5 ml-2"
                    src="/explore.svg"
                  />
                  <span className="ml-4 text-sm tracking-wide truncate">Explore</span>
                </Link>
              </li>
              <li className=" ml-2 py-1 md:ml-0 lg:ml-2">
                <Link
                  href="/"
                  className="relative flex items-center  h-11  focus:outline-none hover:bg-fill text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6 md:pr-2 lg:pr-4 rounded-md"
                >
                  <img
                    className="inline-flex justify-center items-center w-5 h-5 ml-2"
                    src="/kayak.svg"
                  />
                  <span className="ml-4 text-sm tracking-wide truncate">Direct</span>
                </Link>
              </li>
              <li className=" ml-2 py-1 md:ml-0 lg:ml-2">
                <Link
                  href="/"
                  className="relative flex items-center  h-11  focus:outline-none hover:bg-fill text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6 md:pr-2 lg:pr-4 rounded-md"
                >
                  <img
                    className="inline-flex justify-center items-center w-5 h-5 ml-2"
                    src="/time.svg"
                  />
                  <span className="ml-4 text-sm tracking-wide truncate">
                    Best Time to Travel
                  </span>
                </Link>
              </li>
            </div>
            <li className="border-b-default border-b-fill ml-2 py-2 md:ml-0 lg:ml-2">
              <Link
                href="/"
                className="relative flex items-center  h-11  focus:outline-none hover:bg-fill text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6 md:pr-2 lg:pr-4 rounded-md"
              >
                <img
                  className="inline-flex justify-center items-center w-5 h-5 ml-2"
                  src="/feedback.svg"
                />
                <span className="ml-4 text-sm tracking-wide truncate">Feedback</span>
              </Link>
            </li>
            <li className="border-b-default border-b-fill ml-2 py-2 md:ml-0 lg:ml-2">
              <Link
                href="/"
                className="relative flex items-center  h-11  focus:outline-none hover:bg-fill text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6 md:pr-2 lg:pr-4 rounded-md"
              >
                <img
                  className="inline-flex justify-center items-center w-5 h-5 ml-2"
                  src="/wishlist.svg"
                />
                <span className="ml-4 text-sm tracking-wide truncate">Trips</span>
              </Link>
            </li>

            <li className="border-b-default border-b-fill ml-2 py-2 md:ml-0 lg:ml-2">
              <Link
                href="/"
                className="relative flex items-center  h-11  focus:outline-none hover:bg-fill text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6 md:pr-2 lg:pr-4 rounded-md"
              >
                <img
                  className="inline-flex justify-center items-center w-5 h-5 ml-2"
                  src="/business.svg"
                />
                <span className="ml-4 text-sm tracking-wide truncate">
                  KAYAK for Business
                </span>
              </Link>
            </li>
            <li className="border-b-default border-b-fill ml-2 py-2 md:ml-0 lg:ml-2 ">
              <Link
                href="/"
                className="relative flex items-center  h-11  focus:outline-none hover:bg-fill text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6 md:pr-2 lg:pr-4 rounded-md"
              >
                <img
                  className="inline-flex justify-center items-center w-5 h-5 ml-2"
                  src="	https://www.kayak.co.in/res/images/flags-svg/in.svg"
                />
                <span className="ml-4 text-sm tracking-wide truncate">English</span>
              </Link>
            </li>
            <li className="border-b-default border-b-fill ml-2 py-2 md:ml-0 lg:ml-2">
              <Link
                href="/"
                className="relative flex items-center  h-11 focus:outline-none hover:bg-fill text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6 md:pr-2 lg:pr-4 rounded-md"
              >
                <span className="inline-flex justify-center items-center w-5 h-5 ml-2">
                  &#8377;
                </span>

                <span className="ml-4 text-sm tracking-wide truncate"> Rupees </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
