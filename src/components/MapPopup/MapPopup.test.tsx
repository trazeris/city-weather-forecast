import MapPopup from './MapPopup';
import { rest } from 'msw';
import { render, screen, waitForElementToBeRemoved } from '@/utils/test-utils';
import { server } from '@/mocks/server';
import { SelectedCityContext } from '@/contexts/SelectedCity.context';
import { mockSelectedCityContextWithCity } from '@/mocks/selected-city.context';

describe('MapPopup', () => {
  it('should display an error on request error', async () => {
    server.use(
      rest.get(
        'https://api.openweathermap.org/data/2.5/onecall',
        (req, res, ctx) => {
          return res(ctx.status(400), ctx.json([]));
        },
      ),
    );

    render(
      <SelectedCityContext.Provider value={mockSelectedCityContextWithCity}>
        <MapPopup />
      </SelectedCityContext.Provider>,
    );

    await waitForElementToBeRemoved(() => screen.queryAllByRole('alert'));
    const errorText = screen.getByText(
      'An error occurred while fetching weather',
    );
    expect(errorText).toBeInTheDocument();
  });
});
