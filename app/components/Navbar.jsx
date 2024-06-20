import React from 'react'
import Darklight from './Darklight'

const Navbar = () => {
    return (
        <div className='p-4 flex justify-between shadow-lg bg-gray-50 dark:bg-slate-700'>
            <h1 className='text-2xl font-bold'>Countries</h1>
            <Darklight />
        </div>
    )
}

export default Navbar