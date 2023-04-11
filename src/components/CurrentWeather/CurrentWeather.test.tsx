import { describe, expect, it } from 'vitest';
import { render, screen } from '@/utils/test-utils';
import { LatLng } from 'leaflet';
import { City } from '@/model';
import CurrentWeather from './CurrentWeather';

const testCity: City = {
  name: 'Cityname',
  coords: new LatLng(43.6047, 1.4442),
};

describe('CurrentWeather', () => {
  it('should display the city name', () => {
    render(<CurrentWeather city={testCity} />);

    const tempText = screen.getByText('Cityname');
    expect(tempText).toBeInTheDocument();
  });
});
