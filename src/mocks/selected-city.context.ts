import { ISelectedCityContext } from '@/contexts/SelectedCity.context';
import { vi } from 'vitest';
import { testCities } from './cities';

export const mockSelectedCityContext: ISelectedCityContext = {
  currentCity: null,
  setCurrentCity: vi.fn(() => 0),
};

export const mockSelectedCityContextWithCity: ISelectedCityContext = {
  currentCity: testCities[0],
  setCurrentCity: vi.fn(() => 0),
};
