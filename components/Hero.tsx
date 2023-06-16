'use client'
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {
    console.log('pene')
  }

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          <span className='text-gradient primary'>Find, book, or rent a car</span>  <span className='text-gradient secondary'>- quickly and easily!</span>
        </h1>

        <p className='hero__subtitle'>
          Streamline your car rental experience with our effortles booking process.
        </p>

        <CustomButton
          title='Explore Cars'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image select-none animation'>
          <Image
            src='/hero.webp'
            alt='hero'
            fill
            className='object-contain select-none'
          />
        </div>
        <div className='pentagon' />
      </div>
    </div>
  )
}

export default Hero
