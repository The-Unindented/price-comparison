import React, { useState } from 'react';
import { X } from 'lucide-react';

const SignUp = ({ onSignUp }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    if (fullName && email && age && password) {
      try {
        const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fullName, email, age, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Sign up successful:', data);
          localStorage.setItem('token', data.token); // Store the token in local storage
          onSignUp(); // Close modal on success
        } else {
          const errorData = await response.json();
          setError(errorData.message || 'Something went wrong.');
        }
      } catch (error) {
        setError('Failed to connect to the server.');
      }
    } else {
      setError('Please fill in all fields.');
    }
  };  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96 relative">
        <button onClick={onSignUp} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-300">
          <X size={24} />
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              className="border border-gray-300 rounded-lg p-3 w-full"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-lg p-3 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              className="border border-gray-300 rounded-lg p-3 w-full"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-lg p-3 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
