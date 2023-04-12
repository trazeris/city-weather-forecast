import { describe, expect, it } from 'vitest';
import { render, screen, waitForElementToBeRemoved } from '@/utils/test-utils';
import { LatLng } from 'leaflet';
import { City } from '@/model';
import CurrentWeather from './CurrentWeather';
import { SWRConfig } from 'swr';
import { entireOneCallResponse } from '@/mocks/handlers';

const testCity: City = {
  name: 'Cityname',
  coords: new LatLng(43.6047, 1.4442),
};
const currentTemp = Math.round(entireOneCallResponse.current.temp) + '°';
const lowTemp = Math.round(entireOneCallResponse.daily[0].temp.min) + '°';
const highTemp = Math.round(entireOneCallResponse.daily[0].temp.max) + '°';
const currentCondition = entireOneCallResponse.current.weather[0].description;

describe('CurrentWeather', () => {
  it('should display the city name', async () => {
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <CurrentWeather city={testCity} />
      </SWRConfig>,
    );

    await waitForElementToBeRemoved(() => screen.queryAllByRole('alert'));
    const tempText = screen.getByText('Cityname');
    expect(tempText).toBeInTheDocument();
  });

  it('should display the current temp, high and low', async () => {
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <CurrentWeather city={testCity} />
      </SWRConfig>,
    );

    await waitForElementToBeRemoved(() => screen.queryAllByRole('alert'));
    const currentTempText = screen.getByTitle('Current temperature');
    expect(currentTempText).toBeInTheDocument();
    expect(currentTempText.textContent).toEqual(currentTemp);
    const highLowText = screen.getByTitle('Day high and low');
    expect(highLowText).toBeInTheDocument();
    expect(highLowText.textContent).toEqual(`H ${highTemp} L ${lowTemp}`);
  });

  it('should display the current weather condition', async () => {
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <CurrentWeather city={testCity} />
      </SWRConfig>,
    );

    await waitForElementToBeRemoved(() => screen.queryAllByRole('alert'));
    const conditionText = screen.getByText(currentCondition);
    expect(conditionText).toBeInTheDocument();
    const conditionIcon = screen.getByLabelText(currentCondition);
    expect(conditionIcon).toBeInTheDocument();
  });
});
