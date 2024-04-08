import { features } from "../../data/static";

export default function Features() {
  return (
    <div className="container pb-12 flex flex-column justify-center">
      <div className="mx-auto  px-6 lg:px-8 lg:w-full">
        <div className="mx-auto lg:text-start border-b-default border-b-fill lg:border-none">
          <h4 className="mt-2 pb-3 text-xl w-4/5 lg:text-xl font-semibold tracking-tight text-gray-900 ">
            What KAYAK brings to the table.
          </h4>
        </div>
        <div className="lg:flex lg:justify-between">
          {features.map((item) => (
            <div
              key={item.name}
              className="py-2 flex item-center border-b-default border-b-fill  lg:border-fill lg:px-4 lg:py-4 lg:border-default lg:rounded-md lg:w-1/4 lg:mr-4 lg:flex-col"
            >
              <div className="pr-2 items-center flex">
                <img src={item.image} className="w-fit-content" />
              </div>
              <div className="px-2">
                <h5 className="font-medium  text-base lg:text-base lg:mt-2">
                  {item.name}
                </h5>
                <p className="font-light text-sm lg:text-sm lg:leading-32">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
