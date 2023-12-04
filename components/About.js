import React from 'react'
import Image from 'next/image'
import banner from "../public/banner.png";
function About() {
  return (
    <div className='flex flex-col items-center '>
        <div className='flex bg-red-400 w-full justify-center h-auto'>
            <Image
            src={banner}
            alt="banner image of two geisha"
            className=' object-fill relative'
            />
        </div>
        <div className='font-lithos px-5 flex text-left mt-12 text-4xl w-full md:w-8/12 md:text-5xl'>
            Bakudan Ramen is a traditional Japanese cuisine restaurant from its homeland with a modern twist in every ramen bowl. <br/><br/>Bakudan brings that flavor to a higher level with our chef exclusive ingredients
        </div>
    </div>
  )
}

export default About