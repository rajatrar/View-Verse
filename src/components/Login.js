import React from 'react';
import Header from './Header'; 
import { useState } from 'react';

const Login = () => {
    const[isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);

    }
  return (
    <div className="min-h-screen relative"> 
      <Header />

      
      <div className="absolute z-0 w-full h-full bg-cover top-0 left-0 bg-no-repeat flex items-center justify-center">
        <img
          className="h-screen w-screen absolute top-0 left-0 object-cover z-0" 
          src="https://www.designbolts.com/wp-content/uploads/2018/01/Beautiful-backgrounds-High-Resolution-Purple-HD-Wallpapers-for-Laptop-1920-x-1080-px-1.jpg"
          alt="Background Image"
        />
      </div>

      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-8 rounded-lg shadow-md bg-black bg-opacity-50">
        <h2 className="text-2xl font-semibold text-center mb-6 text-co">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
        
        {!isSignInForm &&(
        <div className="mb-6">
          <label htmlFor="fullName" className="block text-sm font-medium text-blue-500 mb-2">
            Full Name
          </label>
          <input 
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        )}

        <div className="mb-6">
          <label htmlFor="email" className=" block text-sm font-medium  text-blue-500 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="your@email.com"
            className="w-full px-3 py-2 border border-red rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium  text-blue-500 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            placeholder="********"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input type="checkbox" id="remember" name="remember" className="w-4 h-4 border border-gray-300 rounded-sm focus:ring-1 focus:ring-blue-500" />
            <label htmlFor="remember" className="ml-2 text-sm  text-blue-500">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="text-center mt-4"> 
          <span className="text-sm text-gray-500">
          {isSignInForm ? "Don't have an account?" : "Already Registered?"}
            
            </span>
          <a  onClick={toggleSignInForm} className="text-sm text-blue-500 hover:underline ml-2 cursor-pointer">
          {isSignInForm ? "Sing Up" : "Sign In"}
          </a>
        </div>

        
      </div>
    </div>
  );
};

export default Login;
