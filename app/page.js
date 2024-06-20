'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import React from 'react'
import CountryCard from './components/CountryCard'
import Search from './components/Search'
import { fetchCountries } from './action'
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
} from '../components/ui/select'

import {
  useQuery,
} from 'react-query'


const page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('')
  const [filteredData, setFilteredData] = useState([]);

  const {
    isLoading,
    error,
    data: countryData
  } = useQuery("countries", () => fetchCountries());

  function handleOnChangeSearch(e) {
    setSearchTerm(e.target.value)
  }

  function handleOnChangeFilter(e) {
    setSelectedCategory(e);
  }

  const regions = [...new Set(countryData?.map((d) => d.region))];

  useEffect(() => {
    let data = countryData;
    if (searchTerm) {
      data = data?.filter((item) =>
        item.name.common
          ?.toLowerCase()
          .includes(searchTerm.trim().toLowerCase())
      );
    }

    if (selectedCategory || selectedCategory == 'all') {
      data = data?.filter((item) => {
        if (selectedCategory == "all") {
          return item;
        }
        return item?.region === selectedCategory;
      });
      console.log(data);
    }

    setFilteredData(data);
  }, [searchTerm, countryData, selectedCategory]);


  return (
    <div className='bg-slate-100 dark:bg-slate-800 min-h-screen'>
      <div className='py-4 px-4 flex flex-col sm:flex-row gap-2 '>
        <Search onChange={handleOnChangeSearch} value={searchTerm} />

        {/* Filter  */}
        <Select value={selectedCategory} onValueChange={handleOnChangeFilter} >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All Regions</SelectItem>
            {regions.map((d, i) => (
              <SelectItem key={i} value={d}>
                {d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>



      </div>

      <div className='max-w-screen-xl mx-auto w-full items-center justify-center flex flex-wrap '>
        {
          filteredData?.map((d, i) => {
            return (
              <Link href={d.name.common} >
                <CountryCard key={i} country={d} flags={d.flags.svg} />
              </Link>
            )
          })
        }
        {
          Array.isArray(filteredData) && filteredData.length < 1 && (
            <p>Your Search did not match any results</p>
          )
        }
      </div>

    </div>
  )
}

export default page