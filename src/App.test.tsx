import { describe, expect, it } from 'vitest';

import App from './App';

import { render, screen, userEvent } from './utils/test-utils';
import { cities } from './data/cities';
import { testSearchedCity } from './mocks/cities';

describe('Home test', () => {
  it('the title is visible', () => {
    render(<App />);
    const helpText = screen.getByText(/Please select a city/i);
    expect(helpText).toBeInTheDocument();
  });

  it('should display forecast on city selection', async () => {
    const user = userEvent.setup();
    render(<App />);
    const firstMarker = screen.getByRole('button', {
      description: cities[0].name,
    });
    await user.click(firstMarker);
    const cityName = screen.getByTitle('Selected city');
    expect(cityName).toBeInTheDocument();
    expect(cityName.textContent).toEqual(cities[0].name);
  });

  it('should display forecast on location search', async () => {
    const user = userEvent.setup();
    render(<App />);
    const submitBtn = screen.getByTitle('Click to search location');
    const searchInput = screen.getByPlaceholderText('Search location');
    await user.type(searchInput, 'Test');
    await user.click(submitBtn);
    const cityName = screen.getByTitle('Selected city');
    expect(cityName).toBeInTheDocument();
    expect(cityName.textContent).toEqual(testSearchedCity.name);
  });
});
