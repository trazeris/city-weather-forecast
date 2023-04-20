import { SelectedCityContext } from '@/contexts/SelectedCity.context';
import { City } from '@/model';
import { useContext } from 'react';

interface Props {
  city: City;
}

function FavoriteCityElement({ city }: Props) {
  const { setCurrentCity } = useContext(SelectedCityContext);
  const handleClick = () => {
    setCurrentCity(city);
  };

  return (
    <li className="w-full pb-1">
      <button
        onClick={handleClick}
        className="h-full w-full rounded px-4 py-2 text-lg text-slate-300 shadow-lg hover:bg-slate-600 hover:text-white"
      >
        {city.name}
      </button>
    </li>
  );
}

export default FavoriteCityElement;
