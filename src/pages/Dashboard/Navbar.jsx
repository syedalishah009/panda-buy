import React from 'react'

const Navbar = () => {
    return (
        <header className="mb-2 shadow">
            <div className="relative flex justify-between max-w-screen-xl flex-col overflow-hidden px-4 py-4 sm:mx-auto sm:flex-row">
                <h1 className='text-rose-600 text-[27px] font-bold'>Dashboard</h1>
                <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </div>
        </header>
    )
}

export default Navbar