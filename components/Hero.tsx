import React from "react";

function Hero() {
  return (
    <div className=" bg-yellow-500 border-y border-black py-16 lg:py-0 mt-16">
      <div className="flex justify-between w-5/6 mx-auto items-center">
        <div className="px-10 space-y-8">
          <h1 className="text-6xl max-w-xl font-serif lg:text-8xl">Stay curious.</h1>
          <h2 className="text-2xl font-light">
            Discover stories, thinking, and expertise from writers on any topic.
          </h2>
          <h3 className="border px-2 py-2 rounded-full border-black bg-black text-white max-w-xs text-center">
            Start Reading
          </h3>
        </div>

        <img
          className="hidden md:inline-flex h-32 lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
