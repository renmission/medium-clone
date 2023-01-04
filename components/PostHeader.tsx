import Link from "next/link";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsChevronDown, BsPersonCircle } from "react-icons/bs";

function PostHeader() {
  const [navOnScroll, setNavOnScroll] = useState(false);

  function onScrollHanlder() {
    setNavOnScroll(true);
  }

  return (
    <div className="p-2 max-w-full mx-auto w-full z-20 top-0 left-0 border-b">
      <header
        onScroll={onScrollHanlder}
        className="flex justify-between"
      >
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
          <div className="hidden md:inline-flex items-center space-x-5 px-5 cursor-pointer">
            <h3 className="flex items-center text-gray-400 text-sm">
              <span className="text-2xl px-1 text-gray-400">
                <BiEdit />
              </span>{" "}
              Write
            </h3>
          </div>

          <div className="flex items-center space-x-5 text-center">
            <h3 className="text-sm border px-4 py-2 rounded-full bg-sky-600 border-sky-600 text-white cursor-pointer">
              Sign Up
            </h3>
            <h3 className="text-gray-400 text-sm cursor-pointer">Sign In</h3>
          </div>

          <div className="hidden md:inline-flex items-center space-x-5 px-5 cursor-pointer">
            <h3 className="flex items-center text-gray-400 text-sm">
              <span className="text-3xl px-1"><BsPersonCircle /></span>
              <span><BsChevronDown /></span>
            </h3>
          </div>
        </div>
      </header>
    </div>
  );
}

export default PostHeader;
