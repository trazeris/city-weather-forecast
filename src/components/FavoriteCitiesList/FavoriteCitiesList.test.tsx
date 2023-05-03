import { render, screen, userEvent } from '@/utils/test-utils';
import { mockSelectedCityContext } from '@/mocks/selected-city.context';
import { SelectedCityContext } from '@/contexts/SelectedCity.context';
import FavoriteCitiesList from './FavoriteCitiesList';
import { FavoriteCitiesContext } from '@/contexts/FavoriteCities.context';
import { mockFavoriteCitiesContextWithCities } from '@/mocks/favorite-cities.context';

describe('FavoriteCitiesList', () => {
  it('should display a button with the city name', () => {
    render(
      <SelectedCityContext.Provider value={mockSelectedCityContext}>
        <FavoriteCitiesContext.Provider
          value={mockFavoriteCitiesContextWithCities}
        >
          <FavoriteCitiesList />
        </FavoriteCitiesContext.Provider>
      </SelectedCityContext.Provider>,
    );

    const favMenuButton = screen.getByTitle('Open favorites');
    expect(favMenuButton).toBeInTheDocument();
  });

  it('should not call context updater on fav menu click', async () => {
    const user = userEvent.setup();
    render(
      <SelectedCityContext.Provider value={mockSelectedCityContext}>
        <FavoriteCitiesContext.Provider
          value={mockFavoriteCitiesContextWithCities}
        >
          <FavoriteCitiesList />
        </FavoriteCitiesContext.Provider>
      </SelectedCityContext.Provider>,
    );
    const favMenuButton = screen.getByTitle('Open favorites');
    await user.click(favMenuButton);
    expect(mockSelectedCityContext.setCurrentCity).toHaveBeenCalledWith(null);
  });
});
