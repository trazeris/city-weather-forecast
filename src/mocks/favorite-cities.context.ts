import { vi } from 'vitest';
import { testCities } from './cities';
import { IFavoriteCitiesContext } from '@/contexts/FavoriteCities.context';

export const mockFavoriteCitiesContext: IFavoriteCitiesContext = {
  favoriteCities: [],
  addCityToFavorites: vi.fn((city) => city),
};

export const mockFavoriteCitiesContextWithCities: IFavoriteCitiesContext = {
  favoriteCities: testCities,
  addCityToFavorites: vi.fn((city) => city),
};
