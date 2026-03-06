import React from "react";
import aboutImg from "../assets/wim.aboutus.png";

const About = () => {
  return (
     <div id="about" className="bg-white flex flex-col items-center pt-10 px-6 pb-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 mt-10">

        {/* About Us text */}
        <div className="text-center md:text-left space-y-6 md:pl-12">
          <h1 className="font-[DMSerif] text-6xl md:text-7xl mb-9 mt-5">
            About Us
          </h1>
          <div className="text-lg leading-relaxed">
            <p className="mb-4">
              Women in Management Society (WIM Soc) at UNSW is a passionate community
              of women dedicated to empowering and advancing women in decision-making roles.
            </p>
            <p>
              We provide networking opportunities, professional development, and mentorship to support
              women in their careers. At our core, we aim to empower women to become <strong>effective leaders,
              decision-makers, and change agents.</strong>
            </p>
          </div>
        </div>

        {/* Image */}
      <div className="flex justify-center overflow-hidden w-full max-w-md md:max-w-lg lg:max-w-xl h-64 md:h-80 lg:h-96">
        <img
          src={aboutImg}
          alt="About WIM"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      </div>
    </div>
  );
};

export default About;