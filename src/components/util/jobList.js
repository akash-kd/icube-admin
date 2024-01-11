import React from 'react';
import { DynamicList } from '../../pages/dashboard/dynamicList';

export const JobListingsContainer = ({ jobsList, onUpdateIndex }) => {
    return (
        <div className="container px-4 mx-auto sm:px-8">
            <div className="py-8">
                <div className="flex flex-row justify-between items-center w-full mb-4 sm:mb-8">
                    <h2 className="text-2xl font-bold leading-tight">Job Listings</h2>
                </div>
                <div className="px-4 py-2 -mx-4 mt-8 overflow-x-auto">
                    {jobsList.length === 0 ? (
                        <div className="text-gray-500 text-center py-8">
                            No jobs available. Please add jobs.
                        </div>
                    ) : (
                        <div className="inline-block overflow-hidden rounded-lg shadow-lg bg-white">
                            <DynamicList item={jobsList} ontap={onUpdateIndex} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

