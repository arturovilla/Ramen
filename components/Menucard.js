import React from 'react'
import Menuitem from './Menuitem'
import cocktails from "../public/cocktails.json"
import wines from "../public/wines.json"
import beer_draft from "../public/beer_draft.json"
import beer_cans from "../public/beer_can.json"


function Menu(props) {
  const menuItems = props.data.map((item, index) => (
    <Menuitem key={index} item={item} style={props.style}/>
  ));

  return menuItems
}



function Menucard() {
  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className=' font-lithos text-6xl w-4/5 md:w-1/2 text-center border-b pb-2'>
        Menu
      </h1>
      <h1 className=' mt-6 font-lithos text-3xl w-4/5 md:w-1/2 text-center  '>
        Cocktails
      </h1>
      <div className='w-9/12 justify-center mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5'>
        <Menu data={cocktails} style="border-b"/>
      </div>
      <h1 className=' mt-6 font-lithos text-3xl w-4/5 md:w-1/2 text-center  '>
        Wine
      </h1>
      <div className='w-9/12 md:w-7/12 justify-center mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5'>
        <Menu data={wines} style="border-b"/>
      </div>
      <h1 className=' mt-6 font-lithos text-3xl w-4/5 md:w-1/2 text-center '>
        Beer
      </h1>
      <h1 className=' mt-1 font-lithos text-xl w-4/5 md:w-1/2 text-left border-b border-dashed'>
        Draft
      </h1>
      <div className='w-6/12 justify-center mt-5 grid grid-cols-1 gap-1'>
          <Menu  data={beer_draft} />
      </div>
      <h1 className=' mt-1 font-lithos text-xl w-4/5 md:w-1/2 text-left border-b border-dashed'>
        Bottles/Cans
      </h1>
      <div className='w-6/12 justify-center mt-5 grid grid-cols-1 gap-1'>
          <Menu  data={beer_cans} />
      </div>
      <h1 className='flex mt-1 font-lithos text-xl w-4/5 md:w-1/2 text-left border-b border-dashed justify-between'>
        <p>
          Beverages
        </p>
        <p>
          2.50
        </p>
      </h1>
      <div className='w-6/12 justify-center mt-5 grid grid-cols-1 gap-1'>
        <p className='flex flex-col items-center text-red-500 w-auto px-3 py-2 ${props.style} transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-75'> Coke, Diet Coke, Orange Soda, Lemon-Lime, Lemonade, Dr. Pepper, Big Red</p>
      </div>
    </div>
  )
}

export default Menucard