import React from "react";
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

import { userUpdate } from '../../../redux/user/index'

import { signUpWithEmailAndPassword } from '../../../config/APIs/auth'

export default function SignUp() {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const user = useSelector(state => state.user);

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleInputChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        let res = '';
        try {
            res = await signUpWithEmailAndPassword(credentials);

            dispatch(userUpdate(res));
            navigate('/dashboard');
        }
        catch (e) {
            console.log(e);
            setShowErrorMessage(true);
        }

    };



    return (
        <>
            <div className="flex items-center justify-center h-screen bg-slate-50">
                <div className="w-full max-w-lg p-6 bg-white rounded-md shadow-md">
                    <div>
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://i.ibb.co/7WFQvbY/android-chrome-192x192.png"
                            alt="Your Company"
                        />
                        <div className="mt-2 text-center font-semibold">iCube Technologies</div>
                        <h2 className="mt-6 text-center text-2xl font-bold leading-9 text-gray-900">
                            Signup to the application
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSignup}>
                        <div className="relative -space-y-px rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative  block w-full rounded  py-2 px-3  placeholder:text-gray-400 focus:outline-none sm:text-xs sm:leading-6"
                                    placeholder="Email address"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full rounded-t-md border-0 py-2 px-3 focus:outline-none  ring-1 ring-inset ring-gray-100 placeholder:text-gray-400  sm:text-xs sm:leading-6"
                                    placeholder="Password"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            {/* <div className="text-sm leading-6">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div> */}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    {showErrorMessage && (
                        <p className="mt-4 text-center text-sm text-red-500">
                            Something went wrong. Please try again
                        </p>
                    )}

                    <p className="mt-4 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <Link
                            to="/auth/signIn"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            Sign in here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
