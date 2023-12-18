import Drinkcard from '@/components/Drinkcard'
import Foodcard from '@/components/Foodcard'
import Other from '@/components/Other'
import Ramencard from '@/components/Ramencard'
import React from 'react'

function Menu() {
  return (
    <div className=" mt-32 md:mt-64 flex flex-col items-center w-full">
        <h1 className=' font-lithos text-6xl w-4/5 md:w-1/2 text-center border-b pb-2'>
          Menu
        </h1>
        <Foodcard/>
        <Ramencard/>
        <Other/>
        <Drinkcard/>
    </div>
  )
}

export default Menu