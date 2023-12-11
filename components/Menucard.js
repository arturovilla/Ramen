import React from 'react'
import Menuitem from './Menuitem'
import cocktails from "../public/cocktails.json"

function Menu(props) {
  const menuItems = props.data.map((item, index) => (
    <Menuitem key={index} item={item} />
  ));

  return menuItems
}



function Menucard() {
  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className=' font-lithos text-6xl w-4/5 md:w-1/2 text-center border-b pb-2'>
        Menu
      </h1>
      <div className='w-9/12 justify-center mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5'>
        <Menu data={cocktails} />
      </div>
    </div>
  )
}

export default Menucard