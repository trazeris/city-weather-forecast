import { useContext } from 'react';
import { TbBookmarks } from 'react-icons/tb';
import { FavoriteCitiesContext } from '@/contexts/FavoriteCities.context';
import FavoriteCityElement from '../FavoriteCityElement/FavoriteCityElement';
import { SelectedCityContext } from '@/contexts/SelectedCity.context';

function FavoriteCitiesList() {
  const { favoriteCities } = useContext(FavoriteCitiesContext);
  const { currentCity, setCurrentCity } = useContext(SelectedCityContext);
  const handleFavBtnClick = () => {
    setCurrentCity(null);
  };
  const displayingForecast = currentCity !== null;

  return (
    <>
      <button
        onClick={handleFavBtnClick}
        className={`${
          !displayingForecast && 'hidden'
        } rounded bg-slate-800 p-3 text-white shadow-xl md:hidden`}
        title="Open favorites"
      >
        <TbBookmarks className="text-2xl text-white" />
      </button>
      <ul
        className={`${
          displayingForecast && 'hidden'
        } flex w-full flex-col overflow-y-auto rounded bg-slate-800 p-2 text-left hover:bg-opacity-100 md:absolute md:right-2 md:block md:max-h-52 md:w-60`}
      >
        {favoriteCities.map((city) => (
          <FavoriteCityElement key={city.coords.toString()} city={city} />
        ))}
      </ul>
    </>
  );
}

export default FavoriteCitiesList;
