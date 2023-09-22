import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import EmailIcon from '@mui/icons-material/Email';
import ContactsIcon from '@mui/icons-material/Contacts';

const Navbar = () => {
  return (
    <div className='fixed bottom-2 z-10 content-center items-center align-middle w-full'>
      <div className='flex flex-row justify-center align-middle items-center text-light-blue'>
        {/* Icons */}
        {/* Home */}
        <div className='pr-8'>
          <HomeIcon
            className='text-ml'
          />
        </div>

        {/* About */}
        <div className='pr-8'>
          <InfoIcon 
            className='text-ml'
          />
        </div>

        {/* Services */}
        <div className='pr-8'>
          <MiscellaneousServicesIcon 
            className='text-ml'
          />
        </div>

        {/* Email Us */}
        <div className='pr-8'>
          <EmailIcon 
            className='text-ml'
          />
        </div>

        {/* Contact Us */}
        <div>
          <ContactsIcon 
            className='text-ml'
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar