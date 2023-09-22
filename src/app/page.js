import React from 'react'

const page = () => {
  return (
    <div className='h-screen bg-back-light-blue'>
      <div className='pt-40 w-full flex flex-col justify-center items-center align-middle m-auto'>
        <div className='w-1/2 h-fit bg-light-blue rounded-3xl'>
          <div className='py-10'>
            {/* Title */}
            <div className='font-black-san text-midnight-purple text-lm sm:text-m md:text-ml font-black text-center pb-5'>
              COMING SOON
            </div>

            {/* Body */}
            <div className='text-center'>
              <h1 className='font-signika font-bold text-midnight-purple text-sx sm:text-lm md:text-l pb-4'>
                Check in for:-
              </h1>

              <ul className='font-signika font-bold text-midnight-purple text-s sm:text-sx md:text-m'>
                <li className=''>
                  Website Design
                </li>

                <li>
                  Website Development
                </li>

                <li>
                  Graphics Design
                </li>

                <li>
                  Website Hosting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page