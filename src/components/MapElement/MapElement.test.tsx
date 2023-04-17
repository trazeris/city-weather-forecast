import { describe, expect, it } from 'vitest';
import { render, screen, userEvent } from '@/utils/test-utils';

import MapElement from './MapElement';
import { SelectedCityContext } from '@/contexts/SelectedCity.context';
import { FavoriteCitiesContext } from '@/contexts/FavoriteCities.context';
import {
  mockFavoriteCitiesContext,
  mockFavoriteCitiesContextWithCities,
} from '@/mocks/favorite-cities.context';
import {
  mockSelectedCityContext,
  mockSelectedCityContextWithCity,
} from '@/mocks/selected-city.context';
import { City } from '@/model';

let toulouse: City;
let marseille: City;

describe('MapElement', () => {
  beforeAll(async () => {
    toulouse = mockFavoriteCitiesContextWithCities.favoriteCities[0];
    marseille = mockFavoriteCitiesContextWithCities.favoriteCities[1];
  });
  it('should display a map with controls', () => {
    const { container } = render(
      <FavoriteCitiesContext.Provider value={mockFavoriteCitiesContext}>
        <MapElement />
      </FavoriteCitiesContext.Provider>,
    );

    // eslint-disable-next-line testing-library/no-container
    const selectedMarker = container.getElementsByClassName('leaflet-tile');
    expect(selectedMarker.length).toEqual(1);
  });

  it('should display 2 markers', () => {
    render(
      <FavoriteCitiesContext.Provider
        value={mockFavoriteCitiesContextWithCities}
      >
        <MapElement />
      </FavoriteCitiesContext.Provider>,
    );

    const markers = screen.getAllByAltText('Marker');
    expect(markers.length).toEqual(2);
  });

  it('should have a Marker for first test city', () => {
    render(
      <FavoriteCitiesContext.Provider
        value={mockFavoriteCitiesContextWithCities}
      >
        <MapElement />
      </FavoriteCitiesContext.Provider>,
    );
    const toulouseMarker = screen.getByRole('button', {
      description: toulouse.name,
    });
    expect(toulouseMarker).toBeInTheDocument();
  });

  it('should call updater on marker click', async () => {
    const user = userEvent.setup();
    render(
      <SelectedCityContext.Provider value={mockSelectedCityContext}>
        <FavoriteCitiesContext.Provider
          value={mockFavoriteCitiesContextWithCities}
        >
          <MapElement />
        </FavoriteCitiesContext.Provider>
      </SelectedCityContext.Provider>,
    );
    const firstMarker = screen.getByRole('button', {
      description: toulouse.name,
    });
    await user.click(firstMarker);
    expect(mockSelectedCityContext.setCurrentCity).toHaveBeenCalledWith(
      toulouse,
    );

    const marseilleMarker = screen.getByRole('button', {
      description: marseille.name,
    });
    await user.click(marseilleMarker);
    expect(mockSelectedCityContext.setCurrentCity).toHaveBeenCalledWith(
      marseille,
    );
  });

  it('should have a selected marker if there is a current city', async () => {
    const { container } = render(
      <SelectedCityContext.Provider value={mockSelectedCityContextWithCity}>
        <FavoriteCitiesContext.Provider
          value={mockFavoriteCitiesContextWithCities}
        >
          <MapElement />
        </FavoriteCitiesContext.Provider>
      </SelectedCityContext.Provider>,
    );
    // eslint-disable-next-line testing-library/no-container
    const selectedMarker = container.getElementsByClassName('selected-marker');
    expect(selectedMarker.length).toEqual(1);
  });
});
