import React from 'react'


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
            Food Biotch
        </h1>
    </div>
  )
}

export default Foodcard