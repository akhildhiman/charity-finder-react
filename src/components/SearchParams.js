import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";

const SearchParams = () => {
  //   const [isLoading, setLoading] = useState(true);
  const [regions, setRegions] = useState([]);
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    async function getRegions() {
      const response = await fetch(
        `https://api.globalgiving.org/api/public/projectservice/regions.json?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setRegions(data.regions.region);
    }
    getRegions();

    async function getThemes() {
      const response = await fetch(
        `https://api.globalgiving.org/api/public/projectservice/themes.json?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setThemes(data.themes.theme);
    }
    getThemes();
  }, []);

  return (
    <div>
      <label>Region: </label>
      <select>
        {regions.map(({ name }) => (
          <option>{name}</option>
        ))}
      </select>
      <br />
      <label>Themes: </label>
      <select>
        {themes.map(({ name }) => (
          <option>{name}</option>
        ))}
      </select>
      <br />
      <button>Search</button>
    </div>
  );
};
export default SearchParams;
