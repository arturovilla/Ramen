import React from 'react'



function Menuitem(props) {
    const hasPriceGlass = props.item.Price_glass !== undefined;
    const hasPriceBottle = props.item.Price_bottle !== undefined;
  
  return (
    <div className={`flex flex-col items-center text-red-500 w-auto px-3 py-2 ${props.style} transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-75`}>
        <div className='flex justify-center space-x-4 text-[#d01d25] md:text-lg'>
            <h3 className=' font-roboto font-bold'>
                {props.item.Name}
            </h3>
            <p className=' font-roboto font-light italic'>
                {props.item.Price}
            </p>

            {hasPriceBottle && (<h3 className=' text-sm md:text-xl font-roboto font-bold'>
                {props.item.Namewine}
            </h3>)}
            <div className='flex flex-col items-center'>
                {hasPriceGlass && (<p className=' text-xs md:text-base flex flex-col items-center font-roboto font-light italic'>
                    <p>Glass</p>
                    {props.item.Price_glass}
                </p>)}
                {hasPriceBottle && (<p className=' text-xs md:text-base flex flex-col items-center font-roboto font-light italic'>
                    <p>Bottle</p>
                    {props.item.Price_bottle}
                </p>)}
            </div>
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