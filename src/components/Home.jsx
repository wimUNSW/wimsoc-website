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
            <p className='text-left mt-4 lg:text-4xl md:text-2xl tag-line mb-5'>
              Your voice, your vision, your leadership.
            </p>
              <Flex gap='3'>
                <Button size='4' variant='solid' onClick={() => window.open("https://campus.hellorubric.com/?s=12765", "_blank")}>Join us!</Button>
                <Button size='4' variant='solid' onClick={() => navigate("/events")}>Upcoming Events</Button>
              </Flex>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/assets/favicon2.png"
              className="w-[clamp(200px,28vw,400px)] h-auto"
            />
          </div>
        </div>
      </section>
      <About />
      <section className="bg-[#f8f7f4] pt-0 pb-25 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-x-12 gap-y-12 items-center">

          {/* Images */}
          <div className="flex flex-col gap-6 items-center justify-center">
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

          {/* Text */}
          <div className="space-y-6 text-left text-lg leading-relaxed lg:-ml-8">

            <h2 className="font-[DMSerif] text-6xl md:text-6xl mb-5">
              Mission
            </h2>

            <p>
              Empowerment lies at the heart of our mission. We are dedicated to breaking down barriers,
              challenging stereotypes, and bridging the gender gap in management and leadership.
              While we are a recently founded organisation, our enthusiasm for this cause is unwavering. Our multifaceted approach to achieving this mission encompasses:
            </p>
              <br></br>
            <p>
              <strong>Professional Development</strong><br/>
              We aim to equip our members with skills, knowledge, and confidence needed for management careers.
              Through workshops, seminars, and networking opportunities, we will facilitate their journey toward becoming future leaders.
            </p>
              <br></br>
            <p>
              <strong>Academic Excellence</strong><br/>
              Our goal is to ensure that our members are the best of the best.
              We will support students in maintaining strong academic performance for their management classes through course workshops and group study sessions, thereby equipping them with the necessary skills to embark on leadership opportunities.
            </p>

          </div>
        </div>
    </section>
    </>
  )
}

export default Home