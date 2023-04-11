import { City } from '@/model';
import { getDayTimeFromUnixTimestamp } from '@/utils/dates';
import useForecast from '@/utils/useForecast';
import WeatherIcon from '../WeatherIcon';
import { formatCelcius } from '@/utils/temperatures';

interface Props {
  city: City;
}

function CurrentWeather({ city }: Props) {
  const { forecast, isLoading } = useForecast(city);
  if (isLoading || !forecast || !forecast.daily || !forecast.current)
    return (
      <>
        <h2>Loading</h2>
      </>
    );
  const current = forecast.current;
  const daily = forecast.daily[0];

  return (
    <section className="flex flex-row-reverse items-center justify-between pb-4 shadow-xl md:gap-20">
      <div className="flex flex-col text-right">
        <h3 className="text-slate-400 md:text-2xl">{city.name}</h3>
        <h2 className="text-sm text-slate-500 md:text-lg">
          {getDayTimeFromUnixTimestamp(current.dt)}
        </h2>
        <p className="mb-2 text-sm text-slate-500 md:text-lg">
          H: {formatCelcius(daily.temp.max)} L: {formatCelcius(daily.temp.min)}
        </p>
      </div>
      <div className="flex items-center gap-3 text-slate-50">
        <WeatherIcon
          condition={current.weather[0].id}
          size="6em"
          aria-labelledby="forecastdesc_0"
        />
        <div>
          <p className="text-2xl capitalize md:text-3xl">
            {formatCelcius(current.temp)}
          </p>
          <p id="forecastdesc_0" className="capitalize md:text-xl">
            {current.weather[0].description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;
