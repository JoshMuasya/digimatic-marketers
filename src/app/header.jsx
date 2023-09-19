'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { useMediaQuery } from 'react-responsive';

const Header = () => {
  // Set minimum screen width
  const isDesktop = useMediaQuery({ minWidth: 768 });

  // Set time
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [])

  const formattedDateTime = currentDateTime.toLocaleString();

  // Get Day, Date and Time
  const day = currentDateTime.toLocaleDateString(undefined, { weekday: 'short' });
  const date = currentDateTime.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' });
  const time = currentDateTime.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  
  return (
    <div className='flex flex-row justify-between align-middle items-center z-10'>
      {/* Fixed Header */}
      <div className='w-full m:w-fit flex flex-row justify-around align-middle fixed top-0 left-0 m-3 m:m-5 items-center'>
        {/* Logo */}
        <div className='pr-3 sm:pr-5 l:pr-14'>
          <Image 
            src='/Logo.png'
            width={68}
            height={64.08}
            alt='Logo'
          />
        </div>

        {/* Company Name */}
        <div className='pr-3 sm:pr-5 l:pr-14 flex flex-col justify-center items-center align-middle'>
          {/* Top */}
          <h1 className='font-signika font-black text-midnight-purple text-sx sm:text-lm md:text-l m:text-ml l:text-xl'>
            DIGIMATIC
          </h1>

          {/* Bottom */}
          <h1 className='font-black-san font-bold text-s text-light-blue tracking-small md:tracking-medium l:tracking-large sm:text-sx md:text-m l:text-ml'>
            MARKETERS
          </h1>
        </div>

        {/* Slogan */}
        <div className='pr-3'>
          <Image 
            src='/slogan.png'
            width={200.74}
            height={62.748}
            alt='Slogan'
          />
        </div>
      </div>

      {/* clock */}
      { isDesktop && (
        <div className='fixed top-0 right-0 mt-5 mr-5 w-fit h-fit bg-light-blue flex flex-col justify-center items-center align-middle p-4 rounded-2xl'>
          {/* Header */}
          <div className='font-black-san font-semibold text-sx text-midnight-purple'>
            TIME IN NAIROBI
          </div>

          {/* TIME */}
          <div className='font-black-san font-bold text-lm text-midnight-purple'>
            { time }
          </div>

          {/* Date */}
          <div className='font-black-san font-bold text-lm text-midnight-purple'>
            { day } { date }
          </div>
        </div>
      )}
    </div>
  )
}

export default Header