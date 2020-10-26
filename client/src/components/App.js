import React, {useState} from 'react';
function App() {

  const [location, setLocation] = useState('');

  const handleChange = { event } => {
    const { value } = event.currentTarget;
    console.log(value);
  };

  return (
    <>
      <h1>Music forecast</h1>
      <form>
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
