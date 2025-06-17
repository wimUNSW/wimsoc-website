import React from 'react'

const Hero = () => {
  return (
    <section className='w-full nav-height bg-white relative px-11' >
      <div className='h-5/6 w-full flex flex-row justify-center items-center'>
        <div className='w-1/2 flex flex-col items-start'>
          <p id='hero' className='hero-title text-6xl text-left'>
            UNSW <br />
            WOMEN IN <br />
            MANAGEMENT
          </p>
          <p id='tagline' className='text-left mt-4'>Your voice, your vision, your leadership.</p>
        </div>
        <div className='w-1/2 h-full'>
          <p className='hero-title'>other</p>
        </div>
        <div>hello world!</div>
      </div>
    </section>
  )
}

export default Hero