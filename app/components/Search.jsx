import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = ({ value, onChange }) => {
    return (
        <div className='flex justify-between md:flex-row gap-4 flex-col sm:flex-1 mx-4 sm:mx-8'>
            <div className='flex items-center gap-2 border dark:border-white bg-gray-50 dark:bg-slate-600 shadow-md rounded-md lg:mx-8 lg:flex-1'>
                <CiSearch className='text-2xl font-bold mx-2' />
                <input type="text" className='outline-none my-1 mx-2 p-1 flex-1 rounded-sm '
                    placeholder='Search for country...'
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default Search


