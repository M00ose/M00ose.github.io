import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col items-center h-fit w-full text-[12px]'>
        <p>&#169; Copyright 2023, Tyrone Jacalan</p>
        <a href="https://github.com/M00ose/portfolio" className='underline hover:italic'>My portfolio is open sourced</a>
    </div>
  )
}

export default Footer