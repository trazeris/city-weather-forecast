import MapElement from './components/MapElement/MapElement';
import MapPopup from './components/MapPopup/MapPopup';

import './App.css';
import { SelectedCityContextProvider } from './contexts/SelectedCity.context';
import { FavoriteCitiesContextProvider } from './contexts/FavoriteCities.context';

function App() {
  return (
    <FavoriteCitiesContextProvider>
      <SelectedCityContextProvider>
        <div className="flex h-screen flex-col">
          <h1 className="bg-slate-800 p-3 text-slate-100 md:text-2xl">
            City Weather Forecast
          </h1>
          <MapElement />
          <MapPopup />
        </div>
      </SelectedCityContextProvider>
    </FavoriteCitiesContextProvider>
  );
}

export default App;
