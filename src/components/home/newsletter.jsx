import {
  ArrowDownIcon,
  ArrowPathIcon,
  ChevronDownIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon
} from "@heroicons/react/24/outline";
import Input from "../shared/Input";

export default function Newsletter() {
  return (
    <div className="container pb-12 flex flex-column justify-center items-center lg:px-8">
      <div className="mx-auto  px-8  lg:py-8 lg:w-full lg:border-default lg:border-fill lg:rounded-md lg:flex">
        <div className="lg:w-1/3 lg:px-8">
          <img src="/globe.svg" className="w-36 pb-2" />
        </div>
        <div className="w-2/3">
          <div className=" pb-8 mx-auto  max-w-2/3 lg:inline-block">
            <h5 className="mt-2 text-xl font-semibold tracking-tight text-gray-900  leading-8">
              Receive our newsletter.
              <p className="text-base font-light">
                Sign up for email updates with Travel recommendations and Private deals.
              </p>
            </h5>
          </div>
          <div className="lg:flex">
            <div className="lg:w-2/3">
              <Input />
            </div>
            <button className="bg-primary w-full py-2 my-2 rounded-lg lg:w-1/6 ml-4">
              <p className="font-bold text-white">Search</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
