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
const tomorrowMaxTemp =
  Math.round(entireOneCallResponse.daily[1].temp.max) + '°';
const tomorrowMinTemp =
  Math.round(entireOneCallResponse.daily[1].temp.min) + '°';
const tomorrowName = getDayFromUnixTimestamp(entireOneCallResponse.daily[1].dt);
const tomorrowCondition = entireOneCallResponse.daily[1].weather[0].description;

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

  it('should display the min and max for tomorrow', async () => {
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <Forecast dateIndex={1} city={testCity} />
      </SWRConfig>,
    );

    await waitForElementToBeRemoved(() => screen.queryAllByRole('alert'));
    const tempMaxText = screen.getByText(tomorrowMaxTemp);
    expect(tempMaxText).toBeInTheDocument();
    const tempMinText = screen.getByText(tomorrowMinTemp);
    expect(tempMinText).toBeInTheDocument();
  });

  it('should display the weather condition', async () => {
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <Forecast dateIndex={1} city={testCity} />
      </SWRConfig>,
    );

    await waitForElementToBeRemoved(() => screen.queryAllByRole('alert'));
    const tempConditionText = screen.getByText(tomorrowCondition);
    expect(tempConditionText).toBeInTheDocument();
  });
});
