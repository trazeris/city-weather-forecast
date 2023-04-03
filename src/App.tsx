import { useState } from 'react';
import MapElement from './components/MapElement/MapElement';
import ForecastsContainer from './components/ForecastsContainer/ForecastsContainer';
import MapPopup from './components/MapPopup';
import { City } from './model';
import { cities } from './data/cities';

import './App.css';

function App() {
  const [currentCity, setCurrentCity] = useState<City | null>(null);

  return (
    <div className="flex h-screen flex-col">
      <h1 className="bg-slate-800 p-3 text-slate-100 md:text-2xl">
        City Weather Forecast
      </h1>
      <MapElement
        cities={cities}
        currentCity={currentCity}
        currentCityUpdate={setCurrentCity}
      />
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
