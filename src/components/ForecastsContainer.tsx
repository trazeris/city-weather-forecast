import { useEffect, useState } from 'react';
import { City, Temperature } from '../App';
import Forecast from './Forecast';

interface Props {
  city: City;
}

function ForecastsContainer({ city }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [temperatures, setTemperatures] = useState<Temperature[]>([]);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coords.lat}&lon=${city.coords.lng}&units=metric&appid=539a92a71fbb1b6ee46f8afdfc95bb2e`;
    const fetchWeatherData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        // would be best to have API types or use a client,
        const responseTemperatures = json.daily
          .slice(1, 4)
          .map((forecast: { temp: { day: number } }) => forecast.temp.day);
        setTemperatures(responseTemperatures);
        setIsLoading(false);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchWeatherData();
  }, [city]);

  return (
    <div className="h-30 absolute bottom-7 right-7 z-[1000] w-auto bg-slate-200">
      <h3>{city.name}</h3>
      <ul>
        {temperatures.length > 0 &&
          temperatures.map((temp, index) => (
            <Forecast key={index} dateIndex={index} temp={temp} />
          ))}
      </ul>
    </div>
  );
}

export default ForecastsContainer;
