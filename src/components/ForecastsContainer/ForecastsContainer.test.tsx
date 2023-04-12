import { describe, expect, it } from 'vitest';
import { render, screen, waitForElementToBeRemoved } from '@/utils/test-utils';
import ForecastsContainer from './ForecastsContainer';
import { LatLng } from 'leaflet';
import { City } from '@/model';
import { entireOneCallResponse } from '@/mocks/handlers';
import { getDayFromUnixTimestamp } from '@/utils/dates';

const testCity: City = {
  name: 'Cityname',
  coords: new LatLng(43.6047, 1.4442),
};
const tomorrowName = getDayFromUnixTimestamp(entireOneCallResponse.daily[1].dt);
const nextDayName = getDayFromUnixTimestamp(entireOneCallResponse.daily[2].dt);
const lastDayName = getDayFromUnixTimestamp(entireOneCallResponse.daily[3].dt);

describe('ForecastsContainer', () => {
  it('should display the city name', async () => {
    render(<ForecastsContainer city={testCity} />);

    await waitForElementToBeRemoved(() => screen.queryAllByRole('alert'));
    let tempText = screen.getByText(tomorrowName);
    expect(tempText).toBeInTheDocument();
    tempText = screen.getByText(nextDayName);
    expect(tempText).toBeInTheDocument();
    tempText = screen.getByText(lastDayName);
    expect(tempText).toBeInTheDocument();
  });
});
