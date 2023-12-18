import React from 'react'
import Menuitem from './Menuitem';
import ramen from '../public/ramen.json'
import addons from '../public/ramen_addons.json'
import bombs from '../public/bombs.json'

function Menu(props) {
    const menuItems = props.data.map((item, index) => (
      <Menuitem key={index} item={item} style={props.style}/>
    ));
  
    return menuItems
}

function Ramencard() {
  return (
    <div className='flex flex-col items-center w-full'>
        <h1 className=' mt-6 font-lithos text-3xl w-4/5 md:w-1/2 text-center  '>
            Ramen
        </h1>
        <div className='w-9/12 justify-center mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5'>
            <Menu data={ramen} style="border-b"/>
        </div>
        <h1 className=' mt-6 font-lithos text-3xl w-4/5 md:w-1/2 text-center  '>
            Add-Ons
        </h1>
        <div className='w-9/12 justify-center mt-5 grid grid-cols-2 gap-1 md:grid-cols-5 md:gap-2'>
            <Menu data={addons} style="border-none"/>
        </div>
        <h1 className=' mt-6 font-lithos text-3xl w-4/5 md:w-1/2 text-center  '>
            Bombs
        </h1>
        <div className='w-9/12 justify-center mt-5 grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-2'>
            <Menu data={bombs} style="border-none"/>
        </div>
    </div>
  )
}

export default Ramencard