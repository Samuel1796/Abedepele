import React from 'react'
import SVGBackground from './SVGBackground'

const Footer = () => {
  return (
    <section className='relative border-black rotate-180 mt-8'>
        <SVGBackground />
        <footer className="absolute top-0 left-0 w-full bg-transparent border-gray-200 z-10  rotate-180">
            <div className="flex items-center justify-center">Footer goes here</div>
        </footer>
    </section>
  )
}

export default Footer