
import React from 'react';
import { CurrentWeather } from '../types';
import WeatherIcon from './WeatherIcon';

interface WeatherCardProps {
  current: CurrentWeather;
  city: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ current, city }) => {
  return (
    <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/30">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl font-bold">{city}</h2>
          <p className="text-lg mt-1">{current.condition}</p>
          <div className="text-7xl font-extrabold my-4">{current.temperature}°F</div>
        </div>
        <div className="flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40">
                <WeatherIcon condition={current.condition} />
            </div>
            <p className="text-lg -mt-2">Feels like {current.feelsLike}°F</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-3 text-lg w-full md:w-auto mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <span>Humidity</span>
            <span className="font-semibold">{current.humidity}%</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Wind Speed</span>
            <span className="font-semibold">{current.windSpeed} mph</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
