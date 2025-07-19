import { Button } from '@heroui/react'
import React from 'react'

const Events = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <>
      <div className='m-50' >
        Events
      </div>  
      <Button>clicke me</Button>  
    </>
  )
}

export default Events