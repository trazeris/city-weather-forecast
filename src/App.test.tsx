import { describe, expect, it } from 'vitest';

import App from './App';

import { render, screen, userEvent } from './utils/test-utils';
import { cities } from './data/cities';

describe('Home test', () => {
  it('the title is visible', () => {
    render(<App />);
    const welcomeText = screen.getByText(/City Weather Forecast/i);
    expect(welcomeText).toBeInTheDocument();
    const helpText = screen.getByText(
      /Please click on a city to get forecast/i,
    );
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
});
