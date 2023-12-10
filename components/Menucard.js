import React from 'react'
import Menuitem from './Menuitem'

const item1 = {
  name: 'Moonstone Margarita',
  discription: 'Pueblo Viejo Tequila, Giffard coconut, lemmon grass, lime',
  price:'10',
  remark:'Get the glow'
}
const item2 = {
  name: '',
  discription: '',
  price:''
}



function Menucard() {
  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className=' font-lithos text-6xl '>
        Menu
      </h1>
      <div className='w-full flex justify-center mt-5'>
        <Menuitem item={item1}/>
      </div>
    </div>
  )
}

export default Menucard