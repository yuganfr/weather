
import React from 'react';
import { DailyForecast } from '../types';
import WeatherIcon from './WeatherIcon';

interface ForecastCardProps {
  forecast: DailyForecast;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  return (
    <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-md text-center flex flex-col items-center justify-between border border-white/20 transition-transform hover:scale-105 hover:shadow-lg">
      <h3 className="font-semibold text-lg">{forecast.day}</h3>
      <div className="w-16 h-16 my-2">
        <WeatherIcon condition={forecast.condition} />
      </div>
      <p className="text-2xl font-bold">{forecast.temperature}°F</p>
      <p className="text-sm opacity-90 mt-1">{forecast.condition}</p>
    </div>
  );
};

export default ForecastCard;
