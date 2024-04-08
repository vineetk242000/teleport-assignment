"use client";
import { useState } from "react";
import Input from "../shared/Input";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <div className="container pb-12 flex flex-column justify-center items-center lg:px-8">
      <div className="mx-auto  px-8  lg:py-8 lg:w-full lg:border-default lg:border-fill lg:rounded-md lg:flex">
        <h5 className="block md:hidden mt-2 pb-3 text-xl font-semibold tracking-tight text-gray-900  leading-8">
          Receive our newsletter.
        </h5>
        <div className="lg:w-1/3 lg:px-8">
          <img src="/globe.svg" className="w-36 pb-2" />
        </div>
        <div className="w-full md:w-2/3">
          <div className=" pb-8 mx-auto  w-full lg:inline-block">
            <h5 className=" hidden md:block mt-2 text-xl font-semibold tracking-tight text-gray-900  leading-8">
              Receive our newsletter.
            </h5>
            <p className="text-base font-light">
              Sign up for email updates with Travel recommendations and Private deals.
            </p>
          </div>
          <div className="lg:flex">
            <div className="lg:w-2/3">
              <Input
                placeholder="Enter your email address"
                name="email"
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
                inputAdornment="/email.svg"
              />
            </div>
            <button
              className={`${email.length > 3 ? "bg-primary" : "bg-fill"} w-full py-2 my-2 rounded-lg lg:w-1/6 md:ml-4`}
            >
              <p className="font-bold text-white">Let&apos;s do this</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
