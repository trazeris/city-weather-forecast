import { useEffect, useState } from 'react';
import { Temperature, City } from '@/src/model';

const useFetchTemperatures = (
  city: City,
  initialTemperatures: Temperature[],
) => {
  const [temperatures, setTemperatures] =
    useState<Temperature[]>(initialTemperatures);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coords.lat}&lon=${city.coords.lng}&units=metric&appid=539a92a71fbb1b6ee46f8afdfc95bb2e`;
    const fetchWeatherData = async () => {
      try {
        setTemperatures(initialTemperatures);
        const response = await fetch(url);
        const json = await response.json();
        // would be best to have API types or use a client,
        const responseTemperatures = json.daily
          .slice(1, 4)
          .map((forecast: { temp: { day: number } }) => forecast.temp.day);
        setTemperatures(responseTemperatures);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchWeatherData();
  }, [city]);

  return { temperatures };
};

export default useFetchTemperatures;
