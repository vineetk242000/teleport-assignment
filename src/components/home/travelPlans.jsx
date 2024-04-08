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
          <div className="w-1/2 lg:1/3 md:mr-2 cursor-pointer">
            <p className="text-link font-medium text-base text-right">See all</p>
          </div>
        </div>
        <div className="my-4">
          <div className="py-2 flex ">
            <div className="pr-2 w-1/2 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25206.50247374723!2d88.43011309577581!3d22.656052633615797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89faa59df6903%3A0xdb1444043648b83!2sNetaji%20Subhash%20Chandra%20Bose%20International%20Airport!5e0!3m2!1sen!2sin!4v1712617750488!5m2!1sen!2sin"
                width="100%"
                height="350"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="px-2 w-1/2">
              {travelRoutes.map((item) => (
                <div
                  key={item.place}
                  className="mb-2 mx-1 pb-4 border-b-default border-b-fill flex justify-between items-center"
                >
                  <div className="w-1/2 lg:flex items-center md:w-2/6">
                    <div className="w-full md:flex items-center">
                      <img src={item.image} className="w-24 h-24 rounded-lg" />
                      <div className="hidden  md:block md:ml-4 ">
                        <p className="text-base font-medium leading-16 pb-1">
                          {item.place}
                        </p>
                        <p className="text-sm lg:font-light lg:text-xs">{item.route}</p>
                        <p className="text-sm font-medium lg:text-xs">
                          &#8377; {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="items-center flex justify-between pl-4 w-1/2 md:pl-0 md:w-1/6">
                    <div className="w-3/4 md:hidden">
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
