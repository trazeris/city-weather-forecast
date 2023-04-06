import { City } from '@/model';
import ForecastsContainer from './ForecastsContainer/ForecastsContainer';

interface Props {
  city: City | null;
}

function MapPopup({ city }: Props) {
  return (
    <div className="absolute bottom-0 left-0 z-[1000] w-screen bg-slate-800 p-7 text-center shadow-xl md:bottom-16 md:left-1/2 md:w-auto md:-translate-x-1/2 md:rounded-md md:p-9">
      {city ? (
        <ForecastsContainer city={city} />
      ) : (
        <h3 className="text-slate-400 md:text-2xl">
          Please click on a city to get forecast
        </h3>
      )}
    </div>
  );
}

export default MapPopup;
