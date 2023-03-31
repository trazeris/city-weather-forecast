import { describe, expect, it } from 'vitest';

import App from './App';

import { render, screen } from '../test-utils';

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
});
