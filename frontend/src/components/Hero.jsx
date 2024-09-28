import { Link } from "react-router-dom";

import HeroCar from "../images/hero/main-car.png";
import { useEffect, useState } from "react";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";
import React from 'react'

const Hero = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="max-w-md font-bold pt-40 ">
        <h2 className="font-medium text-2xl">Plan your trip now</h2>
        <h1 className="text-5xl">
          Save <span className="text-orange-600">big</span> with our car rental
        </h1>
        <h6 className="text-gray-400 text-base ">
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </h6>
        <div className="">
          <div>
            <h1>Book Ride</h1>
            <IconCircleCheck />
          </div>
          <div>
            <h1>Learn More</h1>
            <IconChevronRight />
          </div>
        </div>
      </div>
      <div>
        <img src={HeroCar} alt="" />
      </div>
    </div>
  );
}

export default Hero
