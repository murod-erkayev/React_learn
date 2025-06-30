import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LogIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = formData;

    if (username === 'admin' && password === 'admin11') {
      navigate('/menu');
    } else {
      alert("Login yoki parol noto'g‘ri");
    }
  };

  return (
    <div className='w-full h-[calc(100vh-48px)] flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='flex flex-col w-[400px] p-4 shadow-md border gap-y-3 border-gray-200 rounded-md'>
        <h1 className='text-xl text-blue-700'>Login</h1>

        <input
          type="text"
          name="username"
          className='border border-gray-300 rounded py-1 px-2'
          placeholder='Your Email'
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          className='border border-gray-300 rounded py-1 px-2'
          placeholder='Your Password'
          onChange={handleChange}
        />

        <input
          type="submit"
          className='bg-blue-800 text-white rounded py-1 cursor-pointer'
          value="Login"
        />

        <p>Sizda account yo'qmi? <a className="text-blue-600 underline" href='/register'>Ro'yhatdan o'tish</a></p>
      </form>
    </div>
  );
};
