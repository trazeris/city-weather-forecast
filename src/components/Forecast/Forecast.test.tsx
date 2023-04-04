import { describe, expect, it } from 'vitest';
import { render, screen } from '@/utils/test-utils';
import Forecast from './Forecast';

describe('Forecast', () => {
  it('should display a temperature', () => {
    render(<Forecast dateIndex={0} temp={20} />);

    const tempText = screen.getByText('20°C');
    expect(tempText).toBeInTheDocument();
  });
});
