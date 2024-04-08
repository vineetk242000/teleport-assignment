"use client";

import { HeartIcon } from "@heroicons/react/24/outline";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { destinations } from "../../data/static";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 2048, min: 1366 },
    items: 2,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 1365, min: 1024 },
    items: 2,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 2,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    partialVisibilityGutter: 80
  }
};

const Wishlist = () => {
  return (
    <div className="container pb-12 pl-6 lg:w-full">
      <div className=" mx-auto  max-w-2/3 pb-8">
        <h5 className="mt-2 text-xl font-semibold tracking-tight text-gray-900  leading-8">
          Your wishlist starts here
        </h5>
        <p className="text-base font-light">
          Save destinations all in one place—even if you are not ready to book
        </p>
      </div>
      <Carousel
        swipeable={true}
        responsive={responsive}
        draggable={true}
        showDots={false}
        ssr={false}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={8000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={1000}
        arrows={false}
        partialVisible={true}
      >
        {destinations.map((item) => (
          <div className="pr-4 md:pr-0 w-full" key={item.title}>
            <div className="">
              <img
                src={item.image}
                className="w-72 h-72 rounded-lg lg:w-11/12  relative"
              />
              <div className="bg-white rounded-md absolute w-8 h-8 flex justify-center items-center top-4 right-8 md:right-16">
                <HeartIcon className="w-6 h-6" />
              </div>
            </div>
            <div className="py-2">
              <p className="text-base font-medium leading-16 pb-1">{item.title}</p>
              <p className="text-sm font-light">Return from &#8377; 12,477+</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Wishlist;
