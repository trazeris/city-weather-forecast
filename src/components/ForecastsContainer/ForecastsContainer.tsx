import { City } from '@/model';
import Forecast from '../Forecast/Forecast';

interface Props {
  city: City;
}

// we will extract the next 3 daily forecasts
const forecastsRank = [1, 2, 3];

function ForecastsContainer({ city }: Props) {
  return (
    <>
      <ul className="mb-3 mt-3 flex justify-between gap-6">
        {forecastsRank.map((rank) => (
          <Forecast key={rank} dateIndex={rank} city={city} />
        ))}
      </ul>
    </>
  );
}

export default ForecastsContainer;
