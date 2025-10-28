
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
      <p className="mt-4 text-lg font-semibold">Fetching Weather...</p>
    </div>
  );
};

export default Loader;
