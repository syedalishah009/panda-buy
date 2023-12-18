import React from 'react'
import { MdDelete } from "react-icons/md";
import Sidebar from './Sidebar';

const ProductsTable = () => {
    return (
        <div className='flex'>
        <Sidebar />
            <div className="w-[400rem] ml-[90px] max-w-screen-lg px-4 sm:px-8">
                <div className="overflow-y-hidden rounded-lg border">
                    <div className="overflow-x-auto w-[100%] ">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-blue-600 py-5 text-left text-xs font-semibold uppercase tracking-widest text-white">
                                    <th className="px-5 py-5">ID</th>
                                    <th className="px-5 py-5">Product Name</th>
                                    <th className="px-5 py-5">Title</th>
                                    <th className="px-5 py-5">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-500">
                                <tr>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p className="whitespace-no-wrap">3</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0">
                                                <img className="h-full w-full rounded-full" src="https://images.unsplash.com/photo-1505751104546-4b63c93054b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljJTIwcGxheWxpc3R8ZW58MHx8MHx8fDA%3D" alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="whitespace-no-wrap">Besique Monroe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p className="whitespace-no-wrap">Administrator</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <a href="#" class="bg-red-600 flex w-[90px] items-center justify-center rounded-md py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-red-700">
                                            <MdDelete style={{fontSize:"20px"}} />
                                            Delete
                                        </a>

                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p className="whitespace-no-wrap">3</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0">
                                                <img className="h-full w-full rounded-full" src="https://images.unsplash.com/photo-1505751104546-4b63c93054b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljJTIwcGxheWxpc3R8ZW58MHx8MHx8fDA%3D" alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="whitespace-no-wrap">Besique Monroe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p className="whitespace-no-wrap">Administrator</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <a href="#" class="bg-red-600 flex w-[90px] items-center justify-center rounded-md py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-red-700">
                                            <MdDelete style={{fontSize:"20px"}} />
                                            Delete
                                        </a>

                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p className="whitespace-no-wrap">3</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0">
                                                <img className="h-full w-full rounded-full" src="https://images.unsplash.com/photo-1505751104546-4b63c93054b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljJTIwcGxheWxpc3R8ZW58MHx8MHx8fDA%3D" alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="whitespace-no-wrap">Besique Monroe</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p className="whitespace-no-wrap">Administrator</p>
                                    </td>
                                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <a href="#" class="bg-red-600 flex w-[90px] items-center justify-center rounded-md py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-red-700">
                                            <MdDelete style={{fontSize:"20px"}} />
                                            Delete
                                        </a>

                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="flex  flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
                        <span className="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
                        <div className="mt-2 inline-flex sm:mt-0">
                            <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
                            <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductsTable