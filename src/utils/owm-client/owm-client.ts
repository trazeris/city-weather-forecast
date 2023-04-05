import { Forecast } from './types';

export async function getOneCallForecast(coords: number[]): Promise<Forecast> {
  const queryParams = new URLSearchParams({
    lat: coords[0].toString(),
    lon: coords[1].toString(),
    units: 'metric',
    appid: '539a92a71fbb1b6ee46f8afdfc95bb2e',
    exclude: 'minutely,hourly,alerts',
  });
  const url = `https://api.openweathermap.org/data/2.5/onecall?${queryParams.toString()}`;

  const response = await fetch(url);
  return response.json();
}
