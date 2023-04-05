import { City } from '@/model';
import useSWR from 'swr';
import { getOneCallForecast } from './owm-client/owm-client';

const useForecast = (city: City) => {
  const { data, error, isLoading } = useSWR(
    [city.coords.lat, city.coords.lng],
    getOneCallForecast,
  );
  return { forecast: data, error, isLoading };
};

export default useForecast;
