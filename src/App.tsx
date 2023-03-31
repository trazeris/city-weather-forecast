import { LatLng } from 'leaflet';
import { useEffect, useState } from 'react';
import './App.css';
import MapElement from './components/MapElement';

export interface City {
  name: string;
  coords: LatLng;
}

export type Temperature = number;

const cities: City[] = [
  {
    name: 'Toulouse',
    coords: new LatLng(43.6047, 1.4442),
  },
  {
    name: 'Marseille',
    coords: new LatLng(43.2965, 5.3698),
  },
  {
    name: 'Valras-plage',
    coords: new LatLng(43.2487, 3.2923),
  },
];

function App() {
  const [currentCity, setCurrentCity] = useState<City | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [temperatures, setTemperatures] = useState<Temperature[]>([]);

  useEffect(() => {
    if (currentCity) {
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentCity.coords.lat}&lon=${currentCity.coords.lng}&units=metric&appid=539a92a71fbb1b6ee46f8afdfc95bb2e`;
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
    } else {
      setTemperatures([]);
    }
  }, [currentCity]);

  return (
    <div className="flex h-screen flex-col">
      <h1>City Weather Forecast</h1>
      <MapElement cities={cities} currentCityUpdate={setCurrentCity} />
      {currentCity && (
        <div className="h-30 absolute bottom-7 right-7 z-[1000] w-auto bg-slate-200">
          <h3>{currentCity.name}</h3>
          <p>
            {temperatures.length > 0 &&
              temperatures.map((temp, index) => (
                <span key={index}>{temp} | </span>
              ))}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
