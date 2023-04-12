import { LatLng } from 'leaflet';
import MapPopup from './MapPopup';
import { render, screen, waitForElementToBeRemoved } from '@/utils/test-utils';
import { City } from '@/model';
import { server } from '@/mocks/server';
import { rest } from 'msw';

const testCity: City = {
  name: 'Cityname',
  coords: new LatLng(43.6047, 1.4442),
};
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

    render(<MapPopup city={testCity} />);

    await waitForElementToBeRemoved(() => screen.queryAllByRole('alert'));
    const errorText = screen.getByText(
      'An error occurred while fetching weather',
    );
    expect(errorText).toBeInTheDocument();
  });
});
