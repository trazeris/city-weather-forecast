import MapElement from './components/MapElement/MapElement';
import MapPopup from './components/MapPopup/MapPopup';
import { cities } from './data/cities';

import './App.css';
import { SelectedCityContextProvider } from './contexts/SelectedCity.context';

function App() {
  return (
    <SelectedCityContextProvider>
      <div className="flex h-screen flex-col">
        <h1 className="bg-slate-800 p-3 text-slate-100 md:text-2xl">
          City Weather Forecast
        </h1>
        <MapElement cities={cities} />
        <MapPopup />
      </div>
    </SelectedCityContextProvider>
  );
}

export default App;
