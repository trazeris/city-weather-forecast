import { ISelectedCityContext } from '@/contexts/SelectedCity.context';
import { LatLng } from 'leaflet';
import { vi } from 'vitest';

export const testCities = [
  {
    name: 'Toulouse',
    coords: new LatLng(43.6047, 1.4442),
  },
  {
    name: 'Marseille',
    coords: new LatLng(43.2965, 5.3698),
  },
];

export const mockContext: ISelectedCityContext = {
  currentCity: null,
  setCurrentCity: vi.fn(() => 0),
};

export const mockContextWithCity: ISelectedCityContext = {
  currentCity: testCities[0],
  setCurrentCity: vi.fn(() => 0),
};
