import React from 'react'

const Home = () => {
  return (
    <>
      <section className='relative w-full h-screen bg-white flex pl-20' >
        <div className='w-full flex flex-row'>
          <div className='w-3/4 h-full flex flex-col justify-center items-start'>
            <p className='home-title text-8xl text-left'>
              UNSW <br />
              WOMEN IN <br />
              MANAGEMENT
            </p>
            <p className='text-left mt-4 text-4xl tag-line'>Your voice, your vision, your leadership.</p>
          </div>
          <div className='w-1/4 h-full flex justify-center items-center'>
            <p className='home-title'>other</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home