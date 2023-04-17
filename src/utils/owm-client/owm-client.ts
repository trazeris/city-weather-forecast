import { City } from '@/model';
import { Forecast, OWMCity } from './types';
import { LatLng } from 'leaflet';

export async function getOneCallForecast(coords: number[]): Promise<Forecast> {
  const queryParams = new URLSearchParams({
    lat: coords[0].toString(),
    lon: coords[1].toString(),
    units: 'metric',
    appid: '539a92a71fbb1b6ee46f8afdfc95bb2e',
    exclude: 'minutely,alerts',
  });
  const url = `https://api.openweathermap.org/data/2.5/onecall?${queryParams.toString()}`;

  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error('An error occurred while fetching weather');
    throw error;
  }
  return response.json();
}

// hopefully temporary until we use a better API for this
export async function geocode(cityName: string): Promise<City[]> {
  const queryParams = new URLSearchParams({
    q: cityName,
    limit: '1',
    appid: '539a92a71fbb1b6ee46f8afdfc95bb2e',
  });
  const url = `https://api.openweathermap.org/geo/1.0/direct?${queryParams.toString()}`;

  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error('An error occurred while searching city name');
    throw error;
  }
  const json = await response.json();
  const geocodedCity = json.map(
    (owmCity: OWMCity) =>
      <City>{
        name: owmCity.name,
        coords: new LatLng(owmCity.lat, owmCity.lon),
      },
  );
  return geocodedCity;
}
