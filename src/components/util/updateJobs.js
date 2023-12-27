import React, { useState } from 'react';
import { updateAJobs } from '../../config/APIs/job';
import { useDispatch } from "react-redux";
import { updateList } from '../../redux/job/index'

export const UpdateJobs = ({ initialJobData }) => {


    const [jobData, setJobData] = useState(initialJobData);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setJobData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add logic to submit jobData to your backend or store it as needed
        try {

            const res = await updateAJobs(jobData._id, jobData);
            dispatch(updateList(res.data));
            console.log('in api call')
            console.log(res);
        }
        catch (e) {
            console.log("The error is " + e);
        }
    };

    return (
        <div className="flex flex-col items-center  ml-8 w-full">

            <div className=" mt-2 w-3/5 p-6  bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-bold leading-tight">Update Job</h2>
                <form className="mt-4 space-y-6 my-4" onSubmit={handleSubmit}>
                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Job Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={jobData.title}
                            onChange={handleChange}
                            required
                            className="relative block w-full rounded-md py-2 px-3 focus:outline-none border-2 border-gray-300 placeholder:text-gray-400 sm:text-xs sm:leading-6 transition duration-300 focus:border-indigo-500"
                            placeholder="e.g., Software Engineer"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Job Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={jobData.description}
                            onChange={handleChange}
                            required
                            rows="3"
                            className="relative block w-full rounded-md py-2 px-3 focus:outline-none border-2 border-gray-300 placeholder:text-gray-400 sm:text-xs sm:leading-6 transition duration-300 focus:border-indigo-500"
                            placeholder="e.g., Responsible for developing web applications..."
                        />
                    </div>

                    {/* Number of Positions and Mail Resume To */}
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label htmlFor="numberOfPositions" className="block text-sm font-medium text-gray-700">
                                Number of Positions
                            </label>
                            <input
                                type="number"
                                id="numberOfPositions"
                                name="numberOfPositions"
                                value={jobData.numberOfPositions}
                                onChange={handleChange}
                                required
                                className="relative block w-full rounded-md py-2 px-3 focus:outline-none border-2 border-gray-300 placeholder:text-gray-400 sm:text-xs sm:leading-6 transition duration-300 focus:border-indigo-500"
                                placeholder="e.g., 2"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="mailResumeTo" className="block text-sm font-medium text-gray-700">
                                Mail Resume To
                            </label>
                            <input
                                type="email"
                                id="mailResumeTo"
                                name="mailResumeTo"
                                value={jobData.mailResumeTo}
                                onChange={handleChange}
                                required
                                className="relative block w-full rounded-md py-2 px-3 focus:outline-none border-2 border-gray-300 placeholder:text-gray-400 sm:text-xs sm:leading-6 transition duration-300 focus:border-indigo-500"
                                placeholder="e.g., hr@example.com"
                            />
                        </div>
                    </div>

                    {/* Duties */}
                    <div>
                        <label htmlFor="duties" className="block text-sm font-medium text-gray-700">
                            Job Duties
                        </label>
                        <textarea
                            id="duties"
                            name="duties"
                            value={jobData.duties}
                            onChange={handleChange}
                            required
                            rows="3"
                            className="relative block w-full rounded-md py-2 px-3 focus:outline-none border-2 border-gray-300 placeholder:text-gray-400 sm:text-xs sm:leading-6 transition duration-300 focus:border-indigo-500"
                            placeholder="e.g., Develop and maintain software applications..."
                        />
                    </div>

                    {/* Requirements */}
                    <div>
                        <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
                            Job Requirements
                        </label>
                        <textarea
                            id="requirements"
                            name="requirements"
                            value={jobData.requirements}
                            onChange={handleChange}
                            required
                            rows="3"
                            className="relative block w-full rounded-md py-2 px-3 focus:outline-none border-2 border-gray-300 placeholder:text-gray-400 sm:text-xs sm:leading-6 transition duration-300 focus:border-indigo-500"
                            placeholder="e.g., Bachelor's degree in Computer Science..."
                        />
                    </div>

                    {/* Archived */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="archived"
                            name="archived"
                            checked={jobData.archived}
                            onChange={handleChange}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="archived" className="ml-3 block text-sm leading-6 text-gray-900">
                            Archived
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Update Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


