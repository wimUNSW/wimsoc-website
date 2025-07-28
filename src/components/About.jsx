import React from 'react'

const About = () => {
  return (
    <div className='bg-white h-screen flex flex-col items-center justify-start pt-10'>
      <h1 className='font-[DMSerif] text-7xl text-center mb-8'>About Us</h1>
      <div className='max-w-4xl text-center px-4'>
        <p className='mb-4'>
          Women in Management Society (WIM Soc) at UNSW is a passionate community 
          of women dedicated to empowering and advancing women in decision-making roles
        </p>
        <p className='mb-4'>
          We provide networking opportunities, professional development, and mentorship to support
          women in their careers. At our core, we aim to empower women to become effective leaders,
          decision-makers, and change agents.
        </p>
      </div>
    </div>
  )
}

export default About;