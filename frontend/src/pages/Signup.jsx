import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link  } from 'react-router-dom';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3001/user/signup', { email, password });
      if(response.status===200){
        alert('signup successful');
        navigate('/');
      } // Handle successful signup
    } catch (error) {
      console.error('Signup failed:', error.message);
      alert('failed to signup ')
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96">
        <h2 className="mb-4 text-2xl font-semibold">Signup</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border"
        />
        <button onClick={handleSignup} className="w-full p-2 text-white bg-green-500">
          Signup
        </button>
        {/* Link to the signup page */}
        <p className="mt-4 text-sm">
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
