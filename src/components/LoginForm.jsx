import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Customer');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 

    if (role === 'Customer') {
      if ((username === 'Sushma' && password === '1234') || (username === 'Sumanth' && password === '1234') || (username === 'Vikas' && password === '1234')) {
        alert('Customer login successful!');
        navigate('/home');
      } else {
        alert('Incorrect Customer username or password!');
      }
    } else if (role === 'Admin') {
      if ((username === 'Sushma' && password === '1234') || (username === 'Sumanth' && password === '1234') || (username === 'Vikas' && password === '1234')) {
        alert('Admin login successful!');
        navigate('/admin'); 
      } else {
        alert('Incorrect Admin username or password!');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-80 rounded-lg bg-gray-900 p-6 text-gray-100 shadow-lg">
        <p className="text-center text-xl font-bold">Login</p>
        <form onSubmit={handleLogin} className="mt-6">
          <div className="mt-1 text-sm">
            <label htmlFor="username" className="block text-gray-400 mb-1">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-3 text-gray-100 outline-none focus:border-green-400"
            />
          </div>
          <div className="mt-4 text-sm">
            <label htmlFor="password" className="block text-gray-400 mb-1">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-3 text-gray-100 outline-none focus:border-slate-400"
            />
            <div className="flex justify-end text-xs mt-2 text-gray-400">
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>
          </div>

          {/* Role Selection */}
          <div className="mt-4 text-sm">
            <label htmlFor="role" className="block text-gray-400 mb-1">Select Role</label>
            <select
              name="role"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-md border border-gray-600 bg-gray-900 px-4 py-3 text-gray-100 outline-none focus:border-green-400"
            >
              <option value="Customer">Customer</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="w-full mt-6 bg-green-400 py-3 text-gray-900 rounded-md font-semibold">
            Sign in
          </button>
        </form>

        <div className="flex items-center pt-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          {/* <p className="px-3 text-sm text-gray-400">Login with social accounts</p> */}
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          <button aria-label="Log in with Google" className="rounded-sm p-3 bg-transparent">
            {/* SVG Icon */}
          </button>
          <button aria-label="Log in with Twitter" className="rounded-sm p-3 bg-transparent">
            {/* SVG Icon */}
          </button>
          <button aria-label="Log in with GitHub" className="rounded-sm p-3 bg-transparent">
            {/* SVG Icon */}
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          Don't have an account? <a href="#" className="hover:underline text-gray-100">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;