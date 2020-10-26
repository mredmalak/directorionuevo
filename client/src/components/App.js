import React, { useState } from 'react';
import { getMusicbandsData } from '../lib/get-musicbands';

function App() {
  const [artist, setArtist] = useState('');

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    console.log(value);
    setArtist(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getMusicbandsData(artist);
    console.log(artist);
  };

  return (
    <>
      <h1>Music forecast</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artist">Music band</label>
        <input
          type="search"
          id="artist"
          placeholder="Search your music band"
          onChange={handleChange}
        />

        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default App;
