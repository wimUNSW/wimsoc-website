import React from 'react'

const Home = () => {
  return (
    <section className='relative h-screen w-full flex items-center justify-center bg-white px-5' >
      <div className='w-full flex flex-row justify-center items-center'>
        <div className='w-1/2 flex-col items-start text-center'>
          <p id='home' className='home-title text-7xl text-left'>
            UNSW <br />
            WOMEN IN <br />
            MANAGEMENT
          </p>
          <p id='tagline' className='text-left mt-4'>Your voice, your vision, your leadership.</p>
        </div>
        <div className='w-1/2 h-full'>
          <p className='home-title'>other</p>
        </div>
      </div>
    </section>
  )
}

export default Home