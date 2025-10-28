
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  disabled: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, disabled }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full max-w-sm">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a city..."
        disabled={disabled}
        className="w-full px-4 py-2 text-gray-800 bg-white/90 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={disabled}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
