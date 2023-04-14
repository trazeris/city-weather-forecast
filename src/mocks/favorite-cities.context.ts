import { vi } from 'vitest';
import { testCities } from './cities';
import { IFavoriteCitiesContext } from '@/contexts/FavoriteCities.context';

export const mockFavoriteCitiesContext: IFavoriteCitiesContext = {
  favoriteCities: [],
  addCityToFavorites: vi.fn(() => 0),
};

export const mockFavoriteCitiesContextWithCities: IFavoriteCitiesContext = {
  favoriteCities: testCities,
  addCityToFavorites: vi.fn(() => 0),
};
