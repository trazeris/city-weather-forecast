import MapElement from './components/MapElement/MapElement';
import MapPopup from './components/MapPopup/MapPopup';

import './App.css';
import { SelectedCityContextProvider } from './contexts/SelectedCity.context';
import { FavoriteCitiesContextProvider } from './contexts/FavoriteCities.context';
import LocationFinder from './components/LocationFinder/LocationFinder';

function App() {
  return (
    <FavoriteCitiesContextProvider>
      <SelectedCityContextProvider>
        <div className="flex h-screen flex-col">
          <LocationFinder />
          <MapElement />
          <MapPopup />
        </div>
      </SelectedCityContextProvider>
    </FavoriteCitiesContextProvider>
  );
}

export default App;
