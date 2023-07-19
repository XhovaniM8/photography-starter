import React from "react";

// import images
import myImg from "../img/about/xhovani_redroom.png";

// import link
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* text */}
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About Me</h1>
            <p>
              My name is Xhovani Mali. I have been immersed in the art of
              capturing moments for the past six years. I started out with a
              Nikon D3300, shooting photos at parties and events. I began to
              recieve compliments and I decided to continue learning about
              photography in college taking elective courses in photography.
            </p>
            <br />
            <p>
              Through my lens, I strive to bring out the beauty of colors and
              people, transforming ordinary scenes into extraordinary visual
              stories. I believe that photography is more than just a hobby; it
              is a gateway to expressing my creativity and connecting with
              others on a deeper level.
            </p>
            <p>
              Adobe Lightroom has been my trusted companion in the editing
              process, allowing me to enhance the natural allure of my images
              and create a distinct visual style. I am constantly refining my
              skills and exploring new techniques to ensure that every photo is
              a masterpiece in itself.
            </p>
            <br />
            <p>
              While my primary focus lies in capturing the essence of people, I
              have delved into various genres, including Instagram-worthy shots,
              captivating portraits, and dynamic fashion shoots. Photography has
              become an integral part of my other creative pursuits, infusing my
              work with a unique perspective.
            </p>
            <br />
            <p>
              My ultimate goal is to run my own studio and do shoots more often.
              My aim is too keep it cool.
            </p>
            <Link to={"./portfolio"} className="btn mt-8">
              View my work
            </Link>
          </div>
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-1 lg:order-none overflow-hidden">
            <img src={myImg} alt="myImg" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
