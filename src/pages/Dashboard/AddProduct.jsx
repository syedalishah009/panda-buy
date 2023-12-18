import React from 'react';
import Sidebar from './Sidebar';

const AddProduct = () => {
    return (
        <div className='flex '>
            <Sidebar />
            <div className="w-[400px] h-fit mx-auto bg-white rounded-xl overflow-hidden shadow-md">
                <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="productName" className="block text-gray-700 font-semibold">Product Name</label>
                            <input type="text" id="productName" name="productName" className="w-full border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter product name" />
                        </div>
                        <div>
                            <label htmlFor="imageLink" className="block text-gray-700 font-semibold">Image Link</label>
                            <input type="text" id="imageLink" name="imageLink" className="w-full border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter image link" />
                        </div>
                        <div>
                            <label htmlFor="qualityCheckLink" className="block text-gray-700 font-semibold">Quality Check Link</label>
                            <input type="text" id="qualityCheckLink" name="qualityCheckLink" className="w-full border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter quality check link" />
                        </div>
                        <div class="w-full inline-block relative">
                            <select class="block  appearance-none w-full bg-white border border-gray-200 hover:cursor-pointer hover:border-gray-400 px-4 py-3 pr-8 rounded shadow-md leading-tight focus:outline-none focus:shadow-outline">
                                <option>Select Category</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M10 12L4 6h12z" />
                                </svg>
                            </div>
                        </div>
                        <div class="w-full inline-block relative">
                            <select class="block justify-center  appearance-none w-full bg-white border border-gray-200 hover:cursor-pointer hover:border-gray-400 px-4 py-3 pr-8 rounded shadow-md leading-tight focus:outline-none focus:shadow-outline">
                                <option>Select Brand</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M10 12L4 6h12z" />
                                </svg>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="bg-blue-500 float-right mb-5 text-white rounded-md py-2 px-4 hover:bg-blue-600">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddProduct;
