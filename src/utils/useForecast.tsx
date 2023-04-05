import { City } from '@/model';
import { get3DayTemperatureForecast } from './owm-client';
import useSWR from 'swr';

const useForecast = (city: City) => {
  const { data, error, isLoading } = useSWR(
    [city.coords.lat, city.coords.lng],
    get3DayTemperatureForecast,
  );
  return { temperatures: data, error, isLoading };
};

export default useForecast;
