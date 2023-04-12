import { render, screen, userEvent } from '@/utils/test-utils';
import WeatherIcon from './WeatherIcon';
import { Condition } from '@/utils/owm-client/types';

describe('WeatherIcon', () => {
  it('should display the condition', () => {
    render(
      <WeatherIcon
        condition={Condition.ThunderstormDrizzleHeavy}
        description="thunderstorm with heavy drizzle"
      />,
    );

    const tempText = screen.getByLabelText('thunderstorm with heavy drizzle');
    expect(tempText).toBeInTheDocument();
  });

  it('should make the label visible on click', async () => {
    const user = userEvent.setup();
    render(
      <WeatherIcon
        condition={Condition.ThunderstormDrizzleHeavy}
        description="thunderstorm with heavy drizzle"
      />,
    );

    const button = screen.getByRole('button');
    await user.click(button);
    const tempText = screen.getByText('thunderstorm with heavy drizzle');
    expect(tempText).toBeInTheDocument();
  });
});
