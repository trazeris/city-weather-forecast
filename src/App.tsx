import MapElement from './components/MapElement/MapElement';
import MapPopup from './components/MapPopup/MapPopup';

import './App.css';
import { SelectedCityContextProvider } from './contexts/SelectedCity.context';
import { FavoriteCitiesContextProvider } from './contexts/FavoriteCities.context';
import TopContainer from './components/TopContainer';

function App() {
  return (
    <FavoriteCitiesContextProvider>
      <SelectedCityContextProvider>
        <div className="flex h-screen flex-col">
          <TopContainer />
          <MapElement />
          <MapPopup />
        </div>
      </SelectedCityContextProvider>
    </FavoriteCitiesContextProvider>
  );
}

export default App;
