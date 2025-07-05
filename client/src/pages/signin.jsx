import React from 'react';

export default function Signin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
           Login
        </button>
        <div className="flex items-center gap-2">
          <hr className="flex-grow border-gray-300"/>
          <span className="text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300"/>
        </div>
        <button className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center hover:bg-gray-50">
        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
          Sign in with Google
        </button>
        <p className="text-center text-sm text-gray-500">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

