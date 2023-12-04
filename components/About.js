import React from 'react'
import Image from 'next/image'
import banner from "../public/banner.png";
function About() {
  return (
    <div className='flex flex-col items-center w-full'>
        <div className='flex w-full justify-center '>
            <Image
            src={banner}
            alt="banner image of two geisha"
            className=' object-cover w-full'
            />
        </div>
        <div className='font-lithos px-5 flex text-left mt-12 text-4xl w-full md:w-8/12 md:text-5xl'>
            Bakudan Ramen is a traditional Japanese cuisine restaurant from its homeland with a modern twist in every ramen bowl. <br/><br/>Bakudan brings that flavor to a higher level with our chef exclusive ingredients
        </div>

        {/* hours block */}
        <div className='flex flex-col items-center w-10/12 md:w-5/12 max-w-screen-md bg-gray-500/30 mt-10 p-3 rounded-md'>
            <div className=' mb-2  font-roboto font-bold text-3xl'>
                Hours
            </div>
            <div className=' pb-2 font-roboto font-light text-2xl flex justify-between  w-full'>
                <p>Monday</p>
                <p>11AM - 10PM</p>
            </div>
            <div className=' pb-2 font-roboto font-light text-2xl flex justify-between  w-full '>
                <p>Tuesday</p>
                <p>11AM - 10PM</p>
            </div>
            <div className=' pb-2 font-roboto font-light text-2xl flex justify-between  w-full '>
                <p>Wednesday</p>
                <p>11AM - 10PM</p>
            </div>
            <div className=' pb-2 font-roboto font-light text-2xl flex justify-between  w-full '>
                <p>Thursday</p>
                <p>11AM - 10PM</p>
            </div>
            <div className=' pb-2 font-roboto font-light text-2xl flex justify-between  w-full '>
                <p>Friday</p>
                <p>11AM - 11PM</p>
            </div>
            <div className=' pb-2 font-roboto font-light text-2xl flex justify-between  w-full '>
                <p>Saturday</p>
                <p>11AM - 11PM</p>
            </div>
            <div className=' font-roboto font-light text-2xl flex justify-between  w-full '>
                <p>Sunday</p>
                <p>11AM - 9PM</p>
            </div>
        </div>

        
    </div>
  )
}

export default About