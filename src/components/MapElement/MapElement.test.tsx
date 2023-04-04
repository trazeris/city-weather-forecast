import { describe, expect, it, vi } from 'vitest';
import { render, screen, userEvent } from '@/utils/test-utils';

import MapElement from './MapElement';
import { LatLng } from 'leaflet';

const testCities = [
  {
    name: 'Toulouse',
    coords: new LatLng(43.6047, 1.4442),
  },
  {
    name: 'Marseille',
    coords: new LatLng(43.2965, 5.3698),
  },
];

describe('MapElement', () => {
  it('should display a map with controls', () => {
    const currentCityUpdateMock = vi.fn(() => 0);
    render(
      <MapElement
        cities={testCities}
        currentCityUpdate={currentCityUpdateMock}
        currentCity={null}
      />,
    );

    // maybe we should use querySelector to check for tiles

    const zoomInBtn = screen.getByLabelText('Zoom in');
    expect(zoomInBtn).toBeInTheDocument();
  });

  it('should display 2 markers', () => {
    const currentCityUpdateMock = vi.fn(() => 0);
    render(
      <MapElement
        cities={testCities}
        currentCityUpdate={currentCityUpdateMock}
        currentCity={null}
      />,
    );

    const markers = screen.getAllByAltText('Marker');
    expect(markers.length).toEqual(2);
  });

  it('should have a Marker for first test city', () => {
    const currentCityUpdateMock = vi.fn(() => 0);
    render(
      <MapElement
        cities={testCities}
        currentCityUpdate={currentCityUpdateMock}
        currentCity={null}
      />,
    );

    const toulouseMarker = screen.getByRole('button', {
      description: testCities[0].name,
    });
    expect(toulouseMarker).toBeInTheDocument();
  });

  it('should call updater on marker click', async () => {
    const user = userEvent.setup();
    const currentCityUpdateMock = vi.fn(() => 0);
    render(
      <MapElement
        cities={testCities}
        currentCityUpdate={currentCityUpdateMock}
        currentCity={null}
      />,
    );
    const firstMarker = screen.getByRole('button', {
      description: testCities[0].name,
    });
    await user.click(firstMarker);
    expect(currentCityUpdateMock).toHaveBeenCalledWith(testCities[0]);

    const marseilleMarker = screen.getByRole('button', {
      description: testCities[1].name,
    });
    await user.click(marseilleMarker);
    expect(currentCityUpdateMock).toHaveBeenCalledWith(testCities[1]);
  });

  it('should have a selected marker if there is a current city', async () => {
    const currentCityUpdateMock = vi.fn(() => 0);
    const { container } = render(
      <MapElement
        cities={testCities}
        currentCityUpdate={currentCityUpdateMock}
        currentCity={testCities[0]}
      />,
    );
    const selectedMarker = container.getElementsByClassName('selected-marker');
    expect(selectedMarker.length).toEqual(1);
  });
});
