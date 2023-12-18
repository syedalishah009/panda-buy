import React from 'react'
import { Link } from 'react-router-dom'
import { IoCreateOutline } from "react-icons/io5";

const Sidebar = () => {
    return (
        <div className="w-[150px] bg-gray-100 h-[100vh]">
            <div className="h-screen  w-64 ">
                <div className="flex h-full flex-grow flex-col overflow-y-auto  bg-white pt-3 shadow-md">
                    <div className="flex flex-1 flex-col">
                        <div className="">
                            <nav className="">
                                <Link to="/" className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4">
                                    <svg className="mr-4 h-5 w-5 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" className=""></path>
                                    </svg>
                                    Products
                                </Link>
                                <Link to="/add-product" className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4">
                                    <IoCreateOutline style={{fontSize:"22px", marginRight:"13px"}}/>
                                    Add Products
                                </Link>

                              
                            </nav>


                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Sidebar