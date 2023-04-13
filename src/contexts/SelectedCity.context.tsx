import { City } from '@/model';
import { Dispatch, ReactNode, createContext, useState } from 'react';

export interface ISelectedCityContext {
  currentCity: City | null;
  setCurrentCity: Dispatch<React.SetStateAction<City | null>>;
}

export const SelectedCityContext = createContext<ISelectedCityContext>({
  currentCity: null,
  setCurrentCity: () => null,
});

interface SelectedCityContextProvider {
  children: ReactNode;
}

export function SelectedCityContextProvider({
  children,
}: SelectedCityContextProvider) {
  const [currentCity, setCurrentCity] = useState<City | null>(null);
  const value = { currentCity, setCurrentCity };

  return (
    <SelectedCityContext.Provider value={value}>
      {children}
    </SelectedCityContext.Provider>
  );
}
