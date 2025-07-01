import { useState, useCallback } from 'react';
import { weatherData } from '~data';

const useWeather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<IWeatherData | null>(null);
  const [error, setError] = useState('');

  const handleSearch = useCallback(() => {
    setError('');
    const found = weatherData.find(
      item => item.city.toLowerCase() === city.trim().toLowerCase(),
    );
    if (found) {
      setWeather(found);
    } else {
      setWeather(null);
      setError('City not found.');
    }
  }, [city]);

  return {
    city,
    setCity,
    weatherData: weather,
    handleSearch,
    error,
  };
};

export default useWeather;
