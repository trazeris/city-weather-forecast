import { useEffect, useState } from 'react';
import { City, Temperature } from '../App';
import Forecast, { SKEL_TEMP } from './Forecast';

interface Props {
  city: City;
}

const skelTemperatures = [SKEL_TEMP, SKEL_TEMP, SKEL_TEMP];

function ForecastsContainer({ city }: Props) {
  const [temperatures, setTemperatures] =
    useState<Temperature[]>(skelTemperatures);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coords.lat}&lon=${city.coords.lng}&units=metric&appid=539a92a71fbb1b6ee46f8afdfc95bb2e`;
    const fetchWeatherData = async () => {
      try {
        setTemperatures(skelTemperatures);
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

  return (
    <>
      <ul className="mb-3 flex justify-between">
        {temperatures.map((temp, index) => (
          <Forecast key={index} dateIndex={index} temp={temp} />
        ))}
      </ul>
      <h3 className="text-slate-400 md:text-2xl">
        3-day forecast for {city.name}
      </h3>
    </>
  );
}

export default ForecastsContainer;
