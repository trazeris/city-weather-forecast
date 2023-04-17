import LocationFinder from './LocationFinder/LocationFinder';

function TopContainer() {
  return (
    <header className="absolute z-[1000] w-screen bg-transparent p-2">
      <LocationFinder />
    </header>
  );
}

export default TopContainer;
