import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/YTlogo.png';
import { GoSearch } from 'react-icons/go';

export default function Header() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSearch = () => {
    console.log(text);
    navigate(`/${text}`);
  };
  return (
    <header className='bg-slate-500 flex p-2'>
      <img src={logo} alt='YT_logo' className='h-10 mr-2-2' />
      <input
        type='text'
        value={text}
        placeholder='검색'
        onChange={handleChange}
        className='h-8 rounded-xl'
      />
      <button onClick={handleSearch}>
        <GoSearch />
      </button>
    </header>
  );
}
