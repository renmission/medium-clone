import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [ navOnScroll, setNavOnScroll] = useState(false);

  function onScrollHanlder() {
    setNavOnScroll(true);
  }

  return (
    <div className="p-5 max-w-full mx-auto bg-yellow-500 fixed w-full z-20 top-0 left-0 border-b border-black">
      <header onScroll={onScrollHanlder} className="flex justify-between w-5/6 mx-auto">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <img
              className="w-44 object-contain cursor-pointer"
              src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex">
          <div className="hidden md:inline-flex items-center space-x-5 px-5">
            <h3>Our story</h3>
            <h3>Membership</h3>
            <h3>Write</h3>
          </div>

          <div className="flex items-center space-x-5 text-center">
            <h3>Sign In</h3>
            <h3 className="border px-4 py-2 rounded-full bg-black border-black text-white">
              Get Started
            </h3>
          </div>
        </div>
        
      </header>


      
    </div>
  );
}

export default Header;
