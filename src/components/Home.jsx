import { Button, Flex } from '@radix-ui/themes'
import React from 'react'
import About from './About'
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import missionImg1 from "../assets/mission1.png"
import missionImg2 from "../assets/mission2.jpg"

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate(); 

  useEffect(() => {
    if (location.hash === "#about") {
      const section = document.getElementById("about");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  
  return (
    <>
      <section className='relative w-full min-h-screen bg-white flex flex-row px-6 lg:px-20 py-20'>
        <div className='w-full flex flex-row'>
          <div className='lg:w-4/5 md:w-3/4 h-full flex flex-col justify-center items-start'>
            <p className="home-title text-left leading-none text-[clamp(3rem,7vw,6rem)]">
              UNSW <br />
              WOMEN IN <br />
              MANAGEMENT
            </p>
            <p className='text-left mt-4 lg:text-4xl md:text-2xl tag-line mb-5'>Your voice, your vision, your leadership.</p>
              <Flex gap='3'>
                <Button size='4' variant='solid' onClick={() => window.open("https://campus.hellorubric.com/?s=12765", "_blank")}>Join us!</Button>
                <Button size='4' variant='solid' onClick={() => navigate("/events")}>Upcoming Events</Button>
              </Flex>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/assets/favicon.png"
              className="w-[clamp(200px,28vw,400px)] h-auto"
            />
          </div>
        </div>
      </section>
      <About />
      <section className="bg-[#f8f7f4] py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Images Left */}
        <div className="flex flex-col gap-6 items-center relative right-6">
          <img
            src={missionImg1}
            alt="Mission 1"
            className="shadow-lg object-cover w-full max-w-md h-64"
          />

          <img
            src={missionImg2}
            alt="Mission 2"
            className="shadow-lg object-cover w-full max-w-md h-64"
          />
        </div>

        {/* Text Right */}
        <div className="space-y-6 text-left text-lg text-gray-700 leading-relaxed max-w-xl lg:-ml-20">

          <h2 className="font-[DMSerif] text-5xl text-gray-900 mb-12">
            Mission
          </h2>

          <p>
            Empowerment lies at the heart of our mission. We are dedicated to breaking down barriers,
            challenging stereotypes, and bridging the gender gap in management and leadership.
            Although we are a newly established organisation, our commitment to this cause remains strong.
          </p>
            <br></br>
          <p>
            <strong>Professional Development</strong><br/>
            We aim to equip our members with skills, knowledge, and confidence needed for management careers.
            Through workshops, seminars, and networking, we support leadership development.
          </p>
            <br></br>
          <p>
            <strong>Academic Excellence</strong><br/>
            We encourage strong academic performance and provide learning support through study sessions
            and management-related workshops.
          </p>

        </div>
      </div>
    </section>
    </>
  )
}

export default Home