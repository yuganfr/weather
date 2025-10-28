
import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="bg-red-500/80 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg text-center border border-red-700">
      <h3 className="font-bold text-xl mb-2">Oops! Something went wrong.</h3>
      <p>{message}</p>
    </div>
  );
};

export default ErrorDisplay;
