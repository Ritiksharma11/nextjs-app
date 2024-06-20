import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const CountryDetail = ({ data }) => {
    console.log(data);
    return (
        <div className='m-4 md:m-8'>
            <button className='border dark:border-white py-1 px-3'>
                <Link href={'/'}>Back</Link>
            </button>
            <div className=' backdrop:w-80 h-[340px] m-5 p-5 rounded-md flex flex-col sm:flex-row sm:justify-evenly gap-5'>
                <div>
                    <Image src={data?.flags.svg} width={80} height={80} alt="flag" className='rounded-t-sm w-[350px] h-[350px]' />
                </div>

                <div>
                    <h1 className='text-xl font-bold mx-2 my-1'>{data?.name.official}</h1>

                    <div className='mx-2 text-lg'>
                        <span className='font-bold'>Native Name: </span>
                        <span>
                            {
                                data?.name.nativeName && (
                                    Object.keys(data?.name.nativeName).map((key, index) => {
                                        return data.name.nativeName[key]?.official
                                    }).join(',')
                                )}
                        </span>
                    </div>

                    <div className='mx-2 text-lg'>
                        <span className='font-bold'>Capital: </span>
                        <span>{data?.capital[0]}</span>
                    </div>

                    <div className='mx-2 text-lg'>
                        <span className='font-bold'>Region: </span>
                        <span>{data?.region}</span>
                    </div>

                    <div className='mx-2 text-lg'>
                        <span className='font-bold'>Population: </span>
                        <span>{data?.population.toLocaleString()}</span>
                    </div>

                    <div className='mx-2 text-lg'>
                        <span className='font-bold'>Languages: </span>
                        <span>
                            {
                                data?.languages && (
                                    Object.keys(data.languages)
                                        .map(function (key, index) {
                                            return data.languages[key];
                                        })
                                        .join(", ")
                                )
                            }

                        </span>
                    </div>

                    <div className='mx-2 text-lg'>
                        <span className='font-bold'>Currencies: </span>
                        <span>
                            {
                                data?.currencies
                                    ? data.currencies[Object.keys(data.currencies)[0]].name
                                    : "No Currencies"
                            }
                        </span>
                    </div>

                    <div className='mx-2 text-lg'>
                        <span className='font-bold'>Borders: </span>
                        <span>
                            {
                                data?.borders && (
                                    data.borders.map((border, index) => {
                                        return (
                                            <p key={index}>{border}</p>
                                        )
                                    })
                                )
                            }
                        </span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CountryDetail
