import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    date_of_birth: '',
    gender: 'male',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      phone: form.phone,
      password: form.password,
      customer: {
        date_of_birth: form.date_of_birth,
        gender: form.gender
      }
    };

    try {
      const res = await axios.post('https://your-backend.com/api/auth/register', dataToSend);
      console.log("Yuborildi:", res.data);
      alert("Muvaffaqiyatli ro‘yxatdan o‘tildi!");
    } catch (err) {
      console.error("Xatolik:", err);
      alert("Ro‘yxatdan o‘tishda xatolik yuz berdi.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border max-w-md mx-auto mt-8 shadow rounded">
      <input name="first_name" placeholder="Ism" value={form.first_name} onChange={handleChange} required className="block w-full p-2 border rounded" />
      <input name="last_name" placeholder="Familiya" value={form.last_name} onChange={handleChange} required className="block w-full p-2 border rounded" />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="block w-full p-2 border rounded" />
      <input name="phone" placeholder="Telefon" value={form.phone} onChange={handleChange} required className="block w-full p-2 border rounded" />
      <input name="password" type="password" placeholder="Parol" value={form.password} onChange={handleChange} required className="block w-full p-2 border rounded" />
      <input name="date_of_birth" type="date" value={form.date_of_birth} onChange={handleChange} required className="block w-full p-2 border rounded" />
      <select name="gender" value={form.gender} onChange={handleChange} className="block w-full p-2 border rounded">
        <option value="male">Erkak</option>
        <option value="female">Ayol</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Ro‘yxatdan o‘tish</button>
    </form>
  );
};

export default RegisterForm;
