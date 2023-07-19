import React from "react";
import { Link } from "react-router-dom";

import Image1 from "../img/portfolio/202306-SOFIA.jpg";
import Image2 from "../img/portfolio/202306-SOFIA4.jpg";
import Image3 from "../img/portfolio/202306-ADI1.jpg";
import Image4 from "../img/portfolio/202306-ADI2.jpg";
import Image5 from "../img/portfolio/202306-ADI3.jpg";
import Image6 from "../img/portfolio/202306-ADI4.jpg";
import Image7 from "../img/portfolio/202306-SOFIA5.jpg";
import Image8 from "../img/portfolio/202306-SOFIA6.jpg";
import Image9 from "../img/portfolio/202306-SOFIA7.jpg";
import Image10 from "../img/portfolio/202306-SOFIA8.jpg";
import Image11 from "../img/portfolio/ROUGERODNEY.jpg";
import Image12 from "../img/portfolio/ROUGERODNEY2.jpg";
import Image13 from "../img/portfolio/ROUGERODNEY3.jpg";
import Image14 from "../img/portfolio/ROUGERODNEY4.jpg";
import Image15 from "../img/portfolio/ROUGERODNEY5.jpg";
import Image16 from "../img/portfolio/ROUGERODNEY6.jpg";

const Portfolio = () => {
  return (
    <section className="section">
      <div className="container overflow-auto mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <div className="flex flex-col lg:items-start">
            <div className="h1">Portfolio</div>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <br />
            <Link
              to="./contact"
              className="btn mb-[30px] max-auto mt-8 lg:mx-0"
            >
              Hire me
            </Link>
            {/* img */}
            <div className="flex flex-col lg:items-start">
              <div>{/* image grid */}</div>
            </div>
          </div>
          {/* image grid */}
          <div className="grid grid-cols-2 gap-2 lg:gap-10 
            justify-items-center break-inside-avoid mt-6">
            {/* IMAGE 1 */}
            <div className="max-w-[250px] lg:max-w-[680px] bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image1}
                  alt=""
                />
              </div>
            </div>
            {/* IMAGE 2 */}
            <div className="max-w-[250px] lg:max-w-[680px] bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image2}
                  alt=""
                />
              </div>
            </div>
            {/* IMAGE 3 */}
            <div className="max-w-[250px] lg:max-w-[680px] bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image3}
                  alt=""
                />
              </div>
            </div>
            {/* IMAGE 4 */}
            <div className="max-w-[250px] lg:max-w-[680px] bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image4}
                  alt=""
                />
              </div>
            </div>
            {/* IMAGE 5 */}
            <div className="max-w-[250px] lg:max-w-[680px] bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image5}
                  alt=""
                />
              </div>
            </div>
            {/* IMAGE 6 */}
            <div className="max-w-[250px] lg:max-w-[680px] bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image6}
                  alt=""
                />
              </div>
            </div>
            {/* IMAGE 7 */}
            <div className="max-w-[250px] lg:max-w-[680px] bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image7}
                  alt=""
                />
              </div>
            </div>
            {/* IMAGE 8 */}
            <div className="max-w-[250px] lg:max-w-[680px] bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image8}
                  alt=""
                />
              </div>
            </div>
            {/* IMAGE 9 */}
            <div className="max-w-[250px] lg:max-w-[680px] bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image9}
                  alt=""
                />
              </div>
            </div>
            {/* IMAGE 10 */}
            <div className="max-w-[250px] lg:max-w-[680px] bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image10}
                  alt=""
                />
              </div>
            </div>
            {/* IMAGE 11 */}
            <div className="max-w-[250px] lg:max-w-[680px] bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image11}
                  alt=""
                />
              </div>
            </div>
            {/* IMAGE 12 */}
            <div className="max-w-[250px] lg:max-w-[680px]bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image12}
                  alt=""
                />
              </div>
            </div>
            {/* IMAGE 13 */}
            <div className="max-w-[250px] lg:max-w-[680px] bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image13}
                  alt=""
                />
              </div>
            </div>
            {/* IMAGE 14 */}
            <div className="max-w-[250px] lg:max-w-[680px] bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image14}
                  alt=""
                />
              </div>
            </div>
            {/* IMAGE 15 */}
            <div className="max-w-[250px] lg:max-w-[680px] bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image15}
                  alt=""
                />
              </div>
            </div>
            {/* IMAGE 16 */}
            <div className="max-w-[250px] lg:max-w-[680px] bg-white overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                  src={Image16}
                  alt=""
                />
              </div>
            </div>
            {/* Add more image containers with the same structure */}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Portfolio;
