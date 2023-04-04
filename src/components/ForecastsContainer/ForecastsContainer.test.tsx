import { describe, expect, it } from 'vitest';
import { render, screen, waitForElementToBeRemoved } from '@/utils/test-utils';
import ForecastsContainer from './ForecastsContainer';
import { LatLng } from 'leaflet';
import { City } from '@/model';
import { entireOneCallResponse } from '@/mocks/handlers';

const testCity: City = {
  name: 'Cityname',
  coords: new LatLng(43.6047, 1.4442),
};
const tomorrowTemp = Math.round(entireOneCallResponse.daily[1].temp.day) + '°C';

describe('ForecastsContainer', () => {
  it('should display the city name', () => {
    render(<ForecastsContainer city={testCity} />);

    const tempText = screen.getByText('3-day forecast for Cityname');
    expect(tempText).toBeInTheDocument();
  });

  it('should display the temp for tomorow' + tomorrowTemp, async () => {
    render(<ForecastsContainer city={testCity} />);

    await waitForElementToBeRemoved(() => screen.queryAllByRole('alert'));
    const tempText = screen.getByText(tomorrowTemp);
    expect(tempText).toBeInTheDocument();
  });
});
