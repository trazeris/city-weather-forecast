import { cities } from '@/data/cities';
import { City } from '@/model';
import { ReactNode, createContext, useState } from 'react';

export interface IFavoriteCitiesContext {
  favoriteCities: City[];
  addCityToFavorites: (city: City) => void;
}

export const FavoriteCitiesContext = createContext<IFavoriteCitiesContext>({
  favoriteCities: cities,
  addCityToFavorites: () => null,
});

interface FavoriteCitiesContextProviderProps {
  children: ReactNode;
}

export function FavoriteCitiesContextProvider({
  children,
}: FavoriteCitiesContextProviderProps) {
  const [favoriteCities, setFavoriteCities] = useState<City[]>(cities);
  const cityInFavorite = (city: City) =>
    favoriteCities.some((val) => val.coords === city.coords);
  const addCityToFavorites = (newCity: City) => {
    if (!cityInFavorite(newCity)) {
      setFavoriteCities((prevCities) => [...prevCities]);
    }
  };
  const value = { favoriteCities, addCityToFavorites };

  return (
    <FavoriteCitiesContext.Provider value={value}>
      {children}
    </FavoriteCitiesContext.Provider>
  );
}
