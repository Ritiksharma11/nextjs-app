'use client'
import React from 'react'
import { fetchCountry } from '../action'

import {
    useQuery,
} from 'react-query'

import CountryDetail from '../components/CountryDetail'


const page = ({ params }) => {
    const name = params.countryname;
    const {
        isLoading,
        error,
        data
    } = useQuery("country", () => fetchCountry(name));

    const country = Array.isArray(data) && data.length > 0 ? data[0] : null;

    return (
        <div>
            {
                < CountryDetail data={country} languages={country?.languages} />
            }
        </div>
    )
}

export default page
