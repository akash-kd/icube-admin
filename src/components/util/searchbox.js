import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid'
import { getAllJobs } from '../../config/APIs/job';
import { setList } from '../../redux/job/index'
import { useDispatch, useSelector } from "react-redux";
// Assuming your component is a functional component
export const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');
    const jobs = useSelector(state => state.job);
    const dispatch = useDispatch();

    const handleSearch = async () => {
        try {
            const res = await getAllJobs(searchValue);
            dispatch(setList(res.data));

            console.log(res);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <form
            className="relative flex flex-1 py-2 border-none focus:outline-none"
            action="#"
            method="GET"
            onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
            }}
        >
            <label htmlFor="search-field" className="sr-only">
                Search
            </label>
            <SearchIcon
                className="ml-4 pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400 focus:outline-none"
                aria-hidden="true"
            />
            <input
                id="search-field"
                className="ml-2 block h-full w-full border-0 py-4 px-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:outline-none bg-slate-100 sm:text-sm rounded-full"
                placeholder="Search..."
                type="search"
                name="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handleSearch();
                    }
                }}
            />
        </form>
    );
};


