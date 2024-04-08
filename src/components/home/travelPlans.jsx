import { travelRoutes } from "@/data/static";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function TravelPlans() {
  return (
    <div className="container pb-12 flex flex-column justify-center">
      <div className="mx-auto px-6 lg:px-8 lg:w-full">
        <div className="flex justify-between items-end pb-3 border-b-default border-b-fill lg:border-none">
          <div className="mx-auto  max-w-2/3 lg:w-2/3">
            <h5 className="mt-2 text-xl font-semibold tracking-tight text-gray-900  leading-8">
              Explore the world from Kolkata
            </h5>
            <p className="font-light">
              Find flights departing Tue 07/05/ and returning Tue 14/05/
            </p>
          </div>
          <div className="w-1/2 lg:1/3">
            <p className="text-link font-medium text-base text-right">See all</p>
          </div>
        </div>
        <div className="my-4">
          <div className="py-2 flex ">
            <div className="pr-2 w-1/2 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                width="100%"
                height="350"
                className="w-full h-72"
              ></iframe>
            </div>
            <div className="px-2 w-1/2">
              {travelRoutes.map((item) => (
                <div
                  key={item.place}
                  className="mb-2 mx-1 pb-4 border-b-default border-b-fill flex justify-between items-center"
                >
                  <div className="w-1/2 lg:flex items-center justify-around lg:w-3/4">
                    <div className="w-full lg:w-3/4">
                      <img src={item.image} className="w-24 h-24 rounded-lg" />
                    </div>
                    <div className="hidden lg:w-1/4 lg:block">
                      <p className="text-base font-medium leading-16 pb-1">
                        {item.place}
                      </p>
                      <p className="text-sm lg:font-light lg:text-xs">{item.route}</p>
                      <p className="text-sm font-medium lg:text-xs">
                        &#8377; {item.price}
                      </p>
                    </div>
                  </div>
                  <div className="items-center flex justify-between pl-4 w-1/2 lg:pl-0 lg:w-1/4">
                    <div className="w-3/4 lg:hidden">
                      <p className="text-base font-medium leading-16 pb-1">
                        {item.place}
                      </p>
                      <p className="text-sm lg:font-light lg:text-xs">{item.route}</p>
                      <p className="text-sm font-medium lg:text-xs">
                        &#8377; {item.price}
                      </p>
                    </div>
                    <div className="w-1/4">
                      <HeartIcon className="w-4 pl-1 lg:w-8" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
