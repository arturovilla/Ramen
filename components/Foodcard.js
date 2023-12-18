import React from 'react'
import Menuitem from './Menuitem';
import starters from '../public/starters.json'

function Menu(props) {
    const menuItems = props.data.map((item, index) => (
      <Menuitem key={index} item={item} style={props.style}/>
    ));
  
    return menuItems
}
  
function Foodcard() {
  return (
    <div className='flex flex-col items-center w-full'>
        <h1 className=' mt-6 font-lithos text-3xl w-4/5 md:w-1/2 text-center  '>
            Starters
        </h1>
        <div className='w-9/12 justify-center mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5'>
            <Menu data={starters} style="border-b"/>
        </div>
    </div>
  )
}

export default Foodcard