import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form className=" flex items-center justify-between mt-5 mx-5" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("")
    }}>
      <input className="w-32 bg-transparent text-white placeholder-gray-200 text-xl"
        type="text"
        placeholder="Add a city ..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button className="text-gray-200 text-2xl " type="submit" value="search"><IoSearch /> </button>

    </form>
  );
}
