import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { City } from '@/src/App';

import './MapElement.css';

interface Props {
  cities: City[];
  currentCityUpdate: React.Dispatch<React.SetStateAction<City | null>>;
}

function MapElement({ cities, currentCityUpdate }: Props) {
  const handleMarkerClick = (city: City) => {
    currentCityUpdate(city);
  };

  return (
    <div className="flex-grow">
      <MapContainer center={[43.6047, 3.1191]} zoom={8} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.name}
            position={city.coords}
            eventHandlers={{ click: () => handleMarkerClick(city) }}
          >
            <Tooltip permanent direction="bottom" offset={[-15, 33]}>
              {city.name}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapElement;
