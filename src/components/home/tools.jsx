export default function Tools() {
  return (
    <div className="container pb-12 flex flex-column justify-center">
      <div className="mx-auto w-full  px-4 lg:px-8 lg:w-full">
        <div className="mx-auto pb-2 mb-4 lg:text-start border-b-default border-b-fill lg:border-none">
          <h4 className="mt-2 text-xl font-semibold tracking-tight text-gray-900 ">
            Popular tools
          </h4>
          <p className="text-base font-light">Make your next trip a breeze</p>
        </div>
        <div className="w-full lg:flex md:w-full">
          <div className="flex items-center w-full lg:w-1/4 mr-8">
            <img
              className="rounded-md h-12 w-12 md:h-16 md:w-16"
              src="/price-alert.png"
            />
            <h5 className="text-base font-medium ml-2">Price Alerts</h5>
          </div>
          <div className="w-full mt-4 flex items-center md:w-1/4 mr-8 lg:mt-0">
            <img
              className="rounded-md h-12 w-12 md:h-16 md:w-16"
              src="/flight-tracker.png"
            />
            <h5 className="text-base font-medium ml-2">Flight Tracker</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
