import { Carousel } from "flowbite-react";
import React from "react";
import banner1 from "../assets/banner1.png";

const Home = () => {
  return (
    <div className="bg-NeutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            {/* hero text  */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-NeutralGrey md:w-3/4 leading-snug ">
                Lessons and insights about things
                <span className="text-BrandPrimary leading-snug">
                  from 8 Years
                </span>
              </h1>
              <p className="text-NeutralGrey text-base mb-8">
                {" "}
                Where to grow your business as a photographer: site or social
                mediapage media?
              </p>
              <button className="px-7 py-2 bg-BrandPrimary text-white rounded hover:bg-NeutralGrey transition-all duration-300 hover:-translate-y-4">
                Register button
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
