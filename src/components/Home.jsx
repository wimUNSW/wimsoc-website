import { Button, Flex } from '@radix-ui/themes'
import React from 'react'
import About from './About'

const Home = () => {
  return (
    <>
      <section className='relative w-full h-screen bg-white flex pl-20' >
        <div className='w-full flex flex-row'>
          <div className='lg:w-4/5 md:w-3/4 h-full flex flex-col justify-center items-start'>
            <p className='home-title lg:text-8xl md:text-7xl sm:text-xl text-left'>
              UNSW <br />
              WOMEN IN <br />
              MANAGEMENT
            </p>
            <p className='text-left mt-4 lg:text-4xl md:text-2xl tag-line mb-5'>Your voice, your vision, your leadership.</p>
              <Flex gap='3'>
                <Button size='4' variant='solid'>Join us!</Button>
                <Button size='4' variant='solid'>Upcoming Events</Button>
              </Flex>
          </div>
          <div className='lg:w-2/5 md:w-2/4 flex justify-center items-center'>
            <img src='/assets/favicon.png' />
          </div>
        </div>
      </section>
      <About />
    </>
  )
}

export default Home