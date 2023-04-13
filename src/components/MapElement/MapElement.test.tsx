import { describe, expect, it } from 'vitest';
import { render, screen, userEvent } from '@/utils/test-utils';

import MapElement from './MapElement';
import { SelectedCityContext } from '@/contexts/SelectedCity.context';
import { mockContext, mockContextWithCity, testCities } from '@/mocks/cities';

describe('MapElement', () => {
  it('should display a map with controls', () => {
    render(<MapElement cities={testCities} />);

    // maybe we should use querySelector to check for tiles

    const zoomInBtn = screen.getByLabelText('Zoom in');
    expect(zoomInBtn).toBeInTheDocument();
  });

  it('should display 2 markers', () => {
    render(<MapElement cities={testCities} />);

    const markers = screen.getAllByAltText('Marker');
    expect(markers.length).toEqual(2);
  });

  it('should have a Marker for first test city', () => {
    render(<MapElement cities={testCities} />);

    const toulouseMarker = screen.getByRole('button', {
      description: testCities[0].name,
    });
    expect(toulouseMarker).toBeInTheDocument();
  });

  it('should call updater on marker click', async () => {
    const user = userEvent.setup();
    render(
      <SelectedCityContext.Provider value={mockContext}>
        <MapElement cities={testCities} />
      </SelectedCityContext.Provider>,
    );
    const firstMarker = screen.getByRole('button', {
      description: testCities[0].name,
    });
    await user.click(firstMarker);
    expect(mockContext.setCurrentCity).toHaveBeenCalledWith(testCities[0]);

    const marseilleMarker = screen.getByRole('button', {
      description: testCities[1].name,
    });
    await user.click(marseilleMarker);
    expect(mockContext.setCurrentCity).toHaveBeenCalledWith(testCities[1]);
  });

  it('should have a selected marker if there is a current city', async () => {
    const { container } = render(
      <SelectedCityContext.Provider value={mockContextWithCity}>
        <MapElement cities={testCities} />
      </SelectedCityContext.Provider>,
    );
    // eslint-disable-next-line testing-library/no-container
    const selectedMarker = container.getElementsByClassName('selected-marker');
    expect(selectedMarker.length).toEqual(1);
  });
});
