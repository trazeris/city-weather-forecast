import { City } from '@/model';
import { getDayFromUnixTimestamp } from '@/utils/dates';
import useForecast from '@/utils/useForecast';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { formatCelcius } from '@/utils/temperatures';
import ForecastSkeleton from './Forecast.skel';

interface Props {
  dateIndex: number;
  city: City;
}

function Forecast({ dateIndex, city }: Props) {
  const { forecast, isLoading } = useForecast(city);
  const currentForecast =
    forecast && forecast.daily ? forecast.daily[dateIndex] : null;
  if (isLoading || !currentForecast) return <ForecastSkeleton />;

  return (
    <li className="flex flex-col items-center text-center md:px-5">
      <p className="mb-2 text-sm text-slate-500 md:text-lg">
        {getDayFromUnixTimestamp(currentForecast.dt)}
      </p>
      <WeatherIcon
        description={currentForecast.weather[0].description}
        condition={currentForecast.weather[0].id}
        className="h-14 w-14 text-slate-50"
      />
      <section className="flex flex-row items-center gap-2 text-xl md:text-2xl">
        <p className="text-slate-200">
          {formatCelcius(currentForecast.temp.max)}
        </p>
        <p className="text-slate-500">
          {formatCelcius(currentForecast.temp.min)}
        </p>
      </section>
    </li>
  );
}

export default Forecast;
