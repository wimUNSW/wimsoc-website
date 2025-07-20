import React from 'react'
import { Flex, Text, Button } from "@radix-ui/themes";

const Events = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <>
      <div className='p-50 bg-white h-screen' >
        <h2>Events</h2>
      <Button>clicke me</Button>  
      </div>  
    </>
  )
}

export default Events