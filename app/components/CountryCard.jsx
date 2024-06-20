import React from 'react'
import Image from 'next/image'

const CountryCard = ({ i,country, flags }) => {
    console.log(country)
    return (
        <div key={i} className='border border-red-500 backdrop:w-80 h-[340px] m-5 rounded-md'>
            <Image src={flags} width={80} height={80} alt="flag" className='rounded-t-sm h-[200px] w-80' />
            <h1 className='text-xl font-bold mx-2 my-1'> {country?.name.common}</h1>
            <div className='mx-2 text-lg'>
                <span className='font-bold'>Capital:</span>
                <span className='font-semibold'> {country?.capital}</span>
            </div>

            <div className='mx-2 text-lg'>
                <span className='font-bold'>Population:</span>
                <span className='font-semibold'> {country?.population.toLocaleString()}</span>
            </div>

            <div className='mx-2 text-lg'>
                <span className='font-bold'>Region:</span>
                <span className='font-semibold'> {country?.region}</span>
            </div>
        </div>
    )
}

export default CountryCard
