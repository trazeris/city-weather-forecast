import { City } from '@/src/model';
import Forecast, { SKEL_TEMP } from '../Forecast/Forecast';
import useFetchTemperatures from '@/src/utils/useFetchTemperatures';

interface Props {
  city: City;
}

const skelTemperatures = [SKEL_TEMP, SKEL_TEMP, SKEL_TEMP];

function ForecastsContainer({ city }: Props) {
  const { temperatures } = useFetchTemperatures(city, skelTemperatures);

  return (
    <>
      <ul className="mb-3 flex justify-between">
        {temperatures.map((temp, index) => (
          <Forecast key={index} dateIndex={index} temp={temp} />
        ))}
      </ul>
      <h3 className="text-slate-400 md:text-2xl">
        3-day forecast for {city.name}
      </h3>
    </>
  );
}

export default ForecastsContainer;
