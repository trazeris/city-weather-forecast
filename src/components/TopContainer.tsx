import FavoriteCitiesList from './FavoriteCitiesList/FavoriteCitiesList';
import LocationFinder from './LocationFinder/LocationFinder';

function TopContainer() {
  return (
    <header className="absolute z-[1000] flex w-screen flex-col items-end justify-between gap-2 bg-transparent p-2 md:flex-row md:items-start">
      <LocationFinder />
      <FavoriteCitiesList />
    </header>
  );
}

export default TopContainer;
