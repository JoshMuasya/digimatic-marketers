"use client"

import Link from 'next/link';
import React from 'react';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const email = 'digimaticmarketers@gmail.com';

  const number = '+254798040353';

  const handleNumberClick = () => {
    window.location.href = `whatsapp://send?phone=${number}`
  }

  const handleMailClick = () => {
    window.location.href = `mailto:${email}`;
  }

  return (
    <div className='bottom-0 left-0'>
      {/* Footer */}
      <div className='w-full h-fit flex flex-col justify-around align-middle items-center m:flex-row bg-back-blue px-14 pt-3 pb-10'>
        {/* Left */}
        <div className='flex flex-col justify-center align-middle items-center'>
          <div className='font-black-san text-center text-back-light-blue font-bold text-m'>
            Contact us:-
          </div>
          {/* Phone number */}
          <div className='flex flex-row justify-center items-center align-middle text-back-light-blue pb-4'>
            {/* icon */}
            <div>
              <PermPhoneMsgIcon 
                className='text-ml'
              />
            </div>

            {/* Number */}
            <a 
              className='font-signika text-lm pl-5 font-semibold cursor-pointer'
              onClick={handleNumberClick}
            >
              {number}
            </a>
          </div>

          {/* email */}
          <div className='flex flex-row justify-center items-center align-middle text-back-light-blue'>
            {/* icon */}
            <div>
              <EmailIcon 
                className='text-ml'
              />
            </div>

            {/* Email */}
            <a 
              className='font-signika text-lm pl-5 font-semibold cursor-pointer'
              onClick={handleMailClick}
            >
              {email}
            </a>
          </div>
        </div>

        {/* Right */}
        <div className='flex flex-col justify-center align-middle items-center'>
          {/* Twitter */}
          <div className='flex flex-row justify-center items-center align-middle text-back-light-blue font-black-san font-bold text-lm py-3'>
            {/* Icon */}
            <div className='pr-3'>
              <TwitterIcon />
            </div>

            {/* Text */}
            <Link
              href=''
            >
              Twitter
            </Link>
          </div>

          {/* Facebook */}
          <div className='flex flex-row justify-center items-center align-middle text-back-light-blue font-black-san font-bold text-lm py-3'>
            {/* Icon */}
            <div className='pr-3'>
              <FacebookIcon />
            </div>

            {/* Text */}
            <Link
              href=''
            >
              Facebook              
            </Link>
          </div>

          {/* Instagram */}
          <div className='flex flex-row justify-center items-center align-middle text-back-light-blue font-black-san font-bold text-lm py-3'>
            {/* Icon */}
            <div className='pr-3'>
              <InstagramIcon />
            </div>

            {/* Text */}
            <Link
              href=''
            >
              Instagram              
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer