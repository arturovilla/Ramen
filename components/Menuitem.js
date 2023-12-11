import React from 'react'



function Menuitem(props) {
  
  return (
    <div className=' flex flex-col items-center text-red-500 w-auto px-3 py-2 border-b transition ease-in-out  hover:-translate-y-1 hover:scale-105  duration-75'>
        <div className='flex justify-center space-x-4 text-[#d01d25] md:text-lg'>
            <h3 className=' font-roboto font-bold'>
                {props.item.Name}
            </h3>
            <p className=' font-roboto font-light italic'>
                {props.item.Price}
            </p>
        </div>
        <div className=' flex flex-col items-center font-extralight text-xs md:text-lg'>
            <p>
                {props.item.Description}
            </p>
            <p className=' italic font-roboto font-extralight hidden md:block'>
                {props.item.Remark}
            </p>
        </div>
    </div>
  )
}

export default Menuitem