import { City } from '@/model';
import { getDayName } from '@/utils/getDayName';
import useForecast from '@/utils/useForecast';

const now = new Date();
const in2days = new Date(now.setDate(now.getDate() + 2));
const in3days = new Date(now.setDate(now.getDate() + 1));
const dayNames = ['Tomorrow', getDayName(in2days), getDayName(in3days)];

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
      <p className="text-lg text-slate-500">{dayNames[dateIndex - 1]}</p>
      {!isLoading && currentForecast ? (
        <p className="text-2xl text-slate-50 md:text-4xl">
          {Math.round(currentForecast.temp.day)}°C
        </p>
      ) : (
        <p
          className="animate-pulse bg-slate-500 text-2xl text-transparent md:text-4xl"
          role="alert"
          aria-busy="true"
        >
          Load
        </p>
      )}
    </li>
  );
}

export default Forecast;
