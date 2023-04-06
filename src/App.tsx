import { useState } from 'react';
import MapElement from './components/MapElement/MapElement';
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
      <MapPopup city={currentCity} />
    </div>
  );
}

export default App;
