import React, { useState } from 'react';
function App() {
  const [artist, setArtist] = useState('');

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    console.log(value);
    setArtist(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(artist);
  };

  return (
    <>
      <h1>Music forecast</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artist"> Music band</label>
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
