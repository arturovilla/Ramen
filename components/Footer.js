import React from "react";

function Footer() {
	return (
		<div className=" bg-red-950 flex-col items-center text-center py-16">
			<div className="flex justify-center ">
				<div className="flex justify-between w-1/2 md:w-1/5 ">
					<dev className=' flex flex-col text-left w-full'>
                        <a>Contact</a>
                        <a>FAQ</a>
                        <a className=" hidden">Created by Arturo Villalobos. © 2023</a> 
					</dev>
					<dev className='flex flex-col text-left w-full'>
                        <a>Jobs</a>
                        <a>Notices</a>
					</dev>
					<dev className='flex flex-col text-left w-full'>
                        <a>Facebook</a>
                        <a>Instagram</a>
					</dev>
				</div>
			</div>

			<div className=" mt-4">
				<p>Copyright 2023 © Bakudan Ramen | 17703 La Cantera Parkway, San Antonio, TX 78257 | Terms of Use</p>
			</div>
		</div>
	);
}

export default Footer;
