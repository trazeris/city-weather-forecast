import { City } from '@/model';
import { getDayFromUnixTimestamp } from '@/utils/dates';
import useForecast from '@/utils/useForecast';
import WeatherIcon from '../WeatherIcon';

interface Props {
  dateIndex: number;
  city: City;
}

function Forecast({ dateIndex, city }: Props) {
  const { forecast, isLoading } = useForecast(city);
  const currentForecast =
    forecast && forecast.daily ? forecast.daily[dateIndex] : null;

  return (
    <li className="flex flex-col items-center md:px-5">
      {!isLoading && currentForecast ? (
        <>
          <p className="mb-2 text-lg text-slate-500">
            {getDayFromUnixTimestamp(currentForecast.dt)}
          </p>
          <p className="text-2xl text-slate-50 md:text-4xl">
            <WeatherIcon
              condition={currentForecast.weather[0].id}
              size="2em"
              aria-labelledby={`forecastdesc_${dateIndex}`}
            />
            <span
              className="hidden"
              id={`forecastdesc_${dateIndex}`}
              aria-hidden="true"
            >
              {currentForecast.weather[0].description}
            </span>
          </p>
          <section className="flex flex-row items-center gap-2 text-2xl md:text-3xl">
            <p className=" text-slate-200 ">
              {Math.round(currentForecast.temp.max)}°
            </p>
            <p className=" text-slate-500">
              {Math.round(currentForecast.temp.min)}°
            </p>
          </section>
        </>
      ) : (
        <>
          <p
            className="mb-2 animate-pulse bg-slate-500 text-lg text-transparent"
            role="alert"
            aria-busy="true"
          >
            Loading day
          </p>
          <div className="mb-2 h-16 w-16 animate-pulse bg-slate-500"></div>
          <section className="flex flex-row items-center gap-2 text-2xl md:text-3xl">
            <p
              className="animate-pulse bg-slate-500 text-transparent"
              role="alert"
              aria-busy="true"
            >
              Ld
            </p>
            <p
              className="animate-pulse bg-slate-500 text-transparent"
              role="alert"
              aria-busy="true"
            >
              Ld
            </p>
          </section>
        </>
      )}
    </li>
  );
}

export default Forecast;
