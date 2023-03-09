import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { BsYoutube } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || ' ');
  }, [keyword]);
  return (
    <header>
      <Link to='/'>
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>
      <form>
        <input
          type='text'
          value={text}
          placeholder='Search...'
          onChange={e => setText(e.target.value)}
        />
        <button onClick={handleSubmit}>
          <GoSearch />
        </button>
      </form>
    </header>
  );
}
