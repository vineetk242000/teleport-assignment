import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-900 bottom-0 md:left:24">
      <div className="w-full px-8 py-16 lg:py-8 flex flex-col justify-center items-center md:items-start">
        <div className="grid grid-cols-3 gap-8 md:grid-cols-4 md:gap-x-48">
          <div>
            <h2 className="mb-2 text-sm font-bold className uppercase text-white">
              Company
            </h2>
            <ul className=" text-white text-xs font-light">
              <li className="mb-2">
                <Link href="/" className=" hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-1 text-xs">
                <Link href="/" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li className="mb-1 text-xs">
                <Link href="/" className="hover:underline">
                  Mobile
                </Link>
              </li>
              <li className="mb-1 text-xs">
                <Link href="/" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="mb-1 text-xs">
                <Link href="/" className="hover:underline">
                  How we work
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-bold className uppercase text-white">
              Contact
            </h2>
            <ul className=" text-white text-xs font-light">
              <li className="mb-1">
                <Link href="/" className=" hover:underline">
                  Helps
                </Link>
              </li>
              <li className="mb-1 text-xs">
                <Link href="/" className="hover:underline">
                  Press
                </Link>
              </li>
              <li className="mb-1 text-xs">
                <Link href="/" className="hover:underline">
                  Alliliates
                </Link>
              </li>
              <li className="mb-1 text-xs">
                <Link href="/" className="hover:underline">
                  Hotel Owners
                </Link>
              </li>
              <li className="mb-1 text-xs">
                <Link href="/" className="hover:underline">
                  Partners
                </Link>
              </li>
              <li className="mb-1 text-xs">
                <Link href="/" className="hover:underline">
                  Advertise with us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-bold className uppercase text-white">
              More
            </h2>
            <ul className=" text-white text-xs font-light">
              <li className="mb-1">
                <Link href="/" className=" hover:underline">
                  Airline Fees
                </Link>
              </li>
              <li className="mb-1 text-xs">
                <Link href="/" className="hover:underline">
                  Airlines
                </Link>
              </li>
              <li className="mb-1 text-xs">
                <Link href="/" className="hover:underline">
                  Low Fare tips
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-12 md:text-center">
          <span className="text-xs  text-white text-center">
            © 2024 <Link href="/">KAYAK</Link>.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
