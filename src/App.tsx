import { LatLng } from 'leaflet';
import { useState } from 'react';
import './App.css';
import MapElement from './components/MapElement';
import ForecastsContainer from './components/ForecastsContainer';
import MapPopup from './components/MapPopup';

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

  return (
    <div className="flex h-screen flex-col">
      <h1 className="bg-slate-800 p-3 text-slate-100 md:text-2xl">
        City Weather Forecast
      </h1>
      <MapElement cities={cities} currentCityUpdate={setCurrentCity} />
      <MapPopup>
        {currentCity ? (
          <ForecastsContainer city={currentCity} />
        ) : (
          <h3 className="text-slate-400 md:text-2xl">
            Please click on a city to get forecast
          </h3>
        )}
      </MapPopup>
    </div>
  );
}

export default App;
