import { City } from '@/model';
import { LatLng } from 'leaflet';

export const cities: City[] = [
  {
    name: 'Toulouse',
    coords: new LatLng(43.6047, 1.4442),
  },
  {
    name: 'Marseille',
    coords: new LatLng(43.2965, 5.3698),
  },
  {
    name: 'Valras-plage',
    coords: new LatLng(43.2487, 3.2923),
  },
];
