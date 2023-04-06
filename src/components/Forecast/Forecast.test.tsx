import { describe, expect, it } from 'vitest';
import { render, screen, waitForElementToBeRemoved } from '@/utils/test-utils';
import Forecast from './Forecast';
import { City } from '@/model';
import { LatLng } from 'leaflet';
import { entireOneCallResponse } from '@/mocks/handlers';
import { getDayFromUnixTimestamp } from '@/utils/dates';
import { SWRConfig } from 'swr';

const testCity: City = {
  name: 'Cityname',
  coords: new LatLng(43.6047, 1.4442),
};
const tomorrowTemp = Math.round(entireOneCallResponse.daily[1].temp.day) + '°C';
const tomorrowName = getDayFromUnixTimestamp(entireOneCallResponse.daily[1].dt);

describe('Forecast', () => {
  it('should display day name', async () => {
    // swrconfig with empty provider will remove cache between test cases
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <Forecast dateIndex={1} city={testCity} />
      </SWRConfig>,
    );

    await waitForElementToBeRemoved(() => screen.queryAllByRole('alert'));
    const tempText = screen.getByText(tomorrowName);
    expect(tempText).toBeInTheDocument();
  });

  it('should display the temp for tomorrow' + tomorrowTemp, async () => {
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <Forecast dateIndex={1} city={testCity} />
      </SWRConfig>,
    );

    await waitForElementToBeRemoved(() => screen.queryAllByRole('alert'));
    const tempText = screen.getByText(tomorrowTemp);
    expect(tempText).toBeInTheDocument();
  });
});
