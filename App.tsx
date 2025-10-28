
import React, { useState, useEffect, useCallback } from 'react';
import { WeatherData } from './types';
import { fetchWeatherDataByCoords, fetchWeatherDataByCity } from './services/geminiService';
import { useGeolocation } from './hooks/useGeolocation';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import SearchBar from './components/SearchBar';
import Loader from './components/Loader';
import ErrorDisplay from './components/ErrorDisplay';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { location, error: geoError, getLocation } = useGeolocation();

  const handleFetchWeather = useCallback(async (fetchFunc: () => Promise<WeatherData>) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);
    try {
      const data = await fetchFunc();
      setWeatherData(data);
    } catch (err) {
      console.error(err);
      const errorMessage = (err as Error).message || 'An unknown error occurred.';
      if(errorMessage.includes('404')) {
        setError('Could not find weather for that location. Please try a different city.');
      } else if (errorMessage.includes('API key not valid')) {
        setError('The API key is invalid. Please check your configuration.');
      }
      else {
        setError('Failed to fetch weather data. Please check your connection or try again later.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (location) {
      handleFetchWeather(() => fetchWeatherDataByCoords(location.latitude, location.longitude));
    } else if (geoError) {
      setError(geoError);
      setLoading(false);
      // As a fallback, fetch weather for a default city
      handleFetchWeather(() => fetchWeatherDataByCity('New York'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, geoError, handleFetchWeather]);
  
  // Request location on initial load
  useEffect(() => {
    getLocation();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleSearch = (city: string) => {
    if (city) {
      handleFetchWeather(() => fetchWeatherDataByCity(city));
    }
  };
  
  const isNight = new Date().getHours() >= 18 || new Date().getHours() <= 6;
  const backgroundClass = isNight
    ? 'bg-gradient-to-br from-night-dark to-night-light'
    : 'bg-gradient-to-br from-sky-blue-light to-sky-blue-dark';


  return (
    <div className={`min-h-screen w-full flex flex-col items-center p-4 sm:p-6 lg:p-8 text-white transition-colors duration-500 ${backgroundClass}`}>
      <div className="w-full max-w-4xl mx-auto">
        <header className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-shadow">
            Gemini Weather
          </h1>
          <SearchBar onSearch={handleSearch} disabled={loading} />
        </header>

        <main className="w-full">
          {loading && <Loader />}
          {error && !loading && <ErrorDisplay message={error} />}
          {weatherData && !loading && (
            <div className="animate-fade-in">
              <WeatherCard current={weatherData.current} city={weatherData.city} />
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">5-Day Forecast</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {weatherData.forecast.map((day, index) => (
                    <ForecastCard key={index} forecast={day} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
       <footer className="mt-8 text-center text-white/70 text-sm">
        <p>Powered by Google Gemini. Weather data is illustrative.</p>
      </footer>
    </div>
  );
};

export default App;
