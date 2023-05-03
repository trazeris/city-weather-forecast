import { cities } from '@/data/cities';
import { City } from '@/model';
import { LatLng } from 'leaflet';
import { ReactNode, createContext, useState } from 'react';

export interface IFavoriteCitiesContext {
  favoriteCities: City[];
  addCityToFavorites: (city: City) => City;
}

export const FavoriteCitiesContext = createContext<IFavoriteCitiesContext>({
  favoriteCities: cities,
  addCityToFavorites: () => ({ name: 'Mock', coords: new LatLng(0, 0) }),
});

interface FavoriteCitiesContextProviderProps {
  children: ReactNode;
}

export function FavoriteCitiesContextProvider({
  children,
}: FavoriteCitiesContextProviderProps) {
  const [favoriteCities, setFavoriteCities] = useState<City[]>(cities);
  const cityInFavorite = (city: City) =>
    favoriteCities.find(
      (val) =>
        val.coords.lat === city.coords.lat &&
        val.coords.lng === city.coords.lng,
    );
  const addCityToFavorites = (newCity: City): City => {
    const favCity = cityInFavorite(newCity);
    if (!favCity) {
      setFavoriteCities((prevCities) => [...prevCities, newCity]);
      return newCity;
    } else {
      return favCity;
    }
  };
  const value = { favoriteCities, addCityToFavorites };

  return (
    <FavoriteCitiesContext.Provider value={value}>
      {children}
    </FavoriteCitiesContext.Provider>
  );
}
