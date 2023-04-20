import { render, screen, userEvent } from '@/utils/test-utils';
import { mockSelectedCityContext } from '@/mocks/selected-city.context';
import { SelectedCityContext } from '@/contexts/SelectedCity.context';
import { testSearchedCity } from '@/mocks/cities';
import FavoriteCityElement from './FavoriteCityElement';

describe('FavoriteCityElement', () => {
  it('should display a button with the city name', () => {
    render(<FavoriteCityElement city={testSearchedCity} />);

    const cityButton = screen.getByRole('button');
    expect(cityButton).toBeInTheDocument();
    expect(cityButton.innerHTML).toEqual(testSearchedCity.name);
  });

  it('should not call context updater on click', async () => {
    const user = userEvent.setup();
    render(
      <SelectedCityContext.Provider value={mockSelectedCityContext}>
        <FavoriteCityElement city={testSearchedCity} />
      </SelectedCityContext.Provider>,
    );
    const cityButton = screen.getByRole('button');
    await user.click(cityButton);
    expect(mockSelectedCityContext.setCurrentCity).toHaveBeenCalledWith(
      testSearchedCity,
    );
  });
});
