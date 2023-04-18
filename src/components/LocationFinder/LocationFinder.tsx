import { ChangeEventHandler, useContext, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { FavoriteCitiesContext } from '@/contexts/FavoriteCities.context';
import { SelectedCityContext } from '@/contexts/SelectedCity.context';
import { geocode } from '@/utils/owm-client/owm-client';

function LocationFinder() {
  const [searchString, setSearchString] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { addCityToFavorites } = useContext(FavoriteCitiesContext);
  const { setCurrentCity } = useContext(SelectedCityContext);
  const searchInput = useRef<HTMLInputElement>(null);

  const handleTextChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setSearchString(target.value);
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (searchString === '') return;
    setIsLoading(true);
    const cities = await geocode(searchString);
    if (cities && cities.length > 0) {
      const favCity = addCityToFavorites(cities[0]);
      setCurrentCity(favCity);
      setSearchString('');
      searchInput.current?.blur();
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full rounded bg-slate-800 bg-opacity-95 p-3 text-left shadow-xl hover:bg-opacity-100 md:max-w-xl md:p-4">
      <form onSubmit={handleSubmit} className="flex justify-between">
        <input
          disabled={isLoading}
          type="text"
          value={searchString}
          onChange={handleTextChange}
          placeholder="Search location"
          ref={searchInput}
          className="w-full bg-transparent text-xl text-white caret-white focus:outline-none md:w-96 md:text-2xl"
        />
        <button
          type="submit"
          value="Search"
          disabled={isLoading || !searchString}
        >
          {!isLoading ? (
            <FaSearch
              className="text-2xl text-white"
              title="Click to search location"
            />
          ) : (
            <CgSpinnerTwoAlt
              role="alert"
              aria-busy="true"
              className="animate-spin text-2xl text-white"
              title="Click to search location"
            />
          )}
        </button>
      </form>
    </div>
  );
}

export default LocationFinder;
