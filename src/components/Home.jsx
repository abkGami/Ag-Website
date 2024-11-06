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
              <h1>
                Lessons and insights <span>from 8 Years</span>
              </h1>
            </div>
          </div>
          <div className="flex h-full items-center justify-center">Slide 2</div>
          <div className="flex h-full items-center justify-center">Slide 3</div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
