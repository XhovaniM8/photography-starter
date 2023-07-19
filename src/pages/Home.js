import React from "react";

// import images
import myImg from "../img/home/xhovani.png";

// import link
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative overflow-auto">
        {/* text & img wrapper */}
        <div className="flex flex-col justify-center">
          {/* text */}
          <div
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 
            lg:w-auto z-10 lg:absolute flex flex-col
            justify-center items-center lg:items-start"
          >
            <h1 className="h1">
              photographer <br /> & graphic designer
            </h1>
            <p
              className="text-[26px] lg:text-[36px]
            front-primary mb-4 lg:mb-12"
            >
              New York City & Long Island{" "}
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              {" "}
              hire me{" "}
            </Link>
          </div>
          {/* img */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <div className="relative lg:-right-40 overflow:hidden">
              <img src={myImg} alt="myImg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
