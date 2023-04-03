import { describe, expect, it, vi } from 'vitest';

import App from './App';

import { render, screen, userEvent } from '../test-utils';
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
    const helpText = screen.getByText(`3-day forecast for ${cities[0].name}`);
    expect(helpText).toBeInTheDocument();
  });
});
