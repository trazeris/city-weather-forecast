import { describe, expect, it } from 'vitest';
import { render, screen, waitForElementToBeRemoved } from '@/utils/test-utils';
import Forecast from './Forecast';
import { City } from '@/model';
import { LatLng } from 'leaflet';
import { entireOneCallResponse } from '@/mocks/handlers';

const testCity: City = {
  name: 'Cityname',
  coords: new LatLng(43.6047, 1.4442),
};
const tomorrowTemp = Math.round(entireOneCallResponse.daily[1].temp.day) + '°C';

describe('Forecast', () => {
  it('should display tomorrow', () => {
    render(<Forecast dateIndex={1} city={testCity} />);

    const tempText = screen.getByText('Tomorrow');
    expect(tempText).toBeInTheDocument();
  });

  it('should display the temp for tomorrow' + tomorrowTemp, async () => {
    render(<Forecast dateIndex={1} city={testCity} />);

    await waitForElementToBeRemoved(() => screen.queryAllByRole('alert'));
    const tempText = screen.getByText(tomorrowTemp);
    expect(tempText).toBeInTheDocument();
  });
});
