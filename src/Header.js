import React from "react";
import { CiSearch } from "react-icons/ci";
import mobile from "./Asset/mobile.png";
import upperRegister from "./Asset/upper_logo_register.png";
function Header() {
  return (
    <header className="py-3 shadow w-full">
      <div style={{marginTop:"0%"}}>
      <img src={mobile}/>
      </div>
      <div className="container mx-auto flex justify-between items-center">
        <img src={upperRegister}/>

        <div className="flex items-center gap-6">
          <a
            className="hidden sm:block hover:text-violet-900 transition"
            to="/"
          >
            Home
          </a>
          <a
            className="hidden sm:block hover:text-violet-900 transition"
            to="/"
          >
            Our Services
          </a>
          <a
            className="hidden sm:block hover:text-violet-900 transition"
            to="/"
          >
            Blog
          </a>
          <a
            className="hidden sm:block hover:text-violet-900 transition"
            to="/"
          >
            Contact Us
          </a>
          <a
            className="hidden sm:block hover:text-violet-900 transition"
            to="/"
          >
            About us
          </a>
          <a
            className="hidden sm:block hover:text-violet-900 transition"
            to="/"
          >
            <CiSearch />
          </a>
          <a className=" bg-secondary text-white px-4 py-2 transition" to="/">
            Talk An Expert
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
