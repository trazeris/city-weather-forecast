import { City } from '@/model';
import useForecast from '@/utils/useForecast';
import { ReactNode, useContext } from 'react';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import ForecastsContainer from '../ForecastsContainer/ForecastsContainer';
import { SelectedCityContext } from '@/contexts/SelectedCity.context';

interface ForecastErrorBoundaryProps {
  city: City;
  children: ReactNode;
}

function ForecastErrorBoundary({ city, children }: ForecastErrorBoundaryProps) {
  const { error } = useForecast(city);
  if (error)
    return <h3 className="text-slate-400 md:text-2xl">{error.message}</h3>;
  return <>{children}</>;
}

function MapPopup() {
  const { currentCity } = useContext(SelectedCityContext);
  return (
    <div className="absolute bottom-0 left-0 z-[1000] w-screen bg-slate-800 bg-opacity-95 p-4 text-left shadow-xl hover:bg-opacity-100 md:bottom-16 md:left-1/2 md:w-auto md:-translate-x-1/2 md:rounded-md md:p-9">
      {currentCity ? (
        <ForecastErrorBoundary city={currentCity}>
          <CurrentWeather city={currentCity} />
          <ForecastsContainer city={currentCity} />
        </ForecastErrorBoundary>
      ) : (
        <h3 className="text-slate-400 md:text-2xl">Please select a city</h3>
      )}
    </div>
  );
}

export default MapPopup;
