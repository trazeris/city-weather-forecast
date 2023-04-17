import { render, screen, userEvent } from '@/utils/test-utils';
import { mockSelectedCityContext } from '@/mocks/selected-city.context';
import { SelectedCityContext } from '@/contexts/SelectedCity.context';
import LocationFinder from './LocationFinder';
import { FavoriteCitiesContext } from '@/contexts/FavoriteCities.context';
import { mockFavoriteCitiesContext } from '@/mocks/favorite-cities.context';
import { testSearchedCity } from '@/mocks/cities';

describe('LocationFinder', () => {
  it('should display an input for search', () => {
    render(<LocationFinder />);

    const searchInput = screen.getByPlaceholderText('Search location');
    expect(searchInput).toBeInTheDocument();
    const btnInput = screen.getByTitle('Click to search location');
    expect(btnInput).toBeInTheDocument();
  });

  it('should not call contexts updaters when input is empty', async () => {
    const user = userEvent.setup();
    render(
      <SelectedCityContext.Provider value={mockSelectedCityContext}>
        <FavoriteCitiesContext.Provider value={mockFavoriteCitiesContext}>
          <LocationFinder />
        </FavoriteCitiesContext.Provider>
      </SelectedCityContext.Provider>,
    );
    const submitBtn = screen.getByRole('button');
    await user.click(submitBtn);
    expect(mockFavoriteCitiesContext.addCityToFavorites).toHaveBeenCalledTimes(
      0,
    );
  });

  it('should call contexts updaters on submit', async () => {
    const user = userEvent.setup();
    render(
      <SelectedCityContext.Provider value={mockSelectedCityContext}>
        <FavoriteCitiesContext.Provider value={mockFavoriteCitiesContext}>
          <LocationFinder />
        </FavoriteCitiesContext.Provider>
      </SelectedCityContext.Provider>,
    );
    const submitBtn = screen.getByRole('button');
    const searchInput = screen.getByPlaceholderText('Search location');
    await user.type(searchInput, 'Test');
    await user.click(submitBtn);
    expect(mockFavoriteCitiesContext.addCityToFavorites).toHaveBeenCalledWith(
      testSearchedCity,
    );
    expect(mockSelectedCityContext.setCurrentCity).toHaveBeenCalledWith(
      testSearchedCity,
    );
  });
});
