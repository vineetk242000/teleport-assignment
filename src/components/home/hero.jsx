"use client";
import {
  MagnifyingGlassIcon,
  MinusCircleIcon,
  PlusCircleIcon
} from "@heroicons/react/24/outline";
import Input from "../shared/Input";
import { useState } from "react";
import Link from "next/link";
import { passengerTypes, seatCategories, tripTypes } from "@/data/static";
import Calendar from "../shared/calendar";

export default function Hero() {
  const [openTripTypeModal, setOpenTripTypeModal] = useState(false);
  const [openSeatTypeModal, setOpenSeatTypeModal] = useState(false);
  const [openPassengersModal, setOpenPassengersModal] = useState(false);
  const [selectedTripType, setSelectedTripType] = useState("Return");
  const [selectedSeatType, setSelectedSeatType] = useState("Economy");
  const [passengersCount, setpassengersCount] = useState(1);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="container w-80 pb-12 lg:w-full px-4 lg:px-8">
      <div className="px-8 text-center lg:text-start lg:px-0">
        <h2 className="text-xl font-bold leading-9 lg:text-3xl">
          Where do you want to go?
        </h2>
      </div>
      <div className="flex justify-start mt-4">
        <div className="px-1 lg:px-0">
          <button
            className="hover:bg-fill  focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center"
            type="button"
            onClick={() => setOpenTripTypeModal(!openTripTypeModal)}
          >
            <span className="text-sm font-semibold">{selectedTripType}</span>{" "}
            <img src="/dropdown.svg" className="w-2.5 h-2.5 ms-3" />
          </button>
          <div
            className={`z-10 ${openTripTypeModal ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute`}
          >
            <ul className="py-2 text-sm text-gray-900">
              {tripTypes.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setSelectedTripType(item.value);
                    setOpenTripTypeModal(false);
                  }}
                  className="block px-4 py-2 hover:bg-fill cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-1">
          <button
            className="hover:bg-fill  focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5  text-center inline-flex items-center"
            type="button"
            onClick={() => setOpenPassengersModal(!openPassengersModal)}
          >
            {passengersCount}{" "}
            <span className="sm:w-[25px]md:w-[48px] ml-1"> Traveller</span>
            <img src="/dropdown.svg" className="w-2.5 h-2.5 ms-3" />
          </button>
          <div
            className={`z-10 ${openPassengersModal ? "block" : "hidden"} bg-white divide-y divide-gray-100 px-8 py-8 rounded-lg shadow w-72  absolute`}
          >
            <ul className="py-2 text-sm text-gray-900">
              {passengerTypes.map((item) => (
                <li
                  className="flex items-center justify-between px-4 py-2 hover:bg-fill "
                  key={item.id}
                >
                  <p>
                    {" "}
                    {item.title}{" "}
                    <span className="ml-1 font-light">{item.description}</span>
                  </p>
                  <span className="flex items-center">
                    <PlusCircleIcon
                      className="w-4 h-4 mr-1 cursor-pointer"
                      onClick={() => setpassengersCount(passengersCount + 1)}
                    />
                    {item.id == 1 ? passengersCount : 0}{" "}
                    <MinusCircleIcon
                      className="w-4 h-4 ml-1 cursor-pointer"
                      onClick={() => setpassengersCount(passengersCount - 1)}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-1 ">
          <button
            className="hover:bg-fill  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
            onClick={() => setOpenSeatTypeModal(!openSeatTypeModal)}
          >
            {selectedSeatType}
            <img src="/dropdown.svg" className="w-2.5 h-2.5 ms-3" />
          </button>
          <div
            className={`z-10 ${openSeatTypeModal ? "block" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute`}
          >
            <ul className="py-2 text-sm text-gray-900">
              {seatCategories.map((item) => (
                <li
                  className="block px-4 py-2 hover:bg-fill cursor-pointer "
                  key={item.id}
                  onClick={() => {
                    setSelectedSeatType(item.value);
                    setOpenSeatTypeModal(false);
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:flex space-between lg:py-2">
        <div className="w-full lg:w-1/3 mr-2">
          <Input
            placeholder="Origin"
            name="origin"
            value={origin}
            handleChange={(e) => setOrigin(e.target.value)}
            inputAdornment="/flight.svg"
          />
        </div>
        <div className="w-full lg:w-1/3 mr-2">
          <Input
            placeholder="To?"
            name="to"
            value={destination}
            handleChange={(e) => setDestination(e.target.value)}
            inputAdornment="/flight.svg"
          />
        </div>
        <div className="w-full lg:w-1/3">
          <div className="inline-flex w-1/2">
            <Calendar
              placeholder="Select your start date"
              name="to"
              value={startDate}
              handleChange={(value) => setStartDate(value)}
            />
          </div>
          <div className="inline-flex w-1/2">
            <Calendar
              placeholder="Select your end date"
              name="end"
              value={endDate}
              handleChange={(value) => setEndDate(value)}
            />
          </div>
        </div>

        <div className="flex justify-center item-center lg:py-2 mt-4">
          <button className="bg-primary w-full py-3 px-2 rounded-lg leading-4 cursor-pointer text-sm flex items-center justify-center md:w-16 md:mr-2 md:py-2">
            <MagnifyingGlassIcon className="w-6 text-white font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
}
