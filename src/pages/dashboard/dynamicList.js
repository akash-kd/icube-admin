import React from 'react';
import { useDispatch } from "react-redux";
import { deleteAJobs } from '../../../src/config/APIs/job'

import { removeFromList } from '../../redux/job/index'

export const DynamicList = ({ item, ontap }) => {
    const dispatch = useDispatch();

    const handleItemRemoval = async (id) => {

        try {
            let res = await deleteAJobs(id);

            dispatch(removeFromList(id));
            console.log(res);

        }
        catch (e) {
            console.log(e);
        }

    };

    return (
        <table >
            <thead >
                <tr className='pt-2'>

                    <th scope="col" className="text-center align-middle ml-2 pr-5 py-3 text-sm font-bold  text-gray-800 uppercase  border-b border-gray-200">
                        Title
                    </th>
                    <th scope="col" className="pr-5 py-3 pl-14 text-sm font-bold text-left text-gray-800 uppercase  border-b border-gray-200">
                        Description
                    </th>
                    <th scope="col" className=" justify-center px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase  border-b border-gray-200">
                        No of Position
                    </th>

                    <th scope="col" className="px-5 py-3 text-sm text-center font-bold text-gray-800 uppercase  border-b border-gray-200">
                        STATUS
                    </th>
                    <th scope="col" className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase  border-b border-gray-200">
                    </th>
                    <th scope="col" className="px-5 py-3 text-sm font-bold text-left text-gray-800 uppercase  border-b border-gray-200">
                    </th>
                </tr>
            </thead>
            <tbody>
                {item.map((pot, index) => {

                    return (<tr key={index}>
                        <td className="px-5 py-2 text-sm border-b border-gray-200">
                            <div className="flex items-start justify-center h-full">
                                <div className="ml-2">
                                    <p className="text-left text-gray-900 font-bold text-md whitespace-no-wrap">
                                        {pot.title}
                                    </p>
                                </div>
                            </div>
                        </td>

                        <td className="pl-12 pr-5 py-5   text-center border-b border-gray-200">
                            <p className="text-gray-500  text-justify text-xs whitespace-no-wrap w-64">
                                {pot.description}
                            </p>
                        </td>

                        <td className=" justify-center px-10 py-5 text-sm  border-b border-gray-200">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {pot.numberOfPositions}
                            </p>
                        </td>
                        <td className="px-8 py-5 text-sm text-center  border-b border-gray-200">
                            <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                <span aria-hidden="true" className={`absolute inset-0 ${pot.archived === false ? 'bg-green-200' : 'bg-orange-400'} rounded-full opacity-50`}>
                                </span>
                                <span className="relative">
                                    {pot.archived === false ? "active" : "archived"}
                                </span>

                            </span>
                        </td>
                        <td className="px-8 py-5 text-sm  border-b border-gray-200 "
                            onClick={(event) => { handleItemRemoval(pot._id) }}   >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>

                        </td>
                        <td className="pr-8 py-5 text-sm  border-b border-gray-200 "
                            onClick={(event) => { ontap(2, pot); }}   >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#4A5568" className="w-5 h-5 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    );
}