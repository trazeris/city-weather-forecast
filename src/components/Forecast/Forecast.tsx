import { City } from '@/model';
import { getDayFromUnixTimestamp } from '@/utils/dates';
import useForecast from '@/utils/useForecast';

interface Props {
  dateIndex: number;
  city: City;
}

function Forecast({ dateIndex, city }: Props) {
  const { forecast, isLoading } = useForecast(city);
  const currentForecast =
    forecast && forecast.daily ? forecast.daily[dateIndex] : null;

  return (
    <li className="block text-center md:px-5">
      {!isLoading && currentForecast ? (
        <>
          <p className="text-lg text-slate-500">
            {getDayFromUnixTimestamp(currentForecast.dt)}
          </p>
          <p className="text-2xl text-slate-50 md:text-4xl">
            {Math.round(currentForecast.temp.day)}°C
          </p>
        </>
      ) : (
        <>
          <p
            className="animate-pulse bg-slate-500 text-transparent"
            role="alert"
            aria-busy="true"
          >
            Loading
          </p>
          <p
            className="animate-pulse bg-slate-500 text-2xl text-transparent md:text-4xl"
            role="alert"
            aria-busy="true"
          >
            Load
          </p>
        </>
      )}
    </li>
  );
}

export default Forecast;
