import React from 'react'

const item1 = {
    name: 'Moonstone Margarita',
    discription: 'Pueblo Viejo Tequila, Giffard coconut, lemmon grass, lime',
    price:'10',
    remark:'Get the glow'
}

function Menuitem(props) {
  
  return (
    <div className=' flex flex-col items-center text-[#ce1d24]  w-auto px-3 py-2'>
        <div className='flex justify-center space-x-4  '>
            <h3 className=' font-roboto font-bold'>
                {props.item.name}
            </h3>
            <p className=' font-roboto font-light italic'>
                {props.item.price}
            </p>
        </div>
        <div className=' flex flex-col items-center'>
            <p>
                {props.item.discription}
            </p>
            <p className=' italic font-roboto font-extralight'>
                {props.item.remark}
            </p>
        </div>
        <hr className=""/>
    </div>
  )
}

export default Menuitem