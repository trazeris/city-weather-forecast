export async function getOneCallDaily(coords: number[]) {
  const queryParams = new URLSearchParams({
    lat: coords[0].toString(),
    lon: coords[1].toString(),
    units: 'metric',
    appid: '539a92a71fbb1b6ee46f8afdfc95bb2e',
    exclude: 'current,minutely,hourly,alerts',
  });
  const url = `https://api.openweathermap.org/data/2.5/onecall?${queryParams.toString()}`;

  const response = await fetch(url);
  return response.json();
}

export function get3DayTemperatureForecast(
  coords: number[],
): Promise<number[]> {
  const forecast = getOneCallDaily(coords);
  return forecast.then((dailyForecast) => {
    return dailyForecast.daily.map(
      (forecast: { temp: { day: number } }) => forecast.temp.day,
    );
  });
}
