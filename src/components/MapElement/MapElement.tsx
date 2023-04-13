import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';
import { Icon, Map } from 'leaflet';
import { useContext, useState } from 'react';
import { City } from '@/model';

import './MapElement.css';
import MapMarkerSVG from '@/assets/map_marker.svg';
import MapMarkerSelectedSVG from '@/assets/map_marker.selected.svg';
import { SelectedCityContext } from '@/contexts/SelectedCity.context';

const cityIcon = new Icon({
  iconUrl: MapMarkerSVG,
  iconRetinaUrl: MapMarkerSVG,
  iconSize: [50, 64],
  iconAnchor: [22, 54],
  tooltipAnchor: [17, -32],
});
const citySelectedIcon = new Icon({
  iconUrl: MapMarkerSelectedSVG,
  iconRetinaUrl: MapMarkerSelectedSVG,
  iconSize: [50, 64],
  iconAnchor: [22, 54],
  tooltipAnchor: [17, -32],
  className: 'selected-marker',
});

interface Props {
  cities: City[];
}

function getCityIcon(targetCity: City, currentCity: City | null): Icon {
  if (currentCity) {
    return targetCity === currentCity ? citySelectedIcon : cityIcon;
  }
  return cityIcon;
}

function MapElement({ cities }: Props) {
  const { currentCity, setCurrentCity } = useContext(SelectedCityContext);
  const [map, setMap] = useState<Map | null>(null);
  const handleMarkerClick = (city: City) => {
    // offset 0.25° on latitude to allow for map popup presence
    map?.panTo([city.coords.lat - 0.45, city.coords.lng]);
    setCurrentCity(city);
  };

  return (
    <div className="flex-grow">
      <MapContainer
        center={[43.6047, 3.1191]}
        zoom={8}
        scrollWheelZoom={false}
        ref={(ref) => setMap(ref)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            icon={getCityIcon(city, currentCity)}
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
