import React from "react";
import { FaArrowRight } from "react-icons/fa";
import prag from "./Asset/Pagination container.png";
const HappyClients = () => {

  return (
    <div className="bg-white text-center mb-16">
      <div className="font-bold text-4xl py-2 pt-9">Our Happy Clients</div>
      <div className="text-gray-400 text-sm pb-10">
        {" "}
        <>
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource- <br />
          leveling customer service for state of the art customer service.
        </>
      </div>
      <div className="flex justify-items-end flex-wrap">
        <img src={prag}/>
      </div>

      <a
        className="flex items-center justify-center text-primary font-semibold px-4 py-2 ml-4 transition"
        href="/"
      >
      </a>
    </div>
  );
};

export default HappyClients;
