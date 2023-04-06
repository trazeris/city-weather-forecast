import { describe, expect, it } from 'vitest';
import { render, screen } from '@/utils/test-utils';
import ForecastsContainer from './ForecastsContainer';
import { LatLng } from 'leaflet';
import { City } from '@/model';

const testCity: City = {
  name: 'Cityname',
  coords: new LatLng(43.6047, 1.4442),
};

describe('ForecastsContainer', () => {
  it('should display the city name', () => {
    render(<ForecastsContainer city={testCity} />);

    const tempText = screen.getByText('Weather in Cityname');
    expect(tempText).toBeInTheDocument();
  });
});
